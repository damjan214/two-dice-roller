const diceFaces = {
    1: [[1, 1]],
    2: [[0, 0], [2, 2]],
    3: [[0, 0], [1, 1], [2, 2]],
    4: [[0, 0], [0, 2], [2, 0], [2, 2]],
    5: [[0, 0], [0, 2], [1, 1], [2, 0], [2, 2]],
    6: [[0, 0], [0, 2], [1, 0], [1, 2], [2, 0], [2, 2]]
};

class TwoDiceRoller extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.shadowRoot.innerHTML = `
    <style>
      .wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      .dice-container {
        display: flex;
        gap: 2rem;
        margin-bottom: 20px;
      }

      .dice {
        width: 100px;
        height: 100px;
        background: white;
        border-radius: 16px;
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(3, 1fr);
        padding: 10px;
        gap: 5px;
        transition: transform 0.5s ease;
      }

      .dot {
        width: 10px;
        height: 10px;
        background: black;
        border-radius: 50%;
        margin: auto;
      }

      .roll-button {
        padding: 10px 20px;
        font-size: 16px;
        border: none;
        background: #4f46e5;
        color: white;
        border-radius: 8px;
        cursor: pointer;
        transition: background 0.3s ease;
      }

      .roll-button:hover {
        background: #4338ca;
      }

      .rolling {
        transform: rotate(360deg);
      }
    </style>

    <div class="wrapper">
      <div class="dice-container">
        <div id="dice1" class="dice"></div>
        <div id="dice2" class="dice"></div>
      </div>
      <button class="roll-button">Roll the dice</button>
    </div>
  `;

        this.dice1 = this.shadowRoot.getElementById('dice1');
        this.dice2 = this.shadowRoot.getElementById('dice2');
        this.button = this.shadowRoot.querySelector('button');

        this.button.addEventListener('click', () => this.rollBothDice());

        this.renderDots(this.dice1, 1);
        this.renderDots(this.dice2, 1);
    }

    rollDice(diceElement) {
        diceElement.classList.add('rolling');
        setTimeout(() => {
            const value = Math.floor(Math.random() * 6) + 1;
            this.renderDots(diceElement, value);
            diceElement.classList.remove('rolling');
        }, 500);
    }

    rollBothDice() {
        this.rollDice(this.dice1);
        this.rollDice(this.dice2);
    }

    renderDots(diceElement, value) {
        diceElement.innerHTML = '';
        for (let row = 0; row < 3; row++) {
            for (let col = 0; col < 3; col++) {
                const dot = document.createElement('div');
                const hasDot = diceFaces[value].some(([r, c]) => r === row && c === col);
                if (hasDot) dot.className = 'dot';
                diceElement.appendChild(dot);
            }
        }
    }
}

customElements.define('two-dice-roller', TwoDiceRoller);
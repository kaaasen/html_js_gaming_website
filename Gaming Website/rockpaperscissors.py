from flask import Flask, request, jsonify
import random

app = Flask(__name__)

@app.route('/play', methods=['POST'])
def play():
    try:
        choice = request.json['choice']
        if choice not in ['rock', 'paper', 'scissors']:
            raise ValueError("Invalid choice")
    except (KeyError, ValueError):
        return jsonify({'error': 'Invalid request'}), 400
    
    computer_choice = random.choice(['rock', 'paper', 'scissors'])
    result = determine_winner(choice, computer_choice)
    return jsonify({'computer_choice': computer_choice, 'result': result})

def determine_winner(player_choice, computer_choice):
    if player_choice == computer_choice:
        return "It's a tie!"
    elif (player_choice == "rock" and computer_choice == "scissors"
            or player_choice == "paper" and computer_choice == "rock"
            or player_choice == "scissors" and computer_choice == "paper"):
        return "You win!"
    else:
        return "Computer wins!"

if __name__ == '__main__':
    app.run()

# useCountDownTimer

A custom React hook for creating a countdown timer.

## Usage

To use `useCountDownTimer`, import it into your React component and call it in the same way you would call any other hook. It takes an options object with the following properties:

- `days` (optional, default `0`): The number of days to count down from.
- `hours` (optional, default 0): The number of hours to count down from.
- `minutes` (optional, default 0): The number of minutes to count down from.
- `seconds` (optional, default 0): The number of seconds to count down from.
- `executeFunctionOnExpired` (optional): A function to be executed when the countdown timer expires.

`useCountDownTimer` returns an object with the following properties:

- `days`: The number of days remaining in the countdown.
- `hours`: The number of hours remaining in the countdown.
- `minutes`: The number of minutes remaining in the countdown.
- `seconds`: The number of seconds remaining in the countdown.
- `distance`: The time remaining in the countdown in milliseconds.
- `resetTimeFunction`: A function that can be called to reset the countdown timer.

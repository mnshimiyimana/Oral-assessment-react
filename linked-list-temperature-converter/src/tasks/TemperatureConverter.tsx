import React, { Component } from 'react';

interface State {
    celsius: string;
    fahrenheit: string;
}

class TemperatureConverter extends Component<{}, State> {
    constructor(props: {}) {
        super(props);
        this.state = {
            celsius: '',
            fahrenheit: ''
        };
    }

    handleCelsiusChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const celsius = event.target.value;
        const fahrenheit = this.convertCelsiusToFahrenheit(parseFloat(celsius));
        
        this.setState({ celsius, fahrenheit });
    };

    handleFahrenheitChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const fahrenheit = event.target.value;
        const celsius = this.convertFahrenheitToCelsius(parseFloat(fahrenheit));
        
        this.setState({ fahrenheit, celsius });
    };

    convertCelsiusToFahrenheit(celsius: number): string {
        return ((celsius * 9/5) + 32).toFixed(2);
    }

    convertFahrenheitToCelsius(fahrenheit: number): string {
        return ((fahrenheit - 32) * 5/9).toFixed(2);
    }

    render() {
        const { celsius, fahrenheit } = this.state;

        return (
            <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
                <h1 className="text-2xl font-bold mb-4 text-center">Temperature Converter</h1>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">
                        Celsius:
                        <input 
                            type="number" 
                            value={celsius} 
                            onChange={this.handleCelsiusChange} 
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                        />
                    </label>
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">
                        Fahrenheit:
                        <input 
                            type="number" 
                            value={fahrenheit} 
                            onChange={this.handleFahrenheitChange} 
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                        />
                    </label>
                </div>
            </div>
        );
    }
}

export default TemperatureConverter;
  // Define fare rates for different routes or destinations
  const fareRates = {
    'Pretoria': {
        'Johannesburg': 60, // Fare from Pretoria to Johannesburg in currency units (e.g., ZAR)
        // Add more destinations and fares as needed
    },
    'Johannesburg': {
        'Durban': 280, // Fare from Johannesburg to Pretoria
        //will Add more fares as needed
    },
    // will Add more cities or areas with their respective fares
};

// Function to calculate taxi fare from point A to point B
function calculateTaxiFare(start, end) {
    if (fareRates[start] && fareRates[start][end]) {
        return fareRates[start][end];
    } else {
        return null;
    }
}
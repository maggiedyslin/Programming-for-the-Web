Vue.createApp({
    data() {
      return {
        firstName: '',
        lastName: '',
        street: '',
        state: 'MN',
        availableStates: [
            { value: 'AL', name: 'Alabama' },
            { value: 'AK', name: 'Alaska' },
            { value: 'AZ', name: 'Arizona' },
            { value: 'AZ', name: 'Arkansas' },
            { value: 'CA', name: 'California' },
            { value: 'CO', name: 'Colorado' },
            { value: 'CT', name: 'Connecticut' },
            { value: 'DE', name: 'Delaware' },
            { value: 'DC', name: 'District of Columbia' },
            { value: 'FL', name: 'Florida' },
            { value: 'GA', name: 'Georgia' },
            { value: 'HI', name: 'Hawaii' },
            { value: 'ID', name: 'Idaho' },
            { value: 'IL', name: 'Illinois' },
            { value: 'IN', name: 'Indiana' },
            { value: 'IA', name: 'Iowa' },
            { value: 'KS', name: 'Kansas' },
            { value: 'KY', name: 'Kentucky' },
            { value: 'LA', name: 'Louisiana' },
            { value: 'ME', name: 'Maine' },
            { value: 'MD', name: 'Maryland' },
            { value: 'MA', name: 'Massachusetts' },
            { value: 'MI', name: 'Michigan' },
            { value: 'MN', name: 'Minnesota' },
            { value: 'MS', name: 'Mississippi' },
            { value: 'MO', name: 'Missouri' },
            { value: 'MT', name: 'Montana' },
            { value: 'NE', name: 'Nebraska' },
            { value: 'NV', name: 'Nevada' },
            { value: 'NH', name: 'New Hampshire' },
            { value: 'NJ', name: 'New Jersey' },
            { value: 'NM', name: 'New Mexico' },
            { value: 'NY', name: 'New York' },
            { value: 'NC', name: 'North Carolina' },
            { value: 'ND', name: 'North Dakota' },
            { value: 'OH', name: 'Ohio' },
            { value: 'OK', name: 'Oklahoma' },
            { value: 'OR', name: 'Oregon' },
            { value: 'PA', name: 'Pennsylvania' },
            { value: 'RI', name: 'Rhode Island' },
            { value: 'SC', name: 'South Carolina' },
            { value: 'SD', name: 'South Dakota' },
            { value: 'TN', name: 'Tennessee' },
            { value: 'TX', name: 'Texas' },
            { value: 'UT', name: 'Utah' },
            { value: 'VT', name: 'Vermont' },
            { value: 'VA', name: 'Virginia' },
            { value: 'WA', name: 'Washington' },
            { value: 'WV', name: 'West Virginia' },
            { value: 'WI', name: 'Wisconson' },
            { value: 'WY', name: 'Wyoming'}
        ],
        selectedColors: [],
        colors: [
            {
                name: 'Orange',
                value: 'orange'
            },
            {
                name: 'Blue',
                value: 'blue'
            },
            {
                name: 'Green',
                value: 'green'
            },
            {
                name: 'Purple',
                value: 'purple'
            },
            {
                name: 'Grey (light, medium, dark)',
                value: 'grey'
            },
            {
                name: 'Yellow',
                value: 'yellow'
            },
            {
                name: 'White',
                value: 'white'
            },
            {
                name: 'Black',
                value: 'black'
            },
            {
                name: 'Brown (light, medium, dark)',
                value: 'brown'
            },
        ],
        status: ''
      }
    }
  }).mount("#alpacaForm");
  
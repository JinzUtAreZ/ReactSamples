Input Pattern Templates

## sample

<InputField
label="Email Address"
value={txtInput.EmailLang}
name="EmailLang"
type="text"
validtype="email"
placeholder="Enter your email here..."
validators={[Validators.email, Validators.required]}
onChange={handleChange('EmailLang')}
/>

####

Validators
validators={[Validators.email, Validators.required]}

1. email
2. number
3. money
4. password

const [txtInput, setTxtInput] = useState({});

const handleChange = (key) => (value) => {
setTxtInput({ ...txtInput, [key]: value });
};

Validators for Tables
align={validateTable(cells[cell]) === true ? 'right' : 'left'}

1. for styling, etc.

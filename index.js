// Buttons
import '@material/web/button'; 

// Text Field
import '@material/web/textfield';

// Icons
import '@material/web/icon';

// Register components

import {Button} from '@material/web/button';
Button.register();

import {TextField} from '@material/web/textfield';
TextField.register();

import {Icon} from '@material/web/icon';
Icon.register();

// Import and register TextField
import {TextField} from '@material/web/textfield';
TextField.register();

// Log registered component
console.log(TextField);
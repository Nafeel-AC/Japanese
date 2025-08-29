import { Header } from './Header.js';
import { Hero } from './Hero.js';
import { Worries } from './Worries.js';
import { Strengths } from './Strengths.js';
import { UseCases } from './UseCases.js';
import { Contact } from './Contact.js';
import { Footer } from './Footer.js';

export function App() {
    return `
        ${Header()}
        ${Hero()}
        ${Worries()}
        ${Strengths()}
        ${UseCases()}
        ${Contact()}
        ${Footer()}
    `;
}

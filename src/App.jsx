
import './App.css'
import Button from './components/Button/Button';
import ParagraphLow from './components/ParagraphLow/ParagraphLow';
import Headling from './components/Headling/Headling';
function App() {
  const text = 'Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.';
    const textButtonSearch = 'Искать'

  
  return (
    <>
        <Headling>Поиск</Headling>
        <ParagraphLow
        text={text}
        />
        <Button
        text={textButtonSearch}
        />
        
    </>
  );
}

export default App

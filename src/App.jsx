
import './App.css'
import Button from './components/Button/Button';
import ParagraphLow from './components/ParagraphLow/ParagraphLow';
import Headling from './components/Headling/Headling';
function App() {
  const text = 'Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.';
    
  
  
  return (
    <>
        <Headling>Поиск</Headling>
        <ParagraphLow
        text={text}
        />
        <Button/>
        
    </>
  );
}

export default App

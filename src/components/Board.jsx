import { useState } from 'react';
import './Board.css'
import Unit from './Unit'
import bingo from '../../public/bingoWin.jpg'

function Board({setWin}) 
{

    const unitItems = [
        'Устрично-анчоусная-каперсиновость', 
        'Брендированная футболка в стирке',
        'Извините что мятая футболка',
        'Все видео продажные',
        'Слишком скучное блюдо',
        'Слишком много разного добавили в блюдо',
        'Охлажденка',
        'Машка во всем виновата',
        'Как же мало салфеток',
        'Я бы сделал так:',
        '*шутит несмешно*',
        'Открыл ресторан'
    ];

    const [listItems, setItems] = useState(unitItems.map(item => {
        return {
            state: false,
            id : crypto.randomUUID(),
            text: item
        }
    }),
    [])

    function ckeckItem(text) 
    {
        const tempList = listItems.slice();
        const currentItem = tempList.find(item => item.text == text);
        currentItem.state = !currentItem.state;
        setItems(tempList);
    }

    const bingoWin = (
        <div className='board'
        style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent : 'center'
        }}>
            <img src={bingo} alt="" 
            style={{
                cursor: 'pointer'
            }}
            onClick={() => location.reload()}
            />
        </div>
    )


    listItems.map(item => {
        return 
    })

    if (listItems.filter(item => item.state).length > 2) 
    {   
        let counter = 0;

        const checkArray = [];
        
        for (let index = 0; index < (listItems.length / 4); index++) 
        {
            
            checkArray.push(listItems.slice(counter, counter + 4  || listItems.length));
            counter += 4;
            
        }
        
        for (let index = 0; index < checkArray.length; index++) {
            
            if (checkArray[index].filter(item => item.state === true).length > 3)
            {
                return bingoWin
                
            }
        }

        for (let index = 0; index < checkArray[0].length; index++) {

            let flag = true;

            for (let i=0; i < checkArray.length; i++)
            {
                if (checkArray[i][index].state === false) {
                    flag = false;
                    break;
                }
            }

            if (flag == true) return bingoWin
        }

    }
    
    return (
        <div><div id='title'>Бинго Обломова</div>
        <div
            className='board'
        >
            { listItems.map(item => {
                return <Unit textValue={item.text} setItem={ckeckItem}/>
            }) }
        </div>
        </div>
    )
}

export default Board
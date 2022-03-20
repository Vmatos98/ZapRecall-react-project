
export const decks = {
    React:{
        data: [
            {
                question: 'O que é JSX?',
                answer: `Uma extensão de linguagem do JavaScript`
            },
            {
                question: 'O React é __',
                answer: 'uma biblioteca JavaScript para construção de interfaces'
            },
            {
                question: 'Componentes devem iniciar com __',
                answer: 'letra maiúscula'
            },
            {
                question: 'Podemos colocar __ dentro do JSX',
                answer: 'expressões'
            },
            {
                question: 'O ReactDOM nos ajuda __ ',
                answer: 'interagindo com a DOM para colocar componentes React na mesma'
            },
            {
                question: 'Usamos o npm para __ ',
                answer: 'gerenciar os pacotes necessários e suas dependências'
            },
            {
                question: 'Usamos props para __',
                answer: 'passar diferentes informações para componentes'
            },
            {
                question: 'Usamos estado (state) para __',
                answer: 'dizer para o React quais informações quando atualizadas devem renderizar a tela novamente'
            }
        
        ]
    },
    Javascript:{
        data: [
        {
            question: '',
        },
        
        
        ]
    }
}
export const zapStatus={
    green:{icon: <ion-icon style={{color: '#2FBE34'}} name="checkmark-circle-sharp"></ion-icon>, class:"zap"},
    orange:{icon: <ion-icon style={{color: '#FF922E'}} name="help-circle"></ion-icon>, class:"almost"},
    red:{icon: <ion-icon style={{color: '#FF3030'}} name="close-circle-sharp"></ion-icon>, class:"fail"}
}
export const finish={
    zap:{title: "PARABÉNS!", message: "Você não esqueceu de nenhum flashcard!" },
    fail:{title: "PUTZ!", message: "Ainda faltaram alguns...Mas não desanime!" }
}

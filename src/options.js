module.exports = {
     Button: {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{text: "Мой GitHub", url: 'https://github.com/Salaxiddin'}],
                [{text:"Получить информацию", callback_data:"/info"}],
                [{text:"Проекты", callback_data:"/projects"}],
            ]
        })
    },
    InfoButton:{
        reply_markup:JSON.stringify({
            inline_keyboard:[
                [{text:"Веб сайт", url:"https://icelink.vercel.app"}],
                [{text:"Проекты", callback_data:"/projects"}]
            ]
        })
    },
    ProjectsButton:{
        reply_markup:JSON.stringify({
            inline_keyboard:[
                [{text:"Проекты", callback_data:"/projects"}]
            ]
        })
    },
}

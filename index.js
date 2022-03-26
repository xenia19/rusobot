const { Telegraf, Markup } = require('telegraf')

const express = require("express")

const app = express()

const CURRENT_URL = "https://young-earth-23614.herokuapp.com/";

const bot = new Telegraf('5080401001:AAFK1IodTe27_hPePDaqgzHP96-4-li3T94')






bot.start((ctx) => {ctx.reply(`Hola ${ctx.from.first_name}! Soy Matrioshka. Te voy a ayudar con el Ruso. Qué te interesa?`,
Markup.inlineKeyboard([[
Markup.button.callback("💪 Empezar desde 0", "Empezar ahora desde 0")],

[Markup.button.callback("💯 La pronunciacion ", "pronunciacion")]

,
[
  Markup.button.callback("🤸‍♀️ Los verbos", "verbos"),
  Markup.button.callback("🔟 Los numeros", "numeros"),



],

[Markup.button.callback("👀 Hacer un curso de Ruso", "curso")]
,
[Markup.button.callback("👩‍🏫 Clases por Skype", "clases")],

[Markup.button.callback("🌞 Las palabras más usadas", "palabras")],
[Markup.button.callback("🍬 Los casos", "casos")]]
)
)
}
)

bot.command('/numeros', (ctx) => {ctx.reply('Elige el tema',
Markup.inlineKeyboard([
Markup.button.callback("De 0 a 20", 'De 0 a 20'),
Markup.button.callback("De 20 a 100", 'De 20 a 100'),
Markup.button.callback("Una prueba", 'Una prueba'),
]
)


)

})


bot.on('text', (ctx) => {
  {ctx.reply('Elige el tema',
  Markup.inlineKeyboard([[
    Markup.button.callback("💪 Empezar desde 0", "Empezar ahora desde 0")],
    
    [Markup.button.callback("💯 La pronunciacion ", "pronunciacion")]
    
    ,
    [
      Markup.button.callback("🤸‍♀️ Los verbos", "verbos"),
      Markup.button.callback("🔟 Los numeros", "numeros"),
    
    
    
    ],
    
    [Markup.button.callback("👀 Hacer un curso de Ruso", "curso")]
    ,
    [Markup.button.callback("👩‍🏫 Clases por Skype", "clases")],
    
    [Markup.button.callback("🌞 Las palabras más usadas", "palabras")],
    [Markup.button.callback("🍬 Los casos", "casos")]]
    )
  )
  }
} )

bot.command('/clases', (ctx) => {ctx.reply('Gracias por tu interes en mis clases! Yo doy clases hasta las 21:00 de España (hasta las 14:00 de México). El precio de una clase (de 1 hora) es 15 euros. Se puede reservar la clase aqui - https://curso-de-ruso.com/clases-por-skype/',
)
})

bot.command('/curso', (ctx) =>
 {ctx.reply('Puedes probar mi curso de Ruso Basico completo aquí - https://curso-de-ruso.com/basico/alumno/course/view.php?id=2',
)
})

bot.command('/verbos', (ctx) => {ctx.reply('Elige un tema',
Markup.inlineKeyboard([
  [Markup.button.callback("Todo sobre los verbos", 'Todo sobre los verbos')],
[Markup.button.callback("Los verbos de movimiento", 'Los verbos de movimiento')],
[Markup.button.callback("Los verbos más usados", 'Los verbos más usados')],
[Markup.button.callback("Prefijos con los verbos", 'Prefijos con los verbos')],
[Markup.button.callback("Los verbos que terminan con овать", 'Los verbos que terminan con овать')]
])

// 
)
})


bot.command('/palabras', (ctx) => {ctx.reply('Las palabras más usadas en Ruso',

Markup.inlineKeyboard([
  [Markup.button.callback("De 1 a 50", 'De 1 a 50'),
Markup.button.callback("De 51 a 100", 'De 51 a 100')],
[Markup.button.callback("De 101 a 150", 'De 101 a 150'),
Markup.button.callback("De 151 a 200", 'De 151 a 200')],
[Markup.button.callback("De 201 a 250", 'De 201 a 250')]
])
)
})

bot.command('/casos', (ctx) => {ctx.reply('Elige un tema',

Markup.inlineKeyboard([
[Markup.button.callback("El Prepositivo", 'El Prepositivo'),
Markup.button.callback("El Acusativo", 'El Acusativo')],
[Markup.button.callback("El Dativo", 'El Dativo'),
Markup.button.callback("El Instrumental", 'El Instrumental')],
[Markup.button.callback("El Genitivo", 'El Genitivo')]
])
 )
})


bot.command('/pronunciacion', (ctx) => {ctx.reply('Elige un tema',

Markup.inlineKeyboard([
[Markup.button.callback("Las reglas de pronunciacion", 'Las reglas de pronunciacion')],
[Markup.button.callback("Trabalenguas", 'Trabalenguas')],
[Markup.button.callback("Cuando 'o' se pronuncia como 'a'? ", 'pronunciacion de o')
]])
)
})

bot.action('pronunciacion', (ctx) => {ctx.reply('Elige el tema',
Markup.inlineKeyboard([
  [Markup.button.callback("Las reglas de pronunciacion", 'Las reglas de pronunciacion')],
  [Markup.button.callback("Trabalenguas", 'Trabalenguas')],
  [Markup.button.callback("Cuando 'o' se pronuncia como 'a'? ", 'pronunciacion de o')
  ]])
)
})

bot.action('clases', (ctx) => {ctx.reply('Gracias por tu interes en mis clases! Yo doy clases hasta las 21:00 de España (hasta las 14:00 de México). El precio de una clase (de 1 hora) es 15 euros. Se puede reservar la clase aqui - https://curso-de-ruso.com/clases-por-skype/',
)
})

bot.action('casos', (ctx) => {ctx.reply('Elige el tema',
Markup.inlineKeyboard([
[Markup.button.callback("El Prepositivo", 'El Prepositivo'),
Markup.button.callback("El Acusativo", 'El Acusativo')],
[Markup.button.callback("El Dativo", 'El Dativo'),
Markup.button.callback("El Instrumental", 'El Instrumental')],
[Markup.button.callback("El Genitivo", 'El Genitivo')]]))})

// bot.start(ctx =>
//     ctx.reply(
//         `Welcome`,

//             Markup.inlineKeyboard([
//                 [Markup.button.callback('👍', 'like')],
//                 [Markup.button.callback('👎', 'dislike')]
//             ])
//     ));


bot.action('verbos', (ctx) => {ctx.reply('Elige el tema',
Markup.inlineKeyboard([
  [Markup.button.callback("Todo sobre los verbos", 'Todo sobre los verbos')],
[Markup.button.callback("Los verbos de movimiento", 'Los verbos de movimiento')],
[Markup.button.callback("Los verbos más usados", 'Los verbos más usados')],
[Markup.button.callback("Prefijos con los verbos", 'Prefijos con los verbos')],
[Markup.button.callback("Los verbos que terminan con овать", 'Los verbos que terminan con овать')]
])
)})

bot.action('curso',(ctx) => {ctx.reply('Puedes probar mi curso de Ruso Basico completo aquí - https://curso-de-ruso.com/basico/alumno/course/view.php?id=2',
)
})

bot.action('palabras',(ctx) => {ctx.reply('Las palabras más usadas en Ruso',

Markup.inlineKeyboard([
  [Markup.button.callback("De 1 a 50", 'De 1 a 50'),
Markup.button.callback("De 51 a 100", 'De 51 a 100')],
[Markup.button.callback("De 101 a 150", 'De 101 a 150'),
Markup.button.callback("De 151 a 200", 'De 151 a 200')],
[Markup.button.callback("De 201 a 250", 'De 201 a 250')]
])
)
})

bot.action('De 1 a 50', (ctx) => {ctx.reply('https://www.youtube.com/watch?v=PjTLMWu4N9s',
)})

bot.action('De 51 a 100', (ctx) => {ctx.reply('https://youtu.be/RTLVDqa5gRY',
)})

bot.action('De 101 a 150', (ctx) => {ctx.reply('https://youtu.be/zS6L7D8fJ1w',
)})

bot.action('De 151 a 200', (ctx) => {ctx.reply('https://www.youtube.com/watch?v=sF52PaVwQEw',
)})

bot.action('De 201 a 250', (ctx) => {ctx.reply('https://www.youtube.com/watch?v=0oIPfDpCBFs',
)})


bot.action('Todo sobre los verbos', (ctx) => {ctx.reply('https://www.youtube.com/watch?v=7t-NZwDeP88',
)})

bot.action('Los verbos de movimiento', (ctx) => {ctx.reply('https://www.youtube.com/watch?v=p-84BX2lQ3Q, https://www.youtube.com/watch?v=wWUy01lK00k',
)})

bot.action('Los verbos más usados', (ctx) => {ctx.reply('https://www.youtube.com/watch?v=8KQbm1-IVhk',
)})

bot.action('Prefijos con los verbos', (ctx) => {ctx.reply('https://www.youtube.com/watch?v=xjct9cbChII',
)})

bot.action('Los verbos que terminan con овать', (ctx) => {ctx.reply('https://www.youtube.com/watch?v=zqwmfH8jdb0',
)})


bot.action('Los verbos que terminan con овать', (ctx) => {ctx.reply('https://www.youtube.com/watch?v=zqwmfH8jdb0',
)})


bot.action('El Dativo', (ctx) => {ctx.reply('https://www.youtube.com/watch?v=YqILEuXggVQ',
)})

bot.action('El Genitivo', (ctx) => {ctx.reply('https://www.youtube.com/watch?v=3nxJKrxksmo',
)})

bot.action('El Instrumental', (ctx) => {ctx.reply('https://www.youtube.com/watch?v=847VgeBvD5k',
)})

bot.action('El Acusativo', (ctx) => {ctx.reply('https://www.youtube.com/watch?v=y9N2yofulMw',
)})

bot.action('El Prepositivo', (ctx) => {ctx.reply('https://www.youtube.com/watch?v=f7YgzcDRAvU',
)})

bot.action('Las reglas de pronunciacion', (ctx) => {ctx.reply('https://www.youtube.com/watch?v=BHKGtLKfPgo',
)})

bot.action('Trabalenguas', (ctx) => {ctx.reply('https://www.youtube.com/watch?v=nbVQ-N4cFpk',
)})

bot.action('pronunciacion de o', (ctx) => {ctx.reply('https://www.youtube.com/watch?v=u16KaridgyA',
)})

bot.action('numeros', (ctx) => {ctx.reply('Elige el tema',
Markup.inlineKeyboard(
[Markup.button.callback("De 0 a 20", 'De 0 a 20'),
Markup.button.callback("De 20 a 100", 'De 20 a 100'),
Markup.button.callback("Hacer una prueba", 'Hacer una prueba'),
])
)})


 bot.action('De 0 a 20', (ctx) => {ctx.reply('https://www.youtube.com/watch?v=J1tyrpRUYsg',
)})

 bot.action('De 20 a 100', (ctx) => {ctx.reply('https://www.youtube.com/watch?v=pRyBt2XDTxo',
)})

 bot.action('Una prueba', (ctx) => {ctx.reply('https://www.youtube.com/watch?v=E9GL48oxMEk',
)})

// bot.action('Sí, bastante', (ctx) =>
// {ctx.reply('Oh qué bien! A ver, que te puedo enseñar...',
// Markup.inlineKeyboard([
// Markup.button.callback("Los verbos de movimiento", "Los verbos de movimiento"),
// Markup.button.callback("Los casos", 'Los casos'),
// Markup.button.callback("Nada", "Nada"),
// ])
// )
// })

// bot.action('Los verbos de movimiento', (ctx) => {
//   ctx.editMessageText('Bien. Y qué te gustaría aprender hoy?',)
// })

 
// bot.action('Los casos', (ctx) => {
//   ctx.editMessageText('Bien, https://www.youtube.com/watch?v=3nxJKrxksmo',)
// })

// bot.action('Los casos', (ctx) => {
//   ctx.editMessageText('Bien, https://www.youtube.com/watch?v=3nxJKrxksmo',)
// })


//principiante

bot.action('Empezar ahora desde 0', (ctx) => {ctx.reply('Bien! Podemos empezar con el alfabeto: https://www.youtube.com/watch?v=zoj24YhjGCg ',
Markup.inlineKeyboard([
Markup.button.callback("Ya aprendí el alfabeto", 'Ya aprendí el alfabeto'),
]))})





bot.action('Ya aprendí el alfabeto', (ctx) =>
{ctx.reply('Felicidades! 🎉 Hiciste un gran paso! Ahora te voy a enseñar los saludos: https://www.youtube.com/watch?v=TJOi7LZl70Y',
Markup.inlineKeyboard([
Markup.button.callback("Ya aprendí los saludos", "Ya aprendí los saludos")
])
)
})

bot.action('Ya aprendí los saludos', (ctx) =>
{ctx.reply('Vas muy bien!🎉 Ahora te enseño algunas frases utiles: https://www.youtube.com/watch?v=77jBNPpdiLM',
Markup.inlineKeyboard([
Markup.button.callback("Ya aprendí estas frases", "Ya aprendí estas frases")
])
)
})


bot.action('Ya aprendí estas frases', (ctx) =>
{ctx.reply('Genial!🎉 Ahora vamos a leer un dialogo: https://www.youtube.com/watch?v=pwi2QKy0XxE',
Markup.inlineKeyboard([
Markup.button.callback("Ya leí el dialogo", "Ya leí el dialogo")
])
)
})

bot.action('Ya leí el dialogo', (ctx) =>
{ctx.reply('Bien! 🎉 Ahora es el tiempo para memorizar nuevas palabras: https://www.youtube.com/watch?v=8KQbm1-IVhk',
Markup.inlineKeyboard([
Markup.button.callback("Estudié los verbos", "Estudié los verbos")
])
)
})

bot.action('Estudié los verbos', (ctx) =>
{ctx.reply('Perfecto!🎉 Ahora vamos a estudiar los numeros: https://www.youtube.com/watch?v=J1tyrpRUYsg',
Markup.inlineKeyboard([
Markup.button.callback("Ya aprendí los numeros hasta 20", "Ya aprendí los numeros hasta 20")
])
)
})

bot.action('Ya aprendí los numeros hasta 20', (ctx) =>
{ctx.reply('Perfecto! 🎉Ahora vamos a estudiar los numeros que nos faltan: https://www.youtube.com/watch?v=pRyBt2XDTxo',
Markup.inlineKeyboard([
Markup.button.callback("Ya aprendí todos los numeros", "Ya aprendí todos los numeros")
])
)
})

bot.action('Ya aprendí todos los numeros', (ctx) =>
{ctx.reply('Muuuy bien! 🎉 Ahora te voy a enseñar los días de la semana: https://www.youtube.com/watch?v=KfO_rkMWbn0',
Markup.inlineKeyboard([
Markup.button.callback("Ya aprendí los días de la semana", "Ya aprendí los días de la semana")
])
)
})



bot.action('Ya aprendí los días de la semana', (ctx) =>
{ctx.reply('Vas muy bien! 🎉 Ahora vamos a estudiar los meses: https://www.youtube.com/watch?v=QTyLIAVzu8o',
Markup.inlineKeyboard([
Markup.button.callback("Ya aprendí los meses", "Ya aprendí los meses")
])
)
})


bot.action('Ya aprendí los meses', (ctx) =>
{ctx.reply('Qué bien! 🎉 Ya sabes tantas cosas! Te animas a aprender cómo usar el verbo IR en Ruso? https://www.youtube.com/watch?v=p-84BX2lQ3Q',
Markup.inlineKeyboard([
Markup.button.callback("Ya aprendí el verbo IR", "Ya aprendí el verbo IR")
])
)
})

bot.action('Ya aprendí el verbo IR', (ctx) =>
{ctx.reply('La verdad que no es todo. Eso es la segunda parte de este tema: https://www.youtube.com/watch?v=wWUy01lK00k',
Markup.inlineKeyboard([
Markup.button.callback("Aprendí el verbo ехать", "Aprendí el verbo ехать")
])
)
})

bot.action('Aprendí el verbo ехать', (ctx) =>
{ctx.reply('Ahora te enseño como hacer preguntas: https://www.youtube.com/watch?v=ecnvXv9lXIo',
Markup.inlineKeyboard([
Markup.button.callback("Aprendí como hacer preguntas", "Aprendí como hacer preguntas")
])
)
})

bot.action('Aprendí como hacer preguntas', (ctx) =>
{ctx.reply('Perfecto! 🎉 Aquí te enseño las 50 palabras más usadas en Ruso: https://www.youtube.com/watch?v=PjTLMWu4N9s',
Markup.inlineKeyboard([
Markup.button.callback("Aprendí las palabras", "Aprendí las palabras")
])
)
})


bot.action('Aprendí las palabras', (ctx) =>
{ctx.reply('Qué bien! 🎉 Por ahora, es todo. Si quieres estudiar más, puedes probar el curso online - http://curso-de-ruso.com/basico/alumno/course/view.php?id=2',
)
})







bot.launch()


app.listen(process.env.PORT || 3001, '0.0.0.0', () => {
  console.log("Server is running.");
});
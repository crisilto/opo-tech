1. Declaración de variables con diferentes tipos de comillas

Las tres variables name, alias y email son cadenas de texto (o strings). En JavaScript, puedes definir cadenas usando tres tipos de comillas:

    Comillas dobles ("):

let name = "Cristina Silvestre";

Comillas simples ('):

let alias = 'crisilto';

Backticks (o plantillas literales, ``):

    let email = `crisilto1997@gmail.com`;

        Las backticks (`) son útiles porque permiten:
            Interpolación de variables con ${}.
            Cadenas multilínea.

Las tres son válidas, y puedes usarlas según lo que necesites. Pero se recomienda mantener un estilo consistente. 2. Consola del navegador o terminal

console.log(name, alias, email);

Este comando imprime el valor de las variables en la consola, separados por espacios.

    Primera impresión: Imprimirá los valores de las variables globales:

    Cristina Silvestre crisilto crisilto1997@gmail.com

3. Inmediatamente Invoked Function Expression (IIFE)

La segunda parte del código está dentro de una IIFE (Immediately Invoked Function Expression). Es una función que se ejecuta automáticamente después de declararse.

!(function () {
let name = "Brais Moure";
let alias = 'braismoure';
let email = `braismoure@mouredev.com`;

    console.log(name, alias, email);

})();

¿Qué está pasando aquí?

    Declaración de la función:

function () { ... }

    Esto crea una función anónima (sin nombre).

El operador ! al inicio:

    Se usa para transformar la función en una expresión válida que pueda ejecutarse inmediatamente.
    Alternativamente, también podrías usar paréntesis:

    (function () { ... })();

Variables locales:

    Dentro de la IIFE, se declaran las mismas variables name, alias y email, pero estas son locales a la función.
    Esto significa que no afectan las variables globales.

Ejecución automática:

    La función se ejecuta en cuanto el intérprete de JavaScript la encuentra.

Resultado en consola: Dentro de la función, se imprimen los valores locales:

    Brais Moure braismoure braismoure@mouredev.com

4. Ámbito (scope) de las variables

Hay dos niveles de ámbito en este código:

    Ámbito global:
        Las variables name, alias y email definidas fuera de la IIFE son accesibles desde cualquier parte del script.
        Esto es lo que primero se imprime:

        Cristina Silvestre crisilto crisilto1997@gmail.com

    Ámbito local:
        Las variables dentro de la IIFE solo existen en ese bloque. Estas variables no afectan ni pueden ser accedidas desde fuera de la función.

5. ¿Qué significa el comentario?

El comentario dice:

// top level triggers the deprecated warning

Esto se refiere a que declarar y acceder a variables globales directamente (como name, alias, email) puede generar advertencias en algunos entornos o navegadores modernos, porque el uso de variables globales es considerado una mala práctica. Esto puede causar problemas en aplicaciones grandes, ya que las variables globales pueden ser accidentalmente sobrescritas.

Sin embargo, dentro de la IIFE, las variables son locales y no generan este tipo de advertencia. Por eso el código es más seguro.
¿Por qué usar una IIFE?

    Para evitar la contaminación del ámbito global.
        Las variables locales solo existen dentro de la función.
    Es útil en scripts más antiguos o en proyectos donde no se usa modularización.

Resumen

    El código muestra dos niveles de variables: globales y locales.
    Las IIFE ayudan a mantener las variables encapsuladas y evitar conflictos.
    Los comentarios advierten sobre el uso de variables globales, que pueden ser problemáticas en proyectos grandes.

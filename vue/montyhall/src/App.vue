<template>
    <div id="app">
        <h1>Problema de Monty Hall</h1>
        <Door number="1" :hasGift="false"/>
    </div>
</template>

<script>
import Door from './components/Door'

export default {
    name: 'App',
    components: { Door }
}
</script>

<style>

    * {
        box-sizing: border-box;
        font-family: 'Montserrat', sans-serif;
    }
    body {
        color: #fff;
        background: linear-gradient(to right, #8e0e00, #1f1c18);
    }

    #app {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    #app h1 {
        border: 1px solid #0005;
        padding: 20px;
        margin-bottom: 20px;
        color: #fff;
        background-color: #0005;
    }

    .form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-bottom: 40px;
    }

    .form, .form input, .form button {
        margin-bottom: 10px;
        font-size: 2rem;
    }

    .doors {
        align-self: stretch;
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
    }
</style>

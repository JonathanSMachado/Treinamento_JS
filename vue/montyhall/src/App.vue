<template>
    <div id="app">
        <h1>Problema de Monty Hall</h1>
        <Gift />
    </div>
</template>

<script>
import Gift from './components/Gift'

export default {
    name: 'App',
    components: { Gift }
}
</script>

<style>
    body {
        box-sizing: border-box;
        font-family: 'Montserrat', sans-serif;
        background: linear-gradient(to right, #8e0e00, #1f1c18);
    }

    #app {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    h1 {
        border: 5px solid #0005;
        padding: 20px;
        margin-bottom: 20px;
        color: #fff;
        background-color: #0005;
    }
</style>

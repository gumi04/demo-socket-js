const express = require('express');
const socket = require('../realtime/client');

module.exports = {
    suscription: (req,res) =>{
        let decodificado = atob(req.body.message.data)
        decodificado = JSON.parse(decodificado)
        socket.emit('pub-notification',decodificado.emailAddress)
        return res.json(req.body)
    },
    greeting: (req,res) =>{
        return res.json({msg: 'Hola desde controller'})
    }
};
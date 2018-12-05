import $ from 'jquery'

import { onLoadHtmlSuccess } from '../core/includes'

const duration = 300

function filterByCity(city){
    $('[wm-city]').each(function(i, e){
        const isTarget = $(this).attr('wm-city') === city || city === null
        if (isTarget) {
            $(this).parent().removeClass('d-none')
            $(this).fadeIn(duration)
        } else {
            $(this).fadeOut(duration, () => {
                $(this).parent().addClass('d-none')
            })
        }
    })
}

function activateButton($button) {
    $('button.active').removeClass('active')
    $button.addClass('active')
}

$.fn.cityButtons = function() {
    const cities = new Set
    $('[wm-city]').each(function(i, e){
        cities.add($(e).attr('wm-city'))
    })

    const buttons = Array.from(cities).map(city => {
        const button = $('<button>').addClass(['btn', 'btn-info']).html(city)
        button.click(e => {
            activateButton(button)
            filterByCity(city)
        })
        return button
    })

    const buttonAll = $('<button>').addClass(['btn', 'btn-info', 'active']).html('Todas')
    buttonAll.click(e => {
        activateButton(buttonAll)
        filterByCity(null)
    })
    buttons.push(buttonAll)

    const buttonGroup = $('<div>').addClass(['btn-group'])
    buttonGroup.append(buttons)

    $(this).html(buttonGroup)
    return this
}

onLoadHtmlSuccess(function(){
    $('[wm-city-buttons]').cityButtons()
})
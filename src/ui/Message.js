/**
 * src/ui/Message.js
 * Author: H.Alper Tuna <halpertuna@gmail.com>
 * Date: 30.06.2016
 */

'use strict';

define(['./Element', './Icon'], function(Element, Icon){
    return Element.extend({
        'init': function(message, theme){
            this.super();

            var className, iconName;
            switch(theme){
                case 'PRIMARY':
                    className = 'jb-primary';
                    iconName = 'info-circle';
                    break;
                case 'WARNING':
                    className = 'jb-warning';
                    iconName = 'warning';
                    break;
                case 'DANGER':
                    className = 'jb-danger';
                    iconName = 'minus-circle';
                    break;
                case 'SUCCESS':
                    className = 'jb-success';
                    iconName = 'check-circle';
                    break;
                case 'INFO':
                default:
                    className = 'jb-info';
                    iconName = 'info-circle';
                    break;
            }

            this.addClass('jb-message ' + className)
            this.add(
                Icon.new(iconName),
                '&nbsp; ',
                message
            );
        }
    })
})
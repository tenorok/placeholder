// Copyright 2012, Артём Курбатов [tenorok.ru] | MIT License

jQuery.fn.placeholder = function(options) {

    if(
        options.always !== true &&                             // Если флаг обязательной работы не включен
        ('placeholder' in document.createElement('input')) &&  // и placeholder для input поддерживается браузером
        ('placeholder' in document.createElement('textarea'))  // и placeholder для textarea поддерживается браузером
    )
        return;
    
    var options = $.extend({
        always: false,
        style: {},
        class: ''
    }, options),

    passes  = [],
    curpass = 0;

    return this.each(function() {

        var defCss = this.style.cssText,
        
        objThis = this,
        
        setPlaceholder = function() {
                
            $(objThis)
                .addClass(options.class)
                .val($(objThis).attr('placeholder'))
                .css(options.style);
        };

        setPlaceholder.apply(this);

        if($(this).attr('type') == 'password') {

            passes[curpass++] = $('input').index(this);

            if(!$.browser.msie)
                $(this).setAttribute('type', 'text');
        }

        $(this)
            .focus(function() {
                
                this.style.cssText = defCss;
                $(this).removeClass(options.class);

                if($.trim($(this).val()) == $(this).attr('placeholder')) {
                    
                    if($.inArray($('input').index(this), passes) >= 0 && !$.browser.msie)
                        this.setAttribute('type', 'password');
                    
                    $(this).val('');
                    var obj = this;

                    setTimeout(function(){
                        $(obj).focus();
                    }, 10);
                }
            })
            .blur(function() {
                
                if($.trim($(this).val()) == '') {
                    
                    if($.inArray($('input').index(this), passes) >= 0 && !$.browser.msie)
                        this.setAttribute('type', 'text');
                    
                    setPlaceholder.apply(this);
                }
            });
    });
};
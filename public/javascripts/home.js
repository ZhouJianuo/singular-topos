$(function() {

    var cur_select = 1
    
    $('container h3').html(txt.Title[lang])

    $('container').render({
        div: [
            {
                section: [
                    {
                        schedule: txt.Home_Sections[0][lang],
                        a: {
                            'data-id': 1,
                            'class': 'active'
                        }
                    },
                    {
                        schedule: txt.Home_Sections[1][lang],
                        a: {
                            'data-id': 2
                        }
                    },
                    {
                        schedule: txt.Home_Sections[2][lang],
                        a: {
                            'data-id': 3
                        }
                    },
                ],
                class: 'home_select'
            }
        ],
        class: 'content'
    })

    $('body').on('click', '.home_select schedule', function () {
        if($(this).hasClass('active')) {
            return
        }
        $(this).addClass('active').siblings('schedule').removeClass('active')
        cur_select = $(this).attr('data-id')
    });

})
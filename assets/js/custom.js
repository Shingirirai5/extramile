(function($) {
    "use strict";


    $(document).ready(function() {

        $('.make').on('change', function() {
            var select = $(this).val();
            console.log(select);
            $.ajax({
                type: "POST",
                dataType: "html",
                url: ajax_object.ajax_url,
                data: {
                    action: 'select_drop_model',
                    makedta: select
                },
                success: function(data) {
                    console.log(data)
                    $('.model').enable();
                    $('.model').html(data);

                },
            });


        });

        $('.model').on('change', function() {
            var select = $(this).val();
            console.log(select);
            $.ajax({
                type: "POST",
                dataType: "html",
                url: ajax_object.ajax_url,
                data: {
                    action: 'select_drop_year',
                    modeldta: select
                },
                success: function(data) {
                    console.log(data)
                    $('.the_year').enable();
                    $('.the_year').html(data);

                },
            });

        });

        $('.the_year').on('change', function() {
            var selectmake = $('.make').val();
            var select = $('.model').val();
            var selectyear = $('.the_year').val();

            $('#mk').val(selectmake);
            $('#md').val(select);
            $('#yr').val(selectyear);
            $.ajax({
                type: "POST",
                dataType: "html",
                url: ajax_object.ajax_url,
                data: {
                    action: 'select_services',
                    servdta: select,
                    yeardta: selectyear,
                },
                success: function(data) {

                    var output = JSON.parse(data);
                    var count = 0;
                    var stringout = '';
                    console.log(typeof output)
                    $('.service-modal-row').empty();
                    for (var value in output) {
                        stringout += output[value];
                        if ((count % 2) != 0) {
                            stringout += '</div>';
                        }
                        count++;
                        console.log(output[value])
                    }
                    $('.input-search').enable();


                    $('.service-modal-row').html(stringout);
                },
            });

        });

        $('#pageContent').on('click', '.icon-close-cross', function() {
            var sid = $(this).closest('.estimate-part').find('.pidclass').text();
            var totmin = $(this).closest('.estimate-part').find('.totmin').text();
            var totmax = $(this).closest('.estimate-part').find('.totmax').text();
            var globmin = $('#globmin').text();
            var globmax = $('#globmax').text();
            var newmin = globmin - totmin;
            var newmax = globmax - totmax;
            $.ajax({
                type: "POST",
                dataType: "html",
                url: ajax_object.ajax_url,
                data: {
                    action: 'service_item_remove',
                    stDta: sid,
                    nmin: newmin,
                    nmax: newmax
                },
                success: function(data) {
                    console.log('success')
                    var output = JSON.parse(data);
                    console.log(output['sdta'])
                    console.log(output['maxpr'])
                    console.log(output['maxpr'])
                    $('#globmin').text(output['minpr']);
                    $('#globmax').text(output['maxpr']);
                    $('#class' + output['sdta']).remove();


                },
            });

            // $('#globmin').html(globmin);
            // $('#globmax').html(globmax);
            $(this).closest('.estimate-part').remove();




            return false;
        });

    });
})(jQuery);
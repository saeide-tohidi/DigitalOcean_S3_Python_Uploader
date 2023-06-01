jQuery(document).ready(function ($) {

    (function ($) {
        $(function () {

            var selectField = $('#id_type'),
                verified_1 = $('.level'),
                verified_2 = $('.college'),
                verified_3 = $('.highschool'),
                verified_4 = $('.tag');

            function toggleVerified(value) {
                if (value === 'weekly_class') {
                    verified_1.show();
                    verified_2.show();
                    verified_3.hide();
                    verified_4.hide();

                } else if (value === 'exam_preparation') {
                    verified_2.hide();
                    verified_3.hide();
                    verified_4.show();
                    verified_1.hide();
                } else if (value === 'general_course') {
                    verified_2.hide();
                    verified_3.hide();
                    verified_4.hide();
                    verified_1.hide();
                }
            }

            // show/hide on load based on existing value of selectField
            toggleVerified(selectField.val());

            // show/hide on change
            selectField.change(function () {
                toggleVerified($(this).val());
            });
        });
    })(django.jQuery);

    (function ($) {
        $(function () {
            var selectField = $('#id_level'),
                verified_1 = $('.level'),
                verified_2 = $('.college'),
                verified_3 = $('.highschool'),
                verified_4 = $('.tag');

            function toggleVerified(value) {
                if (value === 'college') {
                    verified_1.show();
                    verified_2.show();
                    verified_3.hide();
                    verified_4.hide();

                } else if (value === 'highschool') {
                    verified_1.show();
                    verified_2.hide();
                    verified_3.show();
                    verified_4.hide();

                }
            }

            // show/hide on load based on existing value of selectField
            toggleVerified(selectField.val());

            // show/hide on change
            selectField.change(function () {
                toggleVerified($(this).val());
            });
        });
    })(django.jQuery);


    (function ($) {
        $(function () {

            var selectField = $('#id_type'),
                level = $('#id_level').val(),
                verified_1 = $('.level'),
                verified_2 = $('.college'),
                verified_3 = $('.highschool'),
                verified_4 = $('.tag');

            function toggleVerified(value) {
                if (value === 'weekly_class' && level === 'college') {
                    verified_1.show();
                    verified_2.show();
                    verified_3.hide();
                    verified_4.hide();

                } else if (value === 'weekly_class' && level === 'highschool') {
                    verified_1.show();
                    verified_2.hide();
                    verified_3.show();
                    verified_4.hide();

                } else if (value === 'exam_preparation') {
                    verified_2.hide();
                    verified_3.hide();
                    verified_4.show();
                    verified_1.hide();

                } else if (value === 'general_course') {
                    verified_2.hide();
                    verified_3.hide();
                    verified_4.hide();
                    verified_1.hide();
                } else {
                    verified_1.show();
                    verified_2.show();
                    verified_3.hide();
                    verified_4.hide();
                }
            }

            // show/hide on load based on existing value of selectField
            toggleVerified(selectField.val());

        });
    })(django.jQuery);

});

define('bootstrapper',
    ['jquery', 'config', 'route-config', 'presenter', 'binder'],
    function ($, config, routeConfig, presenter, binder) {
        var
            run = function () {
                presenter.toggleActivity(true);
                binder.bind();
                routeConfig.register();

                $(document).ready(function () {
                    $('#hamburgerMenuButton').click(function () {                        
                        presenter.toggleSideMenu();
                    });

                    $('.main').click(function () {
                        var $sideMenu = $('#sideMenu');
                        if ($sideMenu.hasClass('open'))
                            presenter.closeSideMenu();
                    });

                    //Disable right click on images
                    $('body').on('contextmenu', 'img', function (e) {
                        return false;
                    });
                    $('body').on('contextmenu', '.imageMask', function (e) {
                        return false;
                    });
                    $('body').on('contextmenu', '.imageWithSubtitle', function (e) {
                        return false;
                    });


                });
            },            

            runAdmin = function () {
                presenter.toggleActivity(true);                
                binder.bindAdmin();
                routeConfig.registerAdmin();

                $(document).ready(function () {
                    $('#hamburgerMenuButton').click(function () {
                        presenter.toggleSideMenu();
                    });

                    $('.main').click(function () {
                        var $sideMenu = $('#sideMenu');
                        if ($sideMenu.hasClass('open'))
                            presenter.closeSideMenu();
                    });
                });
            },

            runLeagueOrganizerSite = function () {
                presenter.toggleActivity(true);
                binder.bindLeagueOrganizerSite();            
                routeConfig.register();

                $(document).ready(function () {
                    $('#hamburgerMenuButton').click(function () {
                        presenter.toggleSideMenu();
                    });

                    $('.main').click(function () {
                        var $sideMenu = $('#sideMenu');
                        if ($sideMenu.hasClass('open'))
                            presenter.closeSideMenu();
                    });
                });
            },

            runLeagueSite = function () {
                presenter.toggleActivity(true);
                binder.bindLeagueSite();
                routeConfig.register();
            },

            runClub = function () {
                presenter.toggleActivity(true);
                binder.bindClub();
                routeConfig.register();
            },
            runWidget = function () {
                presenter.toggleActivity(true);
                binder.bindWidget();
                routeConfig.register();
            };

        return {
            run: run,
            runClub: runClub,
            runLeagueOrganizerSite: runLeagueOrganizerSite,
            runLeagueSite: runLeagueSite,
            runWidget: runWidget,
            runAdmin: runAdmin
        };
    });
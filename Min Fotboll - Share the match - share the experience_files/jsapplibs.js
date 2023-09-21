/* Minification failed. Returning unminified contents.
(8222,42): run-time error JS1004: Expected ';'
(8222,52-53): run-time error JS1010: Expected identifier: (
(8223,22): run-time error JS1004: Expected ';'
(8249,14-15): run-time error JS1195: Expected expression: ,
(14404,35-36): run-time error JS1005: Expected '(': {
(14407,25-26): run-time error JS1006: Expected ')': }
(14407,25-26): run-time error JS1008: Expected '{': }
(14408,22-23): run-time error JS1195: Expected expression: )
(14416,9-10): run-time error JS1006: Expected ')': }
(14482,35-36): run-time error JS1005: Expected '(': {
(14485,25-26): run-time error JS1006: Expected ')': }
(14485,25-26): run-time error JS1008: Expected '{': }
(14486,22-23): run-time error JS1195: Expected expression: )
(14582,9-10): run-time error JS1006: Expected ')': }
(15744,6-7): run-time error JS1195: Expected expression: )
(14419,19-100): run-time error JS1301: End of file encountered before function is properly closed: function (element, valueAccessor, allBindingsAccessor, viewModel, bindingContext)
(18283,1): run-time error JS1107: Expecting more source characters
(18283,1): run-time error JS1009: Expected '}'
(18283,1): run-time error JS1009: Expected '}'
(18283,1): run-time error JS1107: Expecting more source characters
(14299,19-100): run-time error JS1301: End of file encountered before function is properly closed: function (element, valueAccessor, allBindingsAccessor, viewModel, bindingContext)
(18283,1): run-time error JS1107: Expecting more source characters
(18283,1): run-time error JS1009: Expected '}'
(13555,5-166): run-time error JS1301: End of file encountered before function is properly closed: function ($, ko, datamanager, config, router, swiconhelper, swimagehelper, socialentityhelper, socialentityviews, socialentitycomments, socialentitylikes, shell)
(18283,1): run-time error JS1107: Expecting more source characters
(18283,1): run-time error JS1006: Expected ')'
 */
define('binder',
    ['jquery', 'ko', 'config', 'vm'],
    function ($, ko, config, vm) {
        var
            ids = config.viewIds,
            safeBind = function (viewmodel, view) {
                if (typeof view !== 'undefined') {
                    ko.applyBindings(viewmodel, view);
                }                    
            },
            bind = function () {
                safeBind(vm.arena, getView(ids.arena));
                safeBind(vm.districts, getView(ids.districts));
                safeBind(vm.shell, getView(ids.shellTop));
                safeBind(vm.header, getView(ids.header));
                safeBind(vm.member, getView(ids.member));
                safeBind(vm.myteams, getView(ids.myteams));
                safeBind(vm.blurbtest, getView(ids.blurbtest));                
                safeBind(vm.memberrequest, getView(ids.memberrequest));
                safeBind(vm.membernotifications, getView(ids.membernotifications));
                safeBind(vm.magazine, getView(ids.magazine));
                safeBind(vm.magazinegameview, getView(ids.magazinegameview));
                safeBind(vm.magazinegameviewdetails, getView(ids.magazinegameviewdetails));
                //safeBind(vm.live, getView(ids.live));
                safeBind(vm.assetinfo, getView(ids.assetinfo));
                safeBind(vm.livedetails, getView(ids.livedetails));
                safeBind(vm.gamereport, getView(ids.gamereport));
                safeBind(vm.gamecomment, getView(ids.gamecomment));
                safeBind(vm.gamehighlights, getView(ids.gamehighlights));                                
                safeBind(vm.teamfeeddetails, getView(ids.teamfeeddetails));
                safeBind(vm.teamfeeddetailsinfo, getView(ids.teamfeeddetailsinfo));
                safeBind(vm.calendar, getView(ids.calendar));
                safeBind(vm.memberdetails, getView(ids.memberdetails));
                safeBind(vm.game, getView(ids.game));
                safeBind(vm.team, getView(ids.team));
                safeBind(vm.teaminvite, getView(ids.teaminvite));                
                safeBind(vm.player, getView(ids.player));
                safeBind(vm.teamplayer, getView(ids.teamplayer));
                safeBind(vm.playerguardian, getView(ids.playerguardian));
                safeBind(vm.guardian, getView(ids.guardian));                
                safeBind(vm.staff, getView(ids.staff));
                safeBind(vm.leaguesite, getView(ids.leaguesite));
                safeBind(vm.leagueorganizersite, getView(ids.leagueorganizersite));
                safeBind(vm.leagueorganizeradmin, getView(ids.leagueorganizeradmin));
                safeBind(vm.club, getView(ids.club));                
                safeBind(vm.gameheadernavigation, getView(ids.gameheadernavigation));
                safeBind(vm.teamconnect, getView(ids.teamconnect));                
                safeBind(vm.picturedetails, getView(ids.picturedetails));
                safeBind(vm.videodetails, getView(ids.videodetails));
                safeBind(vm.discussionpostdetails, getView(ids.discussionpostdetails));
                safeBind(vm.competitions, getView(ids.competitions));
                safeBind(vm.interviewadmin, getView(ids.interviewadmin));
                safeBind(vm.discover, getView(ids.discover));
                safeBind(vm.teamadmin, getView(ids.teamadmin));
                safeBind(vm.clubadmin, getView(ids.clubadmin));
                safeBind(vm.infoitem, getView(ids.infoitem));
                safeBind(vm.audience, getView(ids.audience));
                safeBind(vm.clubselect, getView(ids.clubselect));
                safeBind(vm.targetfilter, getView(ids.targetfilter));
                safeBind(vm.imagecropper, getView(ids.imagecropper));
                safeBind(vm.reportitem, getView(ids.reportitem));
                safeBind(vm.socialentityviews, getView(ids.socialentityviews));                
                safeBind(vm.socialentitylikes, getView(ids.socialentitylikes));                
                safeBind(vm.socialentitycomments, getView(ids.socialentitycomments));                
                safeBind(vm.livestream, getView(ids.livestream));
                safeBind(vm.livestreamsubscription, getView(ids.livestreamsubscription));
                safeBind(vm.partneradmin, getView(ids.partneradmin));
                safeBind(vm.partnerfeature, getView(ids.partnerfeature));
                safeBind(vm.stream, getView(ids.stream));
                safeBind(vm.gamevideo, getView(ids.gamevideo));
                safeBind(vm.gamemediaitem, getView(ids.gamemediaitem));
                safeBind(vm.infoitemdetails, getView(ids.infoitemdetails));
                safeBind(vm.teamsubscription, getView(ids.teamsubscription));
                safeBind(vm.gameteamrequest, getView(ids.gameteamrequest));
                safeBind(vm.lineup, getView(ids.lineup));
                safeBind(vm.gameteamroster, getView(ids.gameteamroster));
                safeBind(vm.mygames, getView(ids.mygames));
                safeBind(vm.highlights, getView(ids.highlights));
                safeBind(vm.competition, getView(ids.competition));
                safeBind(vm.tips, getView(ids.tips));
                safeBind(vm.events, getView(ids.events));
            },

            bindAdmin = function () {
                safeBind(vm.shell, getView(ids.shellTop));
                safeBind(vm.adminheader, getView(ids.adminheader));
                safeBind(vm.adminreporteditems, getView(ids.adminreporteditems));
                safeBind(vm.adminpayouts, getView(ids.adminpayouts));
                safeBind(vm.adminmember, getView(ids.adminmember));
                safeBind(vm.adminmembers, getView(ids.adminmembers));
                safeBind(vm.systemadministrators, getView(ids.systemadministrators));
            },

            bindClub = function () {
                safeBind(vm.shell, getView(ids.shellTop));
                //safeBind(vm.header, getView(ids.header));
                safeBind(vm.team, getView(ids.team));
                safeBind(vm.club, getView(ids.club));
            },

            bindLeagueOrganizerSite = function () {                
                safeBind(vm.arena, getView(ids.arena));
                safeBind(vm.districts, getView(ids.districts));
                safeBind(vm.shell, getView(ids.shellTop));
                safeBind(vm.header, getView(ids.header));
                safeBind(vm.member, getView(ids.member));
                safeBind(vm.myteams, getView(ids.myteams));
                safeBind(vm.blurbtest, getView(ids.blurbtest));
                safeBind(vm.memberrequest, getView(ids.memberrequest));
                safeBind(vm.membernotifications, getView(ids.membernotifications));
                safeBind(vm.magazine, getView(ids.magazine));
                safeBind(vm.magazinegameview, getView(ids.magazinegameview));
                safeBind(vm.magazinegameviewdetails, getView(ids.magazinegameviewdetails));
                //safeBind(vm.live, getView(ids.live));
                safeBind(vm.assetinfo, getView(ids.assetinfo));
                safeBind(vm.livedetails, getView(ids.livedetails));
                safeBind(vm.gamereport, getView(ids.gamereport));
                safeBind(vm.gamecomment, getView(ids.gamecomment));
                safeBind(vm.gamehighlights, getView(ids.gamehighlights));
                safeBind(vm.teamfeeddetails, getView(ids.teamfeeddetails));
                safeBind(vm.teamfeeddetailsinfo, getView(ids.teamfeeddetailsinfo));
                safeBind(vm.calendar, getView(ids.calendar));
                safeBind(vm.memberdetails, getView(ids.memberdetails));
                safeBind(vm.game, getView(ids.game));
                safeBind(vm.team, getView(ids.team));
                safeBind(vm.teaminvite, getView(ids.teaminvite));
                safeBind(vm.player, getView(ids.player));
                safeBind(vm.teamplayer, getView(ids.teamplayer));
                safeBind(vm.playerguardian, getView(ids.playerguardian));
                safeBind(vm.guardian, getView(ids.guardian));
                safeBind(vm.staff, getView(ids.staff));
                safeBind(vm.leaguesite, getView(ids.leaguesite));
                safeBind(vm.leagueorganizersite, getView(ids.leagueorganizersite));
                safeBind(vm.leagueorganizeradmin, getView(ids.leagueorganizeradmin));
                safeBind(vm.club, getView(ids.club));
                safeBind(vm.gameheadernavigation, getView(ids.gameheadernavigation));
                safeBind(vm.teamconnect, getView(ids.teamconnect));
                safeBind(vm.picturedetails, getView(ids.picturedetails));
                safeBind(vm.videodetails, getView(ids.videodetails));
                safeBind(vm.discussionpostdetails, getView(ids.discussionpostdetails));
                safeBind(vm.competitions, getView(ids.competitions));
                safeBind(vm.interviewadmin, getView(ids.interviewadmin));
                safeBind(vm.discover, getView(ids.discover));
                safeBind(vm.teamadmin, getView(ids.teamadmin));
                safeBind(vm.clubadmin, getView(ids.clubadmin));
                safeBind(vm.infoitem, getView(ids.infoitem));
                safeBind(vm.audience, getView(ids.audience));
                safeBind(vm.clubselect, getView(ids.clubselect));
                safeBind(vm.targetfilter, getView(ids.targetfilter));
                safeBind(vm.imagecropper, getView(ids.imagecropper));
                safeBind(vm.reportitem, getView(ids.reportitem));
                safeBind(vm.socialentityviews, getView(ids.socialentityviews));
                safeBind(vm.socialentitylikes, getView(ids.socialentitylikes));
                safeBind(vm.socialentitycomments, getView(ids.socialentitycomments));
                safeBind(vm.livestream, getView(ids.livestream));
                safeBind(vm.livestreamsubscription, getView(ids.livestreamsubscription));
                safeBind(vm.partneradmin, getView(ids.partneradmin));
                safeBind(vm.partnerfeature, getView(ids.partnerfeature));
                safeBind(vm.stream, getView(ids.stream));
                safeBind(vm.gamevideo, getView(ids.gamevideo));
                safeBind(vm.gamemediaitem, getView(ids.gamemediaitem));
                safeBind(vm.infoitemdetails, getView(ids.infoitemdetails));
                safeBind(vm.teamsubscription, getView(ids.teamsubscription));
                safeBind(vm.gameteamrequest, getView(ids.gameteamrequest));
                safeBind(vm.lineup, getView(ids.lineup));
                safeBind(vm.gameteamroster, getView(ids.gameteamroster));
                safeBind(vm.mygames, getView(ids.mygames));
                safeBind(vm.highlights, getView(ids.highlights));
                safeBind(vm.competition, getView(ids.competition));
                safeBind(vm.tips, getView(ids.tips));
                safeBind(vm.events, getView(ids.events));
            },

            bindLeagueSite = function () {
                safeBind(vm.shell, getView(ids.shellTop));
                safeBind(vm.leagueSite, getView(ids.leagueSite));
            },

            bindWidget = function () {
                safeBind(vm.shell, getView(ids.shellTop));
                safeBind(vm.widget, getView(ids.widget));
            },
            
            getView = function (viewName) {
                return $(viewName).get(0);
            };
            
        return {
            bind: bind,
            bindAdmin: bindAdmin,
            bindClub: bindClub,
            bindLeagueOrganizerSite: bindLeagueOrganizerSite,
            bindLeagueSite: bindLeagueSite,
            bindWidget: bindWidget
        };
    });;
define('config',
    ['toastr', 'infuser', 'ko', 'moment'],
    function (toastr, infuser, ko, moment) {

        var
            hashes = {
                arena: '#/arena',
                assetinfo: '#/assetinfo',
                blurbtest: '#/blurbtest',
                districts: '#/districts',               
                magazine: '#/magazine',
                magazinegameview: '#/magazinegameview',
                magazinegameviewdetails: '#/magazinegameviewdetails',
                member: '#/member',
                myteams: '#/myteams',
                memberrequest: '#/memberrequest',
                membernotifications: '#/membernotifications',
                picture: '#/picture',
                live: '#/live',
                livedetails: '#/livedetail',
                teamfeeddetails: '#/teamfeeddetail',
                teamfeeddetailsinfo: '#/teamfeeddetailsinfo',                
                gamereport: '#/gamereport',
                gamecomment: '#/gamecomment',
                gamehighlights: '#/gamehighlights',                                
                calendar: '#/calendar',                
                game: '#/game',
                team: '#/team',
                teaminvite: '#/teaminvite',                
                memberdetails: '#/memberdetails',                
                player: '#/player',
                teamplayer: '#/teamplayer',
                playerguardian: '#/playerguardian',
                guardian: '#/guardian',                
                staff: '#/staff',
                leaguesite: '#/leaguesite',
                leagueorganizersite: '#/leagueorganizersite',
                leagueorganizeradmin: '#/leagueorganizeradmin',
                club: '#/club',                
                infoitem: '#/infoitem',
                audience: '#/audience',
                clubselect: '#/clubselect',
                targetfilter: '#/targetfilter',
                socialentityviews: '#/socialentityviews',
                gameheadernavigation: '#/gameheadernavigation',
                widget: '#/widget',
                teamconnect: '#/teamconnect',                
                picturedetails: '#/picturedetails',
                videodetails: '#/videodetails',
                discussionpostdetails: '#/discussionpostdetails',
                competitions: '#/competitions',
                interviewadmin: '#/interviewadmin',
                discover: '#/discover',
                teamadmin: '#/teamadmin',
                clubadmin: '#/clubadmin',
                livestream: '#/livestream',
                livestreamsubscription: '#/livestreamsubscription',
                partneradmin: '#/partneradmin',
                partnerfeature: '#/partnerfeature',
                stream: '#/stream',                
                gamevideo: '#/gamevideo',
                gamemediaitem: '#/gamemediaitem',
                infoitemdetails: '#/infoitemdetails',
                teamsubscription: '#/teamsubscription',
                gameteamrequest: '#/gameteamrequest',
                lineup: '#/lineup',
                gameteamroster: '#/gameteamroster',
                mygames: '#/mygames',
                highlights: '#/highlights',
                competition: '#/competition',
                tips: '#/tips',
                events: '#/events',
                admin: '/admin/',
                adminmember: '/admin/#/adminmember',
                adminmembers: '/admin/#/adminmembers',
                adminreporteditems: '/admin/#/adminreporteditems',
                adminpayouts: '/admin/#/adminpayouts',
                systemadministrators: '/admin/#/systemadministrators'
            },

            logger = toastr, // use toastr for the logger
            messages = {
                viewModelActivated: 'viewmodel-activation'
            },

            stateKeys = {
                lastView: 'state.active-hash'
            },
            storeExpirationMs = 1000 * 60 * 60 * 24, // 1 day
            //storeExpirationMs = (1000 * 5), // 5 seconds
            throttle = 400,
            title = 'Sportswik > ',            
            
            viewIds = {
                arena: '#arena-view',
                assetinfo: '#assetinfo-view',      
                blurbtest: '#blurbtest-view',
                districts: '#districts-view',
                gamereport: '#gamereport-view',
                gamecomment: '#gamecomment-view',
                gamehighlights: '#gamehighlights-view',
                header: '#header-view',                
                livedetails: '#livedetails-view',
                member: '#member-view',
                myteams: '#myteams-view',
                memberrequest: '#memberrequest-view',
                membernotifications: '#membernotifications-view',                
                magazine: '#magazine-view',
                magazinegameview: '#magazinegameview-view',
                magazinegameviewdetails: '#magazinegameviewdetails-view',
                picture: '#picture-view',
                shellTop: '#shellTop-view',                                
                teamfeeddetails: '#teamfeeddetails-view',
                teamfeeddetailsinfo: '#teamfeeddetailsinfo-view',
                calendar: '#calendar-view',
                game: '#game-view',
                team: '#team-view',
                teaminvite: '#teaminvite-view',                
                memberdetails: '#memberdetails-view',                
                player: '#player-view',
                teamplayer: '#teamplayer-view',
                playerguardian: '#playerguardian-view',                
                guardian: '#guardian-view',                
                staff: '#staff-view',
                leaguesite: '#leaguesite-view',
                leagueorganizersite: '#leagueorganizersite-view',
                leagueorganizeradmin: '#leagueorganizeradmin-view',
                club: '#club-view',                
                infoitem: '#infoitem-view',
                audience: '#audience-view',
                clubselect: '#clubselect-view',
                targetfilter: '#targetfilter-view',
                imagecropper: '#imagecropper-view',
                reportitem: '#reportitem-view',
                socialentityviews: '#socialentityviews-view',
                socialentitylikes: '#socialentitylikes-view',
                socialentitycomments: '#socialentitycomments-view',
                gameheadernavigation: '#gameheadernavigation-view',
                widget: '#widget-view',
                teamconnect: '#teamconnect-view',                
                picturedetails: '#picturedetails-view',
                videodetails: '#videodetails-view',
                discussionpostdetails: '#discussionpostdetails-view',
                competitions: '#competitions-view',
                interviewadmin: '#interviewadmin-view',
                discover: '#discover-view',
                teamadmin: '#teamadmin-view',
                clubadmin: '#clubadmin-view',
                livestream: '#livestream-view',
                livestreamsubscription: '#livestreamsubscription-view',
                partneradmin: '#partneradmin-view',
                partnerfeature: '#partnerfeature-view',
                stream: '#stream-view',     
                gamevideo: '#gamevideo-view',
                gamemediaitem: '#gamemediaitem-view',
                infoitemdetails: '#infoitemdetails-view',
                teamsubscription: '#teamsubscription-view',
                gameteamrequest: '#gameteamrequest-view',
                lineup: '#lineup-view',
                gameteamroster: '#gameteamroster-view',
                mygames: '#mygames-view',
                highlights: '#highlights-view',
                competition: '#competition-view',
                tips: '#tips-view',
                events: '#events-view',
                adminheader: '#adminheader-view',
                adminmember: '#adminmember-view',
                adminmembers: '#adminmembers-view',
                adminreporteditems: '#adminreporteditems-view',
                adminpayouts: '#adminpayouts-view',
                systemadministrators: '#systemadministrators-view'
            },
            
            toasts = {
                changesPending: 'Please save or cancel your changes before leaving the page.',
                errorSavingData: 'Data could not be saved. Please check the logs.',
                errorGettingData: 'Could not retrieve data.  Please check the logs.',
                invalidRoute: 'Cannot navigate. Invalid route',
                retreivedData: 'Data retrieved successfully',
                savedData: 'Data saved successfully'
            },

            validationInit = function () {
                ko.validation.configure({
                    registerExtenders: true,    //default is true
                    messagesOnModified: true,   //default is true
                    insertMessages: true,       //default is true
                    parseInputAttributes: true, //default is false
                    writeInputAttributes: true, //default is false
                    messageTemplate: null,      //default is null
                    decorateElement: true       //default is false. Applies the .validationElement CSS class
                });
            },

            configureExternalTemplates = function () {
                infuser.defaults.templatePrefix = "_";
                infuser.defaults.templateSuffix = ".tmpl.html";
                infuser.defaults.templateUrl = "/Tmpl";
            },

            init = function () {                
                configureExternalTemplates();
                validationInit();

                moment.updateLocale('sv', {
                    months: 'januari_februari_mars_april_maj_juni_juli_augusti_september_oktober_november_december'.split('_'),
                    monthsShort: 'jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec'.split('_'),
                    weekdays: 'Söndag_Måndag_Tisdag_Onsdag_Torsdag_Fredag_Lördag'.split('_'),
                    weekdaysShort: 'Sön_Mån_Tis_Ons_Tor_Fre_Lör'.split('_'),
                    weekdaysMin: 'Sö_Må_Ti_On_To_Fr_Lö'.split('_'),
                    longDateFormat: {
                        LT: 'HH:mm',
                        LTS: 'HH:mm:ss',
                        L: 'YYYY-MM-DD',
                        LL: 'D MMMM YYYY',
                        LLL: 'D MMMM YYYY [kl.] HH:mm',
                        LLLL: 'dddd D MMMM YYYY [kl.] HH:mm',
                        lll: 'D MMM YYYY HH:mm',
                        llll: 'ddd D MMM YYYY HH:mm'
                    },
                    calendar: {
                        sameDay: '[Idag] LT',
                        nextDay: '[Imorgon] LT',
                        lastDay: '[Igår] LT',
                        nextWeek: '[På] dddd LT',
                        lastWeek: '[I] dddd[s] LT',
                        sameElse: 'L'
                    },
                    relativeTime: {
                        future: 'om %s',
                        past: 'för %s sedan',
                        s: 'några sekunder',
                        m: 'en minut',
                        mm: '%d minuter',
                        h: 'en timme',
                        hh: '%d timmar',
                        d: 'en dag',
                        dd: '%d dagar',
                        M: 'en månad',
                        MM: '%d månader',
                        y: 'ett år',
                        yy: '%d år'
                    },
                    ordinalParse: /\d{1,2}(e|a)/,
                    ordinal: function (number) {
                        var b = number % 10,
                            output = ~~(number % 100 / 10) === 1 ? 'e' :
                            b === 1 ? 'a' :
                            b === 2 ? 'a' :
                            b === 3 ? 'e' : 'e';
                        return number + output;
                    },
                    week: {
                        dow: 1, // Monday is the first day of the week.
                        doy: 4  // The week that contains Jan 4th is the first week of the year.
                    }
                });

                moment.updateLocale('nb', {
                    months: 'Januar_Februar_Mars_April_Mai_Juni_Juli_August_September_Oktober_November_Desember'.split('_'),
                    monthsShort: 'jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des'.split('_'),
                    monthsParseExact: true,
                    weekdays: 'Søndag_Mandag_Tirsdag_Onsdag_Torsdag_Fredag_Lørdag'.split('_'),
                    weekdaysShort: 'Søn_Man_Tir_Ons_Tor_Fre_Lør'.split('_'),
                    weekdaysMin: 'Sø_Ma_Ti_On_To_Fr_Lø'.split('_'),
                    weekdaysParseExact: true,
                    longDateFormat: {
                        LT: 'HH:mm',
                        LTS: 'HH:mm:ss',
                        L: 'DD.MM.YYYY',
                        LL: 'D. MMMM YYYY',
                        LLL: 'D. MMMM YYYY [kl.] HH:mm',
                        LLLL: 'dddd D. MMMM YYYY [kl.] HH:mm'
                    },
                    calendar: {
                        sameDay: '[i dag kl.] LT',
                        nextDay: '[i morgen kl.] LT',
                        nextWeek: 'dddd [kl.] LT',
                        lastDay: '[i går kl.] LT',
                        lastWeek: '[forrige] dddd [kl.] LT',
                        sameElse: 'L'
                    },
                    relativeTime: {
                        future: 'om %s',
                        past: '%s siden',
                        s: 'noen sekunder',
                        m: 'ett minutt',
                        mm: '%d minutter',
                        h: 'en time',
                        hh: '%d timer',
                        d: 'en dag',
                        dd: '%d dager',
                        M: 'en måned',
                        MM: '%d måneder',
                        y: 'ett år',
                        yy: '%d år'
                    },
                    ordinalParse: /\d{1,2}\./,
                    ordinal: '%d.',
                    week: {
                        dow: 1, // Monday is the first day of the week.
                        doy: 4  // The week that contains Jan 4th is the first week of the year.
                    }
                });

                if (currentLocale)
                    moment.locale(currentLocale);
            };

        init();

        return {
            hashes: hashes,
            logger: logger,
            messages: messages,
            stateKeys: stateKeys,
            storeExpirationMs: storeExpirationMs,
            throttle: throttle,
            title: title,
            toasts: toasts,
            viewIds: viewIds,
            window: window
        };
    });
;
define('datacontext',
    ['jquery', 'underscore', 'ko', 'models/model', 'models/model.mapper', 'datamanager', 'config', 'utils'],
    function ($, _, ko, model, modelmapper, datamanager, config, utils) {
        var logger = config.logger,
        getCurrentUserId = function () {
            return config.currentUser().id();
        },
        itemsToArray = function (items, observableArray, filter, sortFunction) {
            // Maps the memo to an observableArray, 
            // then returns the observableArray
            if (!observableArray) return;

            // Create an array from the memo object
            var underlyingArray = utils.mapMemoToArray(items);

            if (filter) {
                underlyingArray = _.filter(underlyingArray, function (o) {
                    var match = filter.predicate(filter, o);
                    return match;
                });
            }
            if (sortFunction) {
                underlyingArray.sort(sortFunction);
            }
            //logger.info('Fetched, filtered and sorted ' + underlyingArray.length + ' records');
            observableArray(underlyingArray);
        },
        mapToContext = function (dtoList, items, results, mapper, filter, sortFunction) {
            // Loop through the raw dto list and populate a dictionary of the items
            items = _.reduce(dtoList, function (memo, dto) {
                var id = mapper.getDtoId(dto);
                var existingItem = items[id];
                memo[id] = mapper.fromDto(dto, existingItem);
                return memo;
            }, {});
            itemsToArray(items, results, filter, sortFunction);
            //logger.success('received with ' + dtoList.length + ' elements');
            return items; // must return these
        },
        EntitySet = function (getFunction, mapper, nullo, updateFunction) {
            var items = {},
                // returns the model item produced by merging dto into context
                mapDtoToContext = function (dto) {
                    var id = mapper.getDtoId(dto);
                    var existingItem = items[id];
                    items[id] = mapper.fromDto(dto, existingItem);
                    return items[id];
                },
                add = function (newObj) {
                    items[newObj.id()] = newObj;
                },
                removeById = function (id) {
                    delete items[id];
                },
                getLocalById = function (id) {
                    // This is the only place we set to NULLO
                    return !!id && !!items[id] ? items[id] : nullo;
                },
                getAllLocal = function () {
                    return utils.mapMemoToArray(items);
                },
                getData = function (options) {
                    return $.Deferred(function (def) {
                        var results = options && options.results,
                            sortFunction = options && options.sortFunction,
                            filter = options && options.filter,
                            forceRefresh = options && options.forceRefresh,
                            param = options && options.param,
                            getFunctionOverride = options && options.getFunctionOverride;

                        getFunction = getFunctionOverride || getFunction;

                        // If the internal items object doesnt exist, 
                        // or it exists but has no properties, 
                        // or we force a refresh
                        if (forceRefresh || !items || !utils.hasProperties(items)) {
                            getFunction({
                                success: function (dtoList) {
                                    items = mapToContext(dtoList, items, results, mapper, filter, sortFunction);
                                    def.resolve(results);
                                },
                                error: function (response) {
                                    logger.error(config.toasts.errorGettingData);
                                    def.reject();
                                }
                            }, param);
                        } else {
                            itemsToArray(items, results, filter, sortFunction);
                            def.resolve(results);
                        }
                    }).promise();
                },
                updateData = function (entity, callbacks) {

                    var entityJson = ko.toJSON(entity);

                    return $.Deferred(function (def) {
                        if (!updateFunction) {
                            logger.error('updateData method not implemented');
                            if (callbacks && callbacks.error) { callbacks.error(); }
                            def.reject();
                            return;
                        }

                        updateFunction({
                            success: function (response) {
                                logger.success(config.toasts.savedData);
                                entity.dirtyFlag().reset();
                                if (callbacks && callbacks.success) { callbacks.success(); }
                                def.resolve(response);
                            },
                            error: function (response) {
                                logger.error(config.toasts.errorSavingData);
                                if (callbacks && callbacks.error) { callbacks.error(); }
                                def.reject(response);
                                return;
                            }
                        }, entityJson);
                    }).promise();
                };

            return {
                mapDtoToContext: mapDtoToContext,
                add: add,
                getAllLocal: getAllLocal,
                getLocalById: getLocalById,
                getData: getData,
                removeById: removeById,
                updateData: updateData
            };
        },

        gameComments = new EntitySet(datamanager.getGameDiscussionPost, modelmapper.gamediscussionpost, model.GameDiscussionPost);

        calendarGames = ko.observableArray(),

        getMemberCalendarGames = function () {
            datamanager.getMemberCalendarGames(true, 0, {
                success: function (json) {
                    calendarGames(json);
                },
                error: function (response) {}
            });
        },
          
        // extend Sessions enttityset 
        gameComments.getGameCommentById = function (id, callbacks, forceRefresh) {
            return $.Deferred(function (def) {
                var gameComment = gameComments.getLocalById(id);
                if (gameComment.isNullo || forceRefresh) {
                    // if nullo or brief, get fresh from database
                    datamanager.getGameDiscussionPost(currentGameDiscussionPostId(), {
                        success: function (json) {
                            gameComment = gameComment.mapDtoToContext(json[0]);
                            if (callbacks && callbacks.success) { callbacks.success(session); }
                            def.resolve(dto);
                        },
                        error: function (response) {
                            logger.error('oops! could not retrieve session ' + id);
                            if (callbacks && callbacks.error) { callbacks.error(response); }
                            def.reject(response);
                        }
                    });
                }
                else {
                    if (callbacks && callbacks.success) { callbacks.success(gameComment); }
                    def.resolve(gameComment);
                }
            }).promise();
        };

        var datacontext = {
            gamecomments: gameComments,
            calendarGames: calendarGames
        };

        // We did this so we can access the datacontext during its construction
        model.setDataContext(datacontext);

        return datacontext;
    });;
define('datamanager',
    ['amplify'],
    function (amplify) {

        amplify.request.define("createMemberFromMemberRequest", "ajax", {
            url: swconstants.serverUrl + "/api/memberrequestapi/createmember?id={id}&callback=?",
            dataType: "json",
            type: "POST",
            contentType: 'application/json; charset=utf-8'
        });

        amplify.request.define("connectMemberToPlayer", "ajax", {
            url: swconstants.serverUrl + "/api/teamconnectapi/connectmembertoplayer/?playerid={id}&callback=?",
            dataType: "json",
            type: "POST",
            contentType: 'application/json; charset=utf-8'
        });

        amplify.request.define("connectMemberToTeamStaff", "ajax", {
            url: swconstants.serverUrl + "/api/teamconnectapi/connectmembertoteamstaff/?teamstaffid={id}&callback=?",
            dataType: "json",
            type: "POST",
            contentType: 'application/json; charset=utf-8'
        });        

        amplify.request.define("sendTeamPartnerPaymentDossier", "ajax", {
            url: swconstants.serverUrl + "/api/teamadminapi/sendteampartnerpaymentdossier/?teampartnerid={teamPartnerId}&callback=?",
            dataType: "json",
            type: "POST",
            contentType: 'application/json; charset=utf-8'
        });            

        amplify.request.define("sendIndividualInterviewRequest", "ajax", {
            url: swconstants.serverUrl + "/api/interviewadminapi/sendindividualrequest/?interviewrequestid={interviewRequestId}&callback=?",
            dataType: "json",
            type: "POST",
            contentType: 'application/json; charset=utf-8'
        });

        amplify.request.define("insertSocialEntityView", "ajax", {
            url: swconstants.serverUrl + "/api/socialentityviewapi/post/?id={id}&callback=?",
            dataType: "json",
            type: "POST",
            contentType: 'application/json; charset=utf-8'
        });        

        amplify.request.define("insertSystemAdministrator", "ajax", {
            url: swconstants.serverUrl + "/api/systemadministratorapi/insertsystemadministrator/?memberid={id}&callback=?",
            dataType: "json",
            type: "POST",
            contentType: 'application/json; charset=utf-8'
        });

        amplify.request.define("verifyPost", "ajax", {
            url: swconstants.serverUrl + "/api/gamediscussionpostapi/verifypost/?id={id}&callback=?",
            dataType: "json",
            type: "POST",
            contentType: 'application/json; charset=utf-8'
        });

        amplify.request.define("updateHideTimelineComments", "ajax", {
            url: swconstants.serverUrl + "/api/memberinfoadminapi/updatehidetimelinecomments/?hidetimelinecomments={hideTimelineComments}&callback=?",
            dataType: "json",
            type: "POST",
            contentType: 'application/json; charset=utf-8'
        });        

        amplify.request.define("sendClubPayments", "ajax", {
            url: swconstants.serverUrl + "/api/adminpayoutsapi/sendclubpayments/?paymentid={paymentId}&callback=?",
            dataType: "json",
            type: "POST",
            contentType: 'application/json; charset=utf-8'
        });                           

        amplify.request.define("acceptGameRequest", "ajax", {
            url: swconstants.serverUrl + "/api/gameapi/acceptgamerequest/?gameteamrequestid={id}&callback=?",
            dataType: "json",
            type: "POST",
            contentType: 'application/json; charset=utf-8'
        });                                                                                                                  

        amplify.request.define("updateGameLineUp", "ajax", {
            url: swconstants.serverUrl + "/api/gamelineupapi/updategamelineup/?callback=?",
            dataType: "json",
            type: "POST",
            contentType: 'application/json; charset=utf-8'
        });

        amplify.request.define("calculatePlayerStatistics", "ajax", {
            url: swconstants.serverUrl + "/api/leagueapi/calculateplayerstatistics/?leagueid={leagueId}&callback=?",
            dataType: "json",
            type: "POST",
            contentType: 'application/json; charset=utf-8'
        });

        amplify.request.define("calculateGoalkeeperStatistics", "ajax", {
            url: swconstants.serverUrl + "/api/leagueapi/calculategoalkeeperstatistics/?leagueid={leagueId}&callback=?",
            dataType: "json",
            type: "POST",
            contentType: 'application/json; charset=utf-8'
        });        

        amplify.request.define("updateLeagueTable", "ajax", {
            url: swconstants.serverUrl + "/api/leagueapi/updateleaguetable/?leagueid={leagueId}&callback=?",
            dataType: "json",
            type: "POST",
            contentType: 'application/json; charset=utf-8'
        });

        amplify.request.define("disconnectHighlightFromEvent", "ajax", {
            url: swconstants.serverUrl + "/api/livestreamhighlightapi/disconnecthighlightfromevent/?ereventid={erEventId}&sportid={sportId}&callback=?",
            dataType: "json",
            type: "POST",
            contentType: 'application/json; charset=utf-8'
        });                                                        

        amplify.request.define("resetTeam", "ajax", {
            url: swconstants.serverUrl + "/api/teamadminapi/resetteam/?teamid={teamId}&callback=?",
            dataType: "json",
            type: "POST",
            contentType: 'application/json; charset=utf-8'
        });

        amplify.request.define("addRefereeToGame", "ajax", {
            url: swconstants.serverUrl + "/api/gameapi/addrefereetogame/?gameid={gameId}&refereeid={refereeId}&callback=?",
            dataType: "json",
            type: "POST",
            contentType: 'application/json; charset=utf-8'
        });

        amplify.request.define("deleteMember", "ajax", {
            url: swconstants.serverUrl + "/api/adminapi/deletemember/?id={id}&callback=?",
            dataType: "json",
            type: "DELETE"
        });

        amplify.request.define("deleteClub", "ajax", {
            url: swconstants.serverUrl + "/api/clubapi/delete/?id={id}&callback=?",
            dataType: "json",
            type: "DELETE"
        });

        amplify.request.define("deleteClubBillboard", "ajax", {
            url: swconstants.serverUrl + "/api/clubadminapi/deleteclubbillboard/?clubid={id}&callback=?",
            dataType: "json",
            type: "DELETE"
        });        

        amplify.request.define("deleteClubAdministrator", "ajax", {
            url: swconstants.serverUrl + "/api/clubadminapi/deleteclubadministrator/?clubadministratorid={clubAdministratorId}&callback=?",
            dataType: "json",
            type: "DELETE"
        });

        amplify.request.define("deleteClubPartner", "ajax", {
            url: swconstants.serverUrl + "/api/clubadminapi/deleteclubpartner/?clubpartnerid={clubPartnerId}&callback=?",
            dataType: "json",
            type: "DELETE"
        });

        amplify.request.define("deleteLeagueOrganizerPartner", "ajax", {
            url: swconstants.serverUrl + "/api/leagueorganizeradminapi/deleteleagueorganizerpartner/?leagueorganizerpartnerid={leagueOrganizerPartnerId}&callback=?",
            dataType: "json",
            type: "DELETE"
        });        

        amplify.request.define("deleteInfoItem", "ajax", {
            url: swconstants.serverUrl + "/api/infoitemapi/deleteinfoitem/?id={Id}&infoitemtype={infoItemType}&callback=?",
            dataType: "json",
            type: "DELETE"
        });

        amplify.request.define("deleteHighlightFromEREvent", "ajax", {
            url: swconstants.serverUrl + "/api/livestreamhighlightapi/deletehighlightfromerevent/?gameid={gameId}&ereventid={EREventId}&callback=?",
            dataType: "json",
            type: "DELETE"
        });        

        amplify.request.define("deletePartnerFeatureSet", "ajax", {
            url: swconstants.serverUrl + "/api/partneradminapi/deletepartnerfeatureset/?id={id}&callback=?",
            dataType: "json",
            type: "DELETE"
        });

        amplify.request.define("deletePartnerPackage", "ajax", {
            url: swconstants.serverUrl + "/api/partneradminapi/deletepartnerpackage/?id={id}&callback=?",
            dataType: "json",
            type: "DELETE"
        });

        amplify.request.define("deleteFollower", "ajax", {
            url: swconstants.serverUrl + "/api/teamapi/deletefollower/?id={id}&callback=?",
            dataType: "json",
            type: "DELETE"
        });

        amplify.request.define("deleteTeamAdmin", "ajax", {
            url: swconstants.serverUrl + "/api/teamadministratorapi/delete/?id={id}&callback=?",
            dataType: "json",
            type: "DELETE"
        });

        amplify.request.define("deleteLiveReporter", "ajax", {
            url: swconstants.serverUrl + "/api/teamlivereporterapi/delete/?id={id}&callback=?",
            dataType: "json",
            type: "DELETE"
        });

        amplify.request.define("deleteLeagueOrganizerAdministrator", "ajax", {
            url: swconstants.serverUrl + "/api/leagueorganizeradminapi/delete/?id={id}&callback=?",
            dataType: "json",
            type: "DELETE"
        });

        amplify.request.define("deleteTeamBanner", "ajax", {
            url: swconstants.serverUrl + "/api/teamapi/deletebanner/?id={id}&callback=?",
            dataType: "json",
            type: "DELETE"
        });

        amplify.request.define("deleteTeamPlayer", "ajax", {
            url: swconstants.serverUrl + "/api/teamplayerapi/deleteteamplayer/?teamplayerid={teamPlayerId}&callback=?",
            dataType: "json",
            type: "DELETE"
        });

        amplify.request.define("deleteMemberGuardian", "ajax", {
            url: swconstants.serverUrl + "/api/memberguardianapi/delete/?id={id}&callback=?",
            dataType: "json",
            type: "DELETE"
        });

        amplify.request.define("deletePlayerGuardian", "ajax", {
            url: swconstants.serverUrl + "/api/playerguardianapi/delete/?playerguardianid={PlayerGuardianID}&callback=?",
            dataType: "json",
            type: "DELETE"
        });

        amplify.request.define("deleteMemberProfilePicture", "ajax", {
            url: swconstants.serverUrl + "/api/memberapi/deletememberprofilepicture/?memberid={memberId}&callback=?",
            dataType: "json",
            type: "DELETE"
        });

        amplify.request.define("deleteReferencePicture", "ajax", {
            url: swconstants.serverUrl + "/api/memberapi/deletereferencepicture/?memberid={memberId}&callback=?",
            dataType: "json",
            type: "DELETE"
        });

        amplify.request.define("deleteLeagueTeam", "ajax", {
            url: swconstants.serverUrl + "/api/leagueteamapi/delete/?id={id}&callback=?",
            dataType: "json",
            type: "DELETE"
        });

        amplify.request.define("deleteTeam", "ajax", {
            url: swconstants.serverUrl + "/api/teamapi/delete/?id={id}&callback=?",
            dataType: "json",
            type: "DELETE"
        });

        amplify.request.define("deleteTeamStaff", "ajax", {
            url: swconstants.serverUrl + "/api/teamstaffapi/delete/?teamstaffid={TeamStaffID}&callback=?",
            dataType: "json",
            type: "DELETE"
        });

        amplify.request.define("deleteGameDiscussionPost", "ajax", {
            url: swconstants.serverUrl + "/api/gamediscussionpostapi/delete/?id={id}&callback=?",
            dataType: "json",
            type: "DELETE"
        });        

        amplify.request.define("deleteGameReport", "ajax", {
            url: swconstants.serverUrl + "/api/gamereportapi/delete/?id={id}&callback=?",
            dataType: "json",
            type: "DELETE"
        });

        amplify.request.define("deleteGame", "ajax", {
            url: swconstants.serverUrl + "/api/gameapi/deletegame/?gameid={gameId}&callback=?",
            dataType: "json",
            type: "DELETE"
        });

        amplify.request.define("deleteDiscussionPost", "ajax", {
            url: swconstants.serverUrl + "/api/discussionpostapi/delete/?id={id}&callback=?",
            dataType: "json",
            type: "DELETE"
        });

        amplify.request.define("deleteMemberTeamRole", "ajax", {
            url: swconstants.serverUrl + "/api/teamconnectapi/deletememberteamrole/?MemberTeamRoleID={id}&callback=?",
            dataType: "json",
            type: "DELETE"
        });

        amplify.request.define("deletePicture", "ajax", {
            url: swconstants.serverUrl + "/api/pictureapi/delete?id={id}&callback=?",
            dataType: "json",
            type: "DELETE"
        });

        amplify.request.define("deleteSocialEntityComment", "ajax", {
            url: swconstants.serverUrl + "/api/socialentitycommentapi/delete?id={id}&callback=?",
            type: "DELETE",
            dataType: 'json',
            contentType: 'application/json; charset=utf-8'
        });

        amplify.request.define("deleteVideo", "ajax", {
            url: swconstants.serverUrl + "/api/videoapi/delete?id={id}&callback=?",
            dataType: "json",
            type: "DELETE"
        });

        amplify.request.define("deleteSystemAdministrator", "ajax", {
            url: swconstants.serverUrl + "/api/systemadministratorapi/deletesystemadministrator?id={id}&callback=?",
            dataType: "json",
            type: "DELETE"
        });

        amplify.request.define("deleteLiveStream", "ajax", {
            url: swconstants.serverUrl + "/api/livestreamapi/delete?id={id}&callback=?",
            dataType: "json",
            type: "DELETE"
        });

        amplify.request.define("deleteGameVideo", "ajax", {
            url: swconstants.serverUrl + "/api/gamevideoapi/delete?id={id}&callback=?",
            dataType: "json",
            type: "DELETE"
        });

        amplify.request.define("deleteTeamPartner", "ajax", {
            url: swconstants.serverUrl + "/api/teamadminapi/deleteteampartner?teampartnerid={teamPartnerId}&callback=?",
            dataType: "json",
            type: "DELETE"
        });        

        amplify.request.define("deleteGameLiveStreamHighlight", "ajax", {
            url: swconstants.serverUrl + "/api/livestreamhighlightapi/delete?id={id}&callback=?",
            dataType: "json",
            type: "DELETE"
        });                

        amplify.request.define("deleteGameTeamRoster", "ajax", {
            url: swconstants.serverUrl + "/api/gameteamrosterapi/delete?id={gameTeamRosterId}&callback=?",
            dataType: "json",
            type: "DELETE"
        });

        amplify.request.define("deleteLineUp", "ajax", {
            url: swconstants.serverUrl + "/api/gamelineupapi/delete?gamelineupid={gameLineUpId}&callback=?",
            dataType: "json",
            type: "DELETE"
        });

        amplify.request.define("deleteIndividualInterviewRequest", "ajax", {
            url: swconstants.serverUrl + "/api/interviewadminapi/deleteindividualrequest?interviewrequestid={interviewRequestId}&callback=?",
            dataType: "json",
            type: "DELETE"
        });

        amplify.request.define("deleteFootballEventReport", "ajax", {
            url: swconstants.serverUrl + "/api/footballeventreportapi/deleteeventreport?eventreportid={eventReportId}&callback=?",
            dataType: "json",
            type: "DELETE"
        });

        amplify.request.define("deleteFloorballEventReport", "ajax", {
            url: swconstants.serverUrl + "/api/floorballeventreportapi/deleteeventreport?eventreportid={eventReportId}&callback=?",
            dataType: "json",
            type: "DELETE"
        });

        amplify.request.define("deleteFutsalEventReport", "ajax", {
            url: swconstants.serverUrl + "/api/futsaleventreportapi/deleteeventreport?eventreportid={eventReportId}&callback=?",
            dataType: "json",
            type: "DELETE"
        });        

        amplify.request.define("deleteFootballEREvent", "ajax", {
            url: swconstants.serverUrl + "/api/footballeventreportapi/deletefootballerevent?footballereventid={footballEREventId}&memberid={memberId}&callback=?",
            dataType: "json",
            type: "DELETE"
        });

        amplify.request.define("deleteFloorballEREvent", "ajax", {
            url: swconstants.serverUrl + "/api/floorballeventreportapi/deletefloorballerevent?floorballereventid={floorballEREventId}&callback=?",
            dataType: "json",
            type: "DELETE"
        });

        amplify.request.define("deleteFutsalEREvent", "ajax", {
            url: swconstants.serverUrl + "/api/futsaleventreportapi/deletefutsalerevent?futsalereventid={futsalEREventId}&callback=?",
            dataType: "json",
            type: "DELETE"
        });        

        amplify.request.define("getPayoutsPreview", "ajax", {
            url: swconstants.serverUrl + "/api/adminpayoutsapi/getpayoutspreview?enddate={endDate}&callback=?",
            dataType: "json",
            type: "GET"
        });

        amplify.request.define("getAllMembers", "ajax", {
            url: swconstants.serverUrl + "/api/memberapi?callback=?",
            dataType: "json",
            type: "GET"
        });

        amplify.request.define("getAllMemberRequests", "ajax", {
            url: swconstants.serverUrl + "/api/memberrequestapi?callback=?",
            dataType: "json",
            type: "GET"
        });

        amplify.request.define("getArenaForSelectList", "ajax", {
            url: swconstants.serverUrl + "/api/arenaapi/getarenaforselectlist?id={id}&callback=?",
            dataType: "json",
            type: "GET"
        });

        amplify.request.define("getArenas", "ajax", {
            url: swconstants.serverUrl + "/api/arenaapi?callback=?",
            dataType: "json",
            type: "GET"
        });

        amplify.request.define("getClubs", "ajax", {
            url: swconstants.serverUrl + "/api/clubapi?callback=?",
            dataType: "json",
            type: "GET"
        });

        amplify.request.define("getClubForEditView", "ajax", {
            url: swconstants.serverUrl + "/api/clubadminapi/getclubforeditview?id={id}&callback=?",
            dataType: "json",
            type: "GET"
        });

        amplify.request.define("getMagazineBlurb", "ajax", {
            url: swconstants.serverUrl + "/api/magazineapi/getmagazineblurb?blurbtypeid={blurbTypeId}&gameid={gameId}&callback=?",
            dataType: "json",
            type: "GET"
        });        

        amplify.request.define("getReportsForAdminSummary", "ajax", {
            url: swconstants.serverUrl + "/api/reportapi/getreportsforadminsummary?lastdate={lastDate}&callback=?",
            dataType: "json",
            type: "GET"
        });

        amplify.request.define("getReportsForAdmin", "ajax", {
            url: swconstants.serverUrl + "/api/reportapi/getreportsforadmin?lastdate={lastDate}&callback=?",
            dataType: "json",
            type: "GET"
        });

        amplify.request.define("getReportsForAdminByGame", "ajax", {
            url: swconstants.serverUrl + "/api/reportapi/getreportsforadminbygame?lastdate={lastDate}&callback=?",
            dataType: "json",
            type: "GET"
        });

        amplify.request.define("getReportsForAdminByMember", "ajax", {
            url: swconstants.serverUrl + "/api/reportapi/getreportsforadminbymember?lastdate={lastDate}&callback=?",
            dataType: "json",
            type: "GET"
        });

        amplify.request.define("getReportsForAdminByReportedMember", "ajax", {
            url: swconstants.serverUrl + "/api/reportapi/getreportsforadminbyreportedmember?lastdate={lastDate}&callback=?",
            dataType: "json",
            type: "GET"
        });

        amplify.request.define("getClubAdminInfo", "ajax", {
            url: swconstants.serverUrl + "/api/clubadminapi/getclubadmininfo/?clubid={clubId}&seasonid={seasonId}&callback=?",
            dataType: "json",
            type: "GET"
        });

        amplify.request.define("getClubAdminTeamInfo", "ajax", {
            url: swconstants.serverUrl + "/api/clubadminapi/getclubadminteaminfo/?clubid={clubId}&seasonid={seasonId}&callback=?",
            dataType: "json",
            type: "GET"
        });

        amplify.request.define("getClubAdminLiveStreamStatistics", "ajax", {
            url: swconstants.serverUrl + "/api/clubadminapi/getlivestreamstatistics/?clubid={clubId}&callback=?",
            dataType: "json",
            type: "GET"
        });

        amplify.request.define("getTeamAdminLiveStreamStatistics", "ajax", {
            url: swconstants.serverUrl + "/api/teamadminapi/getlivestreamstatistics/?teamid={teamId}&callback=?",
            dataType: "json",
            type: "GET"
        });

        amplify.request.define("getLiveStreamLogItems", "ajax", {
            url: swconstants.serverUrl + "/api/livestreamapi/getlivestreamlogitems/?livestreamid={liveStreamId}&callback=?",
            dataType: "json",
            type: "GET"
        });
        

        amplify.request.define("getTeamPayoutSummary", "ajax", {
            url: swconstants.serverUrl + "/api/teamadminapi/getteampayoutsummary/?teamid={teamId}&livestreamsubscriptionid={liveStreamSubscriptionId}&callback=?",
            dataType: "json",
            type: "GET"
        });

        amplify.request.define("getClubPaymentSummary", "ajax", {
            url: swconstants.serverUrl + "/api/adminpayoutsapi/getclubpaymentsummary/?clubpaymentid={clubPaymentId}&callback=?",
            dataType: "json",
            type: "GET"
        });        

        amplify.request.define("getGamePlayer", "ajax", {
            url: swconstants.serverUrl + "/api/gameplayerapi/getgameplayer/?gameplayerid={gamePlayerId}&callback=?",
            dataType: "json",
            type: "GET"
        });        
        
        amplify.request.define("getGameTeamStaff", "ajax", {
            url: swconstants.serverUrl + "/api/gameteamstaffapi/getgameteamstaff/?gameteamstaffid={gameTeamStaffId}&callback=?",
            dataType: "json",
            type: "GET"
        });        

        amplify.request.define("getGameGoalies", "ajax", {
            url: swconstants.serverUrl + "/api/gamegoaliestatisticapi/getgamegoalies/?gameid={gameId}&teamid={teamId}&callback=?",
            dataType: "json",
            type: "GET"
        });                

        amplify.request.define("initTeamReplayPartners", "ajax", {
            url: swconstants.serverUrl + "/api/teamadminapi/initteamreplaypartners/?teamid={teamId}&callback=?",
            dataType: "json",
            type: "GET"
        });        

        //amplify.request.define("initGameTeamRoster", "ajax", {
        //    url: swconstants.serverUrl + "/api/gameteamrosterapi/initgameteamroster/?gameteamrosterid={gameTeamRosterId}&callback=?",
        //    dataType: "json",
        //    type: "GET"
        //});                

        amplify.request.define("initGameReferees", "ajax", {
            url: swconstants.serverUrl + "/api/gameapi/initgamereferees/?gameid={gameId}&callback=?",
            dataType: "json",
            type: "GET"
        });

        amplify.request.define("initGameTeams", "ajax", {
            url: swconstants.serverUrl + "/api/gameapi/initgameteams/?gameid={gameId}&callback=?",
            dataType: "json",
            type: "GET"
        });

        amplify.request.define("initGameGoalieStatistics", "ajax", {
            url: swconstants.serverUrl + "/api/gamegoaliestatisticapi/initgamegoaliestatistics/?gameid={gameId}&callback=?",
            dataType: "json",
            type: "GET"
        });        

        amplify.request.define("initCreateLiveStream", "ajax", {
            url: swconstants.serverUrl + "/api/livestreamapi/initcreatelivestream/?gameid={gameId}&callback=?",
            dataType: "json",
            type: "GET"
        });        

        amplify.request.define("initGamePlayersView", "ajax", {
            url: swconstants.serverUrl + "/api/gameplayerapi/initgameplayersview/?gameteamrosterid={gameTeamRosterId}&callback=?",
            dataType: "json",
            type: "GET"
        });                        

        amplify.request.define("initGamePlayersViewFromClub", "ajax", {
            url: swconstants.serverUrl + "/api/gameplayerapi/initgameplayersviewfromclub/?gameteamrosterid={gameTeamRosterId}&callback=?",
            dataType: "json",
            type: "GET"
        });       

        amplify.request.define("initGamePlayersViewForCopy", "ajax", {
            url: swconstants.serverUrl + "/api/gameplayerapi/initgameplayersviewforcopy/?gameteamrosterid={gameTeamRosterId}&gameteamrosteridtocopy={gameTeamRosterIdToCopy}&callback=?",
            dataType: "json",
            type: "GET"
        });       

        amplify.request.define("initGameTeamStaffView", "ajax", {
            url: swconstants.serverUrl + "/api/gameteamstaffapi/initgameteamstaffview/?gameteamrosterid={gameTeamRosterId}&callback=?",
            dataType: "json",
            type: "GET"
        });

        amplify.request.define("initGameTeamStaffViewFromClub", "ajax", {
            url: swconstants.serverUrl + "/api/gameteamstaffapi/initgameteamstaffviewfromclub/?gameteamrosterid={gameTeamRosterId}&callback=?",
            dataType: "json",
            type: "GET"
        });

        amplify.request.define("initGameTeamStaffViewForCopy", "ajax", {
            url: swconstants.serverUrl + "/api/gameteamstaffapi/initgameteamstaffviewforcopy/?gameteamrosterid={gameTeamRosterId}&gameteamrosteridtocopy={gameTeamRosterIdToCopy}&callback=?",
            dataType: "json",
            type: "GET"
        });       

        amplify.request.define("initGameLineUpView", "ajax", {
            url: swconstants.serverUrl + "/api/gamelineupapi/initgamelineupview/?gameid={gameId}&teamid={teamId}&callback=?",
            dataType: "json",
            type: "GET"
        });                   

        amplify.request.define("initLeagueAdmin", "ajax", {
            url: swconstants.serverUrl + "/api/leagueadminapi/initleagueadmin/?leagueid={leagueId}&callback=?",
            dataType: "json",
            type: "GET"
        });        

        amplify.request.define("getGamesWithTeamRoster", "ajax", {
            url: swconstants.serverUrl + "/api/gameteamrosterapi/getgameswithteamroster/?teamid={teamId}&gameid={gameId}&callback=?",
            dataType: "json",
            type: "GET"
        });                                

        amplify.request.define("getTeamPartnerForEditView", "ajax", {
            url: swconstants.serverUrl + "/api/teamadminapi/getteampartnerforeditview/?teamid={teamId}&teampartnerid={teamPartnerId}&partnertypeid={partnerTypeId}&callback=?",
            dataType: "json",
            type: "GET"
        });                        

        amplify.request.define("getTeamPartnerPaymentDossier", "ajax", {
            url: swconstants.serverUrl + "/api/teamadminapi/getteampartnerpaymentdossier/?teampartnerid={teamPartnerId}&callback=?",
            dataType: "json",
            type: "GET"
        });                                        

        amplify.request.define("getLiveStreamStatisticsPerGame", "ajax", {
            url: swconstants.serverUrl + "/api/clubadminapi/getlivestreamstatisticspergame/?teamid={teamId}&callback=?",
            dataType: "json",
            type: "GET"
        });

        amplify.request.define("getLiveStreamStatisticsPerTeam", "ajax", {
            url: swconstants.serverUrl + "/api/clubadminapi/getlivestreamstatisticsperteam/?teamid={teamId}&callback=?",
            dataType: "json",
            type: "GET"
        });

        amplify.request.define("getStreamPackagesForLeagueOrganizer", "ajax", {
            url: swconstants.serverUrl + "/api/leagueorganizeradminapi/getstreampackages/?leagueorganizerid={leagueOrganizerId}&callback=?",
            dataType: "json",
            type: "GET"
        });        

        amplify.request.define("getClubAdministrators", "ajax", {
            url: swconstants.serverUrl + "/api/clubadminapi/getclubadministrators/?clubid={clubId}&callback=?",
            dataType: "json",
            type: "GET"
        });

        amplify.request.define("getLeagueOrganizerAdministrators", "ajax", {
            url: swconstants.serverUrl + "/api/leagueorganizeradminapi/getleagueorganizeradministrators/?leagueorganizerid={leagueOrganizerId}&callback=?",
            dataType: "json",
            type: "GET"
        });

        amplify.request.define("getClubHeaderInfo", "ajax", {
            url: swconstants.serverUrl + "/api/clubapi/getclubheaderinfo/?clubid={clubId}&callback=?",
            dataType: "json",
            type: "GET"
        });

        amplify.request.define("getClubPictures", "ajax", {
            url: swconstants.serverUrl + "/api/clubapi/getpictures/?clubid={clubId}&amount={amount}&lastpictureid={lastPictureId}&callback=?",
            dataType: "json",
            type: "GET"
        });

        amplify.request.define("getClubVideos", "ajax", {
            url: swconstants.serverUrl + "/api/clubapi/getvideos/?clubid={clubId}&amount={amount}&lastvideoid={lastVideoId}&callback=?",
            dataType: "json",
            type: "GET"
        });

        amplify.request.define("getClubTeamsForExternalConnect", "ajax", {
            url: swconstants.serverUrl + "/api/clubapi/getclubteamsforexternalconnect?teamId={teamId}&callback=?",
            dataType: "json",
            type: "GET"
        });

        amplify.request.define("getCompetitionHeader", "ajax", {
            url: swconstants.serverUrl + "/api/competitionapi/getcompetitionheader/?id={competitionId}&callback=?",
            dataType: "json",
            type: "GET"
        });        

        amplify.request.define("getLeagueOrganizerPartner", "ajax", {
            url: swconstants.serverUrl + "/api/leagueorganizeradminapi/getpartner?leagueorganizerpartnerid={leagueOrganizerPartnerId}&callback=?",
            dataType: "json",
            type: "GET"
        });

        amplify.request.define("getClubPartner", "ajax", {
            url: swconstants.serverUrl + "/api/clubadminapi/getpartner?clubpartnerid={clubPartnerId}&callback=?",
            dataType: "json",
            type: "GET"
        });

        amplify.request.define("getClubPartners", "ajax", {
            url: swconstants.serverUrl + "/api/clubadminapi/getpartners?clubid={clubId}&callback=?",
            dataType: "json",
            type: "GET"
        });

        amplify.request.define("getPartnerForAdminDetails", "ajax", {
            url: swconstants.serverUrl + "/api/partneradminapi/getpartner?partnerid={partnerId}&callback=?",
            dataType: "json",
            type: "GET"
        });

        amplify.request.define("getActivePartnerFeatures", "ajax", {
            url: swconstants.serverUrl + "/api/partneradminapi/getactivepartnerfeatures?callback=?",
            dataType: "json",
            type: "GET"
        });        

        amplify.request.define("getActivePlacements", "ajax", {
            url: swconstants.serverUrl + "/api/partneradminapi/getactiveplacements?callback=?",
            dataType: "json",
            type: "GET"
        });        

        amplify.request.define("getPartnerFeatureData", "ajax", {
            url: swconstants.serverUrl + "/api/partneradminapi/getpartnerfeaturedata?id={id}&callback=?",
            dataType: "json",
            type: "GET"
        });

        amplify.request.define("getPaymentStatus", "ajax", {
            url: swconstants.serverUrl + "/api/swishapi/getstatusasync?callback=?",
            dataType: "json",
            type: "GET"
        });

        amplify.request.define("getPaymentTeam", "ajax", {
            url: swconstants.serverUrl + "/api/paymentapi/getpaymentteam?gameid={gameId}&callback=?",
            dataType: "json",
            type: "GET"
        });        

        amplify.request.define("getCountriesForDialing", "ajax", {
            url: swconstants.serverUrl + "/api/countryapi/getcountriesfordialing?callback=?",
            dataType: "json",
            type: "GET"
        });

        amplify.request.define("getFollowers", "ajax", {
            url: swconstants.serverUrl + "/api/teamapi/getfollowers?teamid={teamId}&callback=?",
            dataType: "json",
            type: "GET"
        });

        amplify.request.define("getGenders", "ajax", {
            url: swconstants.serverUrl + "/api/genderapi/getgendersforselectlist?callback=?",
            dataType: "json",
            type: "GET"
        });

        amplify.request.define("getSeasons", "ajax", {
            url: swconstants.serverUrl + "/api/seasonapi/getseasonsforselectlist?callback=?",
            dataType: "json",
            type: "GET"
        });        

        amplify.request.define("initAudienceForPartnerEditView", "ajax", {
            url: swconstants.serverUrl + "/api/audienceapi/initaudienceforpartnereditview?audienceid={audienceId}&audiencetypeid={audienceTypeId}&callback=?",
            dataType: "json",
            type: "GET"
        });

        amplify.request.define("initAudienceForEditView", "ajax", {
            url: swconstants.serverUrl + "/api/audienceapi/initaudienceforeditview?infoitemtype={infoItemType}&audienceid={audienceId}&callback=?",
            dataType: "json",
            type: "GET"
        });

        amplify.request.define("initTargetFilterForPartnerEditView", "ajax", {
            url: swconstants.serverUrl + "/api/targetfilterapi/inittargetfilterforpartnereditview?targetFilterid={targetFilterId}&callback=?",
            dataType: "json",
            type: "GET"
        });        

        amplify.request.define("initLeagueOrganizerManageInfoItems", "ajax", {
            url: swconstants.serverUrl + "/api/leagueorganizerapi/initleagueorganizermanageinfoitems?leagueorganizerid={leagueOrganizerId}&callback=?",
            dataType: "json",
            type: "GET"
        });

        amplify.request.define("initClubManageInfoItems", "ajax", {
            url: swconstants.serverUrl + "/api/clubapi/initclubmanageinfoitems?clubid={clubId}&callback=?",
            dataType: "json",
            type: "GET"
        });

        amplify.request.define("initTeamManageInfoItems", "ajax", {
            url: swconstants.serverUrl + "/api/teamapi/initteammanageinfoitems?teamid={teamId}&callback=?",
            dataType: "json",
            type: "GET"
        });

        amplify.request.define("initGameReportForEditView", "ajax", {
            url: swconstants.serverUrl + "/api/gamereportapi/initgamereportforeditview?gameid={gameId}&gamereporttypeid={gameReportTypeId}&callback=?",
            dataType: "json",
            type: "GET"
        });

        amplify.request.define("initTeamAdminLiveStream", "ajax", {
            url: swconstants.serverUrl + "/api/teamadminapi/initlivestream?teamid={teamId}&callback=?",
            dataType: "json",
            type: "GET"
        });

        amplify.request.define("initGameLiveStreamHighlights", "ajax", {
            url: swconstants.serverUrl + "/api/livestreamhighlightapi/initgamelivestreamhighlights?gameid={gameId}&callback=?",
            dataType: "json",
            type: "GET"
        });

        amplify.request.define("initClubLiveStreamStatistics", "ajax", {
            url: swconstants.serverUrl + "/api/clubadminapi/initlivestreamstatistics?clubid={clubId}&callback=?",
            dataType: "json",
            type: "GET"
        });              

        amplify.request.define("getGameReport", "ajax", {
            url: swconstants.serverUrl + "/api/gamereportapi/getgamereportforeditview?callback=?",
            dataType: "json",
            type: "GET"
        });

        amplify.request.define("getLiveStreamHighlightsForGame", "ajax", {
            url: swconstants.serverUrl + "/api/livestreamhighlightapi/getlivestreamhighlightsforgame?gameid={gameId}&callback=?",
            dataType: "json",
            type: "GET"
        });        

        amplify.request.define("getLiveStreamAudiences", "ajax", {
            url: swconstants.serverUrl + "/api/livestreamsubscriptionapi/getlivestreamaudiences?id={id}&callback=?",
            dataType: "json",
            type: "GET"
        });  

        amplify.request.define("getLiveStreamTargetFilters", "ajax", {
            url: swconstants.serverUrl + "/api/livestreamsubscriptionapi/getlivestreamtargetfilters?id={id}&callback=?",
            dataType: "json",
            type: "GET"
        }); 

        amplify.request.define("getLiveStreamSubscriptionForEditView", "ajax", {
            url: swconstants.serverUrl + "/api/livestreamsubscriptionapi/getlivestreamsubscriptionforeditview?id={id}&callback=?",
            dataType: "json",
            type: "GET"
        });                

        amplify.request.define("getGameHeaderInfo", "ajax", {
            url: swconstants.serverUrl + "/api/gameapi/getgameheaderinfo",
            dataType: "json",
            type: "GET"
        });        

        amplify.request.define("getGameAdminInformation", "ajax", {
            url: swconstants.serverUrl + "/api/magazineapi/getgameadmininformation?gameid={gameId}&callback=?",
            dataType: "json",
            type: "GET"
        });

        amplify.request.define("clearGameCache", "ajax", {
            url: swconstants.serverUrl + "/api/magazineapi/cleargamecache?gameid={gameId}&callback=?",
            dataType: "json",
            type: "GET"
        });

        amplify.request.define("clearLeagueCache", "ajax", {
            url: swconstants.serverUrl + "/api/leagueadminapi/clearcache?leagueid={leagueId}&callback=?",
            dataType: "json",
            type: "GET"
        });

        amplify.request.define("getMyRoles", "ajax", {
            url: swconstants.serverUrl + "/api/memberapi/getmyroles",
            dataType: "json",
            type: "GET"
        });

        amplify.request.define("initMyTeams", "ajax", {
            url: swconstants.serverUrl + "/api/memberapi/initmyteams",
            dataType: "json",
            type: "GET"
        });

        amplify.request.define("initMyGames", "ajax", {
            url: swconstants.serverUrl + "/api/memberapi/initmygames",
            dataType: "json",
            type: "GET"
        });

        amplify.request.define("getTeamsIFollow", "ajax", {
            url: swconstants.serverUrl + "/api/memberapi/getteamsifollow",
            dataType: "json",
            type: "GET"
        });

        amplify.request.define("getLeaguesIFollow", "ajax", {
            url: swconstants.serverUrl + "/api/memberapi/getleaguesifollow",
            dataType: "json",
            type: "GET"
        });

        amplify.request.define("getEREventsForHighlight", "ajax", {
            url: swconstants.serverUrl + "/api/livestreamhighlightapi/getereventsforhighlight?id={Id}&callback=?",
            dataType: "json",
            type: "GET"
        });  

        amplify.request.define("getEREventsForGame", "ajax", {
            url: swconstants.serverUrl + "/api/livestreamhighlightapi/getereventsforgame?gameid={gameId}&callback=?",
            dataType: "json",
            type: "GET"
        });          
        
        amplify.request.define("getPartnerForEditView", "ajax", {
            url: swconstants.serverUrl + "/api/partneradminapi/getpartnerforeditview?partnerid={id}&callback=",
            dataType: "json",
            type: "GET"
        });

        amplify.request.define("getPartnerFeatureSetForEditView", "ajax", {
            url: swconstants.serverUrl + "/api/partneradminapi/getpartnerfeaturesetforeditview?id={id}&callback=",
            dataType: "json",
            type: "GET"
        });        

        amplify.request.define("getPartnerPackageForEditView", "ajax", {
            url: swconstants.serverUrl + "/api/partneradminapi/getpartnerpackageforeditview?id={id}&callback=",
            dataType: "json",
            type: "GET"
        });        
        
        amplify.request.define("getPartnerFeatureTypes", "ajax", {
            url: swconstants.serverUrl + "/api/partnerfeatureapi/getpartnerfeaturetypes",
            dataType: "json",
            type: "GET"
        });             

        amplify.request.define("getPartnerPackagesForPartner", "ajax", {
            url: swconstants.serverUrl + "/api/partneradminapi/getpartnerpackagesforpartner?id={Id}&callback=?",
            dataType: "json",
            type: "GET"
        });        

        amplify.request.define("getPartnerSetForPartnerPackage", "ajax", {
            url: swconstants.serverUrl + "/api/partneradminapi/getpartnersetforpartnerpackage?id={id}&callback=?",
            dataType: "json",
            type: "GET"
        });                

        amplify.request.define("getPartnerFeature", "ajax", {
            url: swconstants.serverUrl + "/api/partnerfeatureapi/getpartnerfeature?partnerfeatureid={Id}&callback=?",
            dataType: "json",
            type: "GET"
        });

        amplify.request.define("getPartnerFeatureForEditView", "ajax", {
            url: swconstants.serverUrl + "/api/partnerfeatureapi/getpartnerfeatureforeditview?partnerfeatureid={Id}&callback=?",
            dataType: "json",
            type: "GET"
        });

        amplify.request.define("getPartnerFeatureForDetailView", "ajax", {
            url: swconstants.serverUrl + "/api/partnerfeatureapi/getpartnerfeaturefordetailview?partnerfeatureid={Id}&callback=?",
            dataType: "json",
            type: "GET"
        });

        amplify.request.define("getPartnerFeatureForCreateView", "ajax", {
            url: swconstants.serverUrl + "/api/partneradminapi/getpartnerfeatureforcreateview?partnerid={id}&callback=?",
            dataType: "json",
            type: "GET"
        });               

        amplify.request.define("getTeamMemberForInvite", "ajax", {
            url: swconstants.serverUrl + "/api/teamapi/getteammemberforinvite?teamid={TeamID}&teamconnectionroleid={TeamConnectionRoleID}&invitetype={InviteType}&callback=?",
            dataType: "json",
            type: "GET"
        });

        amplify.request.define("getRecommendedTeams", "ajax", {
            url: swconstants.serverUrl + "/api/teamconnectapi/getrecommendedteams?memberid={MemberID}&callback=?",
            dataType: "json",
            type: "GET"
        });       

        amplify.request.define("getTeamsForTeamFeedPublishSelect", "ajax", {
            url: swconstants.serverUrl + "/api/teamfeedapi/getteamsforteamfeedpublishselect/?callback=?",
            dataType: "json",
            type: "GET"
        });

        amplify.request.define("getSystemAdministrators", "ajax", {
            url: swconstants.serverUrl + "/api/systemadministratorapi/getsystemadministrators/?callback=?",
            dataType: "json",
            type: "GET"
        });

        amplify.request.define("getMediaLiveStreamItem", "ajax", {
            url: swconstants.serverUrl + "/api/livestreamapi/getmedialivestreamitem/?livestreamid={liveStreamId}&callback=?",
            dataType: "json",
            type: "GET"
        });

        amplify.request.define("getMediaHighlightItem", "ajax", {
            url: swconstants.serverUrl + "/api/livestreamapi/getmediahighlightitem/?videoid={videoId}&callback=?",
            dataType: "json",
            type: "GET"
        });

        amplify.request.define("getGameVideoReplayDownloadLink", "ajax", {
            url: swconstants.serverUrl + "/api/gamevideoapi/getdownloadlink/?videoid={videoId}&callback=?",
            dataType: "json",
            type: "GET"
        });

        amplify.request.define("downloadVideo", "ajax", {
            url: swconstants.serverUrl + "/api/gamevideoapi/downloadvideo/?videoid={videoId}&callback=?",
            dataType: "json",
            type: "GET"
        });

        amplify.request.define("getLiveStreamDownloadLink", "ajax", {
            url: swconstants.serverUrl + "/api/livestreamapi/getdownloadlink/?livestreamid={liveStreamId}&callback=?",
            dataType: "json",
            type: "GET"
        });



        amplify.request.define("getLiveStreamVoucher", "ajax", {
            url: swconstants.serverUrl + "/api/livestreamapi/getlivestreamvoucher/?gameid={gameId}&code={code}&callback=?",
            dataType: "json",
            type: "GET"
        });

        amplify.request.define("getMemberActions", "ajax", {
            url: swconstants.serverUrl + "/api/memberapi/getmemberactions/?callback=?",
            dataType: "json",
            type: "GET"
        });

        amplify.request.define("initAdminPayouts", "ajax", {
            url: swconstants.serverUrl + "/api/adminpayoutsapi/initadminpayouts/?callback=?",
            dataType: "json",
            type: "GET"
        });

        amplify.request.define("getPaymentForEditView", "ajax", {
            url: swconstants.serverUrl + "/api/adminpayoutsapi/getpaymentforeditview/?paymentid={paymentId}&callback=?",
            dataType: "json",
            type: "GET"
        });        

        amplify.request.define("getClubPayoutRows", "ajax", {
            url: swconstants.serverUrl + "/api/adminpayoutsapi/getclubpayoutrows/?paymentid={paymentId}&leagueorganizerid={leagueOrganizerId}&callback=?",
            dataType: "json",
            type: "GET"
        });

        amplify.request.define("getTeamPayoutRows", "ajax", {
            url: swconstants.serverUrl + "/api/adminpayoutsapi/getteampayoutrows/?clubpaymentheaderid={clubPaymentHeaderId}&callback=?",
            dataType: "json",
            type: "GET"
        });        

        amplify.request.define("getMemberPayment", "ajax", {
            url: swconstants.serverUrl + "/api/adminmembersapi/getmemberpayment/?id={id}&callback=?",
            dataType: "json",
            type: "GET"
        });

        amplify.request.define("getMemberPayments", "ajax", {
            url: swconstants.serverUrl + "/api/adminmembersapi/getmemberpayments/?memberid={memberId}&callback=?",
            dataType: "json",
            type: "GET"
        });

        amplify.request.define("getMemberActionsFloorball", "ajax", {
            url: swconstants.serverUrl + "/api/memberapi/getmemberactionsfloorball/?callback=?",
            dataType: "json",
            type: "GET"
        });

        amplify.request.define("getMemberNotificationsForSelectList", "ajax", {
            url: swconstants.serverUrl + "/api/membernotificationapi/getmembernotificationsforselectlist/?lastnotificationid={lastNotificationId}&callback=?",
            dataType: "json",
            type: "GET"
        });

        amplify.request.define("setMemberNotificationStatus", "ajax", {
            url: swconstants.serverUrl + "/api/membernotificationapi/setmembernotificationstatus/?membernotificationid={memberNotificationId}&statusid={statusId}&callback=?",
            dataType: "json",
            type: "GET"
        });

        amplify.request.define("setFollowerRequestStatus", "ajax", {
            url: swconstants.serverUrl + "/api/teamapi/setfollowerrequeststatus/?followerrequestid={followerRequestId}&statusid={statusId}&callback=?",
            dataType: "json",
            type: "GET"
        });

        amplify.request.define("setPlayerRequestStatus", "ajax", {
            url: swconstants.serverUrl + "/api/teamapi/setplayerrequeststatus/?playerid={playerId}&statusid={statusId}&callback=?",
            dataType: "json",
            type: "GET"
        });

        amplify.request.define("setTeamStaffRequestStatus", "ajax", {
            url: swconstants.serverUrl + "/api/teamapi/setteamstaffrequeststatus/?teamstaffid={teamStaffId}&statusid={statusId}&callback=?",
            dataType: "json",
            type: "GET"
        });

        amplify.request.define("getTeamFeedItem", "ajax", {
            url: swconstants.serverUrl + "/api/teamfeedapi/getTeamFeedItem/?teamFeedItemID={teamFeedItemID}&teamFeedItemType={teamFeedItemType}&callback=?",
            dataType: "json",
            type: "GET"
        });

        amplify.request.define("getStreamStats", "ajax", {
            url: swconstants.serverUrl + "/api/livestreamapi/getstreamstats/?livestreamid={liveStreamId}&callback=?",
            dataType: "json",
            type: "GET"
        });

        amplify.request.define("getStreamSubscription", "ajax", {
            url: swconstants.serverUrl + "/api/livestreamapi/getstreamsubscription/?teamid={teamId}&callback=?",
            dataType: "json",
            type: "GET"
        });

        amplify.request.define("getStreamSubscriptionForGame", "ajax", {
            url: swconstants.serverUrl + "/api/livestreamapi/getstreamsubscriptionforgame/?gameid={gameId}&callback=?",
            dataType: "json",
            type: "GET"
        });

        amplify.request.define("getStreamSubscriptionForEvent", "ajax", {
            url: swconstants.serverUrl + "/api/livestreamapi/getstreamsubscriptionforevent/?eventid={eventId}&callback=?",
            dataType: "json",
            type: "GET"
        });

        amplify.request.define("getTeamSubscriptions", "ajax", {
            url: swconstants.serverUrl + "/api/livestreamapi/getteamsubscriptions/?teamid={teamId}&callback=?",
            dataType: "json",
            type: "GET"
        });      

        amplify.request.define("getSports", "ajax", {
            url: swconstants.serverUrl + "/api/sportapi?callback=?",
            dataType: "json",
            type: "GET"
        });

        amplify.request.define("getCreatedLeaguesForTeam", "ajax", {
            url: swconstants.serverUrl + "/api/gameapi/getcreatedleaguesforteam/?teamid={teamId}&callback=?",
            dataType: "json",
            type: "GET"
        });

        amplify.request.define("searchArenas", "ajax", {
            url: swconstants.serverUrl + "/api/arenaapi/searcharenasbysearchstring/?searchstring={searchString}&callback=?",
            dataType: "json",
            type: "GET"
        });

        amplify.request.define("searchClubs", "ajax", {
            url: swconstants.serverUrl + "/api/searchapi/searchclubs/?searchstring={searchString}&callback=?",
            dataType: "json",
            type: "GET"
        });

        amplify.request.define("getIncompleteTeamActionsForTeamPage", "ajax", {
            url: swconstants.serverUrl + "/api/teamactionapi/getincompleteteamactionsforteampage?teamid={teamId}&callback=?",
            dataType: "json",
            type: "GET"
        });

        amplify.request.define("getInterviewTemplate", "ajax", {
            url: swconstants.serverUrl + "/api/interviewadminapi/getinterviewtemplate?interviewtemplateid={interviewTemplateId}&callback=?",
            dataType: "json",
            type: "GET"
        });

        amplify.request.define("getInterviewTemplates", "ajax", {
            url: swconstants.serverUrl + "/api/interviewadminapi/getinterviewtemplates?callback=?",
            dataType: "json",
            type: "GET"
        });

        amplify.request.define("getSocialEntityLikesVC", "ajax", {
            url: swconstants.serverUrl + "/api/socialentitylikeapi/getsocialentitylikesvc/?socialentityid={Id}&callback=?",
            dataType: "json",
            type: "GET"
        });

        amplify.request.define("getSocialEntityViews", "ajax", {
            url: swconstants.serverUrl + "/api/socialentityviewapi/getsocialentityviews/?socialentityid={socialEntityId}&pageid={pageId}&pagesize={pageSize}&callback=?",
            dataType: "json",
            type: "GET"
        });       

        amplify.request.define("getSocialEntityComments", "ajax", {
            url: swconstants.serverUrl + "/api/socialentitycommentapi/getsocialentitycomments/?socialentityid={socialEntityId}&pageid={pageId}&pagesize={pageSize}&callback=?",
            dataType: "json",
            type: "GET"
        });               

        amplify.request.define("getGameDiscussionPost", "ajax", {
            url: swconstants.serverUrl + "/api/gamediscussionpostapi/getgamediscussionpost/?GameDiscussionPostID={Id}&callback=?",
            dataType: "json",
            type: "GET"
        });

        amplify.request.define("initGameAttendees", "ajax", {
            url: swconstants.serverUrl + "/api/followgameapi/initgameattendees?gameid={gameId}&callback=?",
            dataType: "json",
            type: "GET"
        });

        amplify.request.define("getGameAttendees", "ajax", {
            url: swconstants.serverUrl + "/api/followgameapi/getgameattendees?gameid={gameId}&gamecheckintypeid={gameCheckInTypeId}&pageid={pageId}&pagesize={pageSize}&callback=?",
            dataType: "json",
            type: "GET"
        });               

        amplify.request.define("getAttendeesForMagazineGameViewDetails", "ajax", {
            url: swconstants.serverUrl + "/api/magazineapi/getattendeesformagazinegameviewdetails?gameid={gameId}&memberid={memberId}&callback=?",
            dataType: "json",
            type: "GET"
        });

        amplify.request.define("getPicsAndVideosForMagazineGameViewDetails", "ajax", {
            url: swconstants.serverUrl + "/api/magazineapi/getpicsandvideosformagazinegameviewdetails?gameid={gameId}&memberid={memberId}&callback=?",
            dataType: "json",
            type: "GET"
        });

        amplify.request.define("getDiscussionPost", "ajax", {
            url: swconstants.serverUrl + "/api/discussionpostapi/?id={Id}&callback=?",
            dataType: "json",
            type: "GET"
        });

        amplify.request.define("getDiscussionPostForDetailsView", "ajax", {
            url: swconstants.serverUrl + "/api/discussionpostapi/getdiscussionpostfordetailsview?id={Id}&callback=?",
            dataType: "json",
            type: "GET"
        });

        amplify.request.define("getUnverifiedGamePosts", "ajax", {
            url: swconstants.serverUrl + "/api/gamediscussionpostapi/getunverifiedposts?gameid={gameId}&lastitemid={lastItemId}&amount={amount}&callback=?",
            dataType: "json",
            type: "GET"
        });       

        amplify.request.define("getPictureForDetailsView", "ajax", {
            url: swconstants.serverUrl + "/api/pictureapi/getpicturefordetailsview?id={Id}&callback=?",
            dataType: "json",
            type: "GET"
        });

        amplify.request.define("getVideoForDetailsView", "ajax", {
            url: swconstants.serverUrl + "/api/videoapi/getvideofordetailsview?id={Id}&callback=?",
            dataType: "json",
            type: "GET"
        });                

        amplify.request.define("getTeamHeaderInfo", "ajax", {
            url: swconstants.serverUrl + "/api/teamapi/getteamheaderinfo/?teamid={teamId}&callback=?",
            dataType: "json",
            type: "GET"
        });

        amplify.request.define("getTeamHeaderInfoForTeamSite", "ajax", {
            url: swconstants.serverUrl + "/api/teamapi/getteamheaderinfoforteamsite/?teamid={teamId}&callback=?",
            dataType: "json",
            type: "GET"
        });

        amplify.request.define("getTeamHeaderInfoWithMemberInfo", "ajax", {
            url: swconstants.serverUrl + "/api/teamapi/getteamheaderinfowithmemberinfo/?teamid={teamId}&callback=?",
            dataType: "json",
            type: "GET"
        });

        amplify.request.define("getTeamAdminHeaderInfo", "ajax", {
            url: swconstants.serverUrl + "/api/teamadminapi/getteamheaderinfo/?teamid={teamId}&callback=?",
            dataType: "json",
            type: "GET"
        });        

        amplify.request.define("getLeagueHeader", "ajax", {
            url: swconstants.serverUrl + "/api/leagueapi/getleagueheader/?leagueid={leagueId}&callback=?",
            dataType: "json",
            type: "GET",
            decoder: function (data, status, xhr, success, error) {
                if (xhr.status < 300) {
                    success(data);
                }
                else {
                    error(status, xhr);
                }
            }
        });

        amplify.request.define("initLeagueTable", "ajax", {
            url: swconstants.serverUrl + "/api/leagueapi/initleaguetable/?leagueid={leagueId}&callback=?",
            dataType: "json",
            type: "GET"
        });

        amplify.request.define("initStatisticsTable", "ajax", {
            url: swconstants.serverUrl + "/api/statisticstableapi/initstatisticstable/?itemid={itemId}&tabletype={tableType}&callback=?",
            dataType: "json",
            type: "GET"
        });        

        amplify.request.define("generateLeagueHighlights", "ajax", {
            url: swconstants.serverUrl + "/api/leagueapi/generateleaguehighlights/?leagueid={leagueId}&callback=?",
            dataType: "json",
            type: "GET"
        });        

        amplify.request.define("canCreateGameTeamRoster", "ajax", {
            url: swconstants.serverUrl + "/api/gameteamrosterapi/cancreategameteamroster/?gameid={gameId}&callback=?",
            dataType: "json",
            type: "GET"
        });        

        amplify.request.define("canCreateGameLineUp", "ajax", {
            url: swconstants.serverUrl + "/api/gamelineupapi/cancreategamelineup/?gameid={gameId}&teamid={teamId}&callback=?",
            dataType: "json",
            type: "GET"
        });        

        amplify.request.define("insertGameTeamRoster", "ajax", {
            url: swconstants.serverUrl + "/api/gameteamrosterapi/insertgameteamroster/?gameid={gameId}&teamid={teamId}&callback=?",
            dataType: "json",
            type: "GET"
        });                                

        amplify.request.define("getLeagueOrganizersForSelectList", "ajax", {
            url: swconstants.serverUrl + "/api/leagueorganizerapi/getleagueorganizersforselectlist/?callback=?",
            dataType: "json",
            type: "GET"
        });

        amplify.request.define("getLeagueOrganizers", "ajax", {
            url: swconstants.serverUrl + "/api/leagueorganizerapi/getleagueorganizers/?callback=?",
            dataType: "json",
            type: "GET",
            decoder: function (data, status, xhr, success, error) {
                if (xhr.status < 300) {
                    success(data);
                }
                else {
                    error(status, xhr);
                }
            }
        });

        amplify.request.define("initTeamSite", "ajax", {
            url: swconstants.serverUrl + "/api/teamapi/initteamsite/?teamid={teamId}&callback=?",
            dataType: "json",
            type: "GET",
            decoder: function (data, status, xhr, success, error) {
                if (xhr.status < 300) {
                    success(data);
                }
                else {
                    error(status, xhr);
                }
            }
        });        

        amplify.request.define("initTeamPicsAndVideos", "ajax", {
            url: swconstants.serverUrl + "/api/teamapi/initteampicsandvideos/?teamid={teamId}&callback=?",
            dataType: "json",
            type: "GET",
            decoder: function (data, status, xhr, success, error) {
                if (xhr.status < 300) {
                    success(data);
                }
                else {
                    error(status, xhr);
                }
            }
        });

        amplify.request.define("initLeagueSite", "ajax", {
            url: swconstants.serverUrl + "/api/leagueapi/initleaguesite/?leagueid={leagueId}&callback=?",
            dataType: "json",
            type: "GET",
            decoder: function (data, status, xhr, success, error) {
                if (xhr.status < 300) {
                    success(data);
                }
                else {
                    error(status, xhr);
                }
            }
        });

        amplify.request.define("initLeagueSiteFairPlayCards", "ajax", {
            url: swconstants.serverUrl + "/api/leagueapi/initleaguesitefairplaycards/?leagueid={leagueId}&amount={amount}&callback=?",
            dataType: "json",
            type: "GET",
            decoder: function (data, status, xhr, success, error) {
                if (xhr.status < 300) {
                    success(data);
                }
                else {
                    error(status, xhr);
                }
            }
        });

        amplify.request.define("initLeagueSitePicsAndVideos", "ajax", {
            url: swconstants.serverUrl + "/api/leagueapi/initleaguesitepicsandvideos/?leagueId={leagueId}&callback=?",
            dataType: "json",
            type: "GET",
            decoder: function (data, status, xhr, success, error) {
                if (xhr.status < 300) {
                    success(data);
                }
                else {
                    error(status, xhr);
                }
            }
        });

        amplify.request.define("initCompetitionsPage", "ajax", {
            url: swconstants.serverUrl + "/api/competitionsapi/initcompetitionspage/?callback=?",
            dataType: "json",
            type: "GET",
            decoder: function (data, status, xhr, success, error) {
                if (xhr.status < 300) {
                    success(data);
                }
                else {
                    error(status, xhr);
                }
            }
        });

        amplify.request.define("initPopular", "ajax", {
            url: swconstants.serverUrl + "/api/competitionsapi/initpopular/?callback=?",
            dataType: "json",
            type: "GET",
            decoder: function (data, status, xhr, success, error) {
                if (xhr.status < 300) {
                    success(data);
                }
                else {
                    error(status, xhr);
                }
            }
        });

        amplify.request.define("initDistricts", "ajax", {
            url: swconstants.serverUrl + "/api/competitionsapi/initdistricts/?callback=?",
            dataType: "json",
            type: "GET",
            decoder: function (data, status, xhr, success, error) {
                if (xhr.status < 300) {
                    success(data);
                }
                else {
                    error(status, xhr);
                }
            }
        });   


        amplify.request.define("initBrowseLeagues", "ajax", {
            url: swconstants.serverUrl + "/api/competitionsapi/initbrowseleagues/?callback=?",
            dataType: "json",
            type: "GET",
            decoder: function (data, status, xhr, success, error) {
                if (xhr.status < 300) {
                    success(data);
                }
                else {
                    error(status, xhr);
                }
            }
        });  

        amplify.request.define("initUpcomingEvents", "ajax", {
            url: swconstants.serverUrl + "/api/competitionsapi/initupcomingevents/?callback=?",
            dataType: "json",
            type: "GET",
            decoder: function (data, status, xhr, success, error) {
                if (xhr.status < 300) {
                    success(data);
                }
                else {
                    error(status, xhr);
                }
            }
        });  

        amplify.request.define("initCurrentEvents", "ajax", {
            url: swconstants.serverUrl + "/api/competitionsapi/initcurrentevents/?callback=?",
            dataType: "json",
            type: "GET",
            decoder: function (data, status, xhr, success, error) {
                if (xhr.status < 300) {
                    success(data);
                }
                else {
                    error(status, xhr);
                }
            }
        });  

        amplify.request.define("initPastEvents", "ajax", {
            url: swconstants.serverUrl + "/api/competitionsapi/initpastevents/?callback=?",
            dataType: "json",
            type: "GET",
            decoder: function (data, status, xhr, success, error) {
                if (xhr.status < 300) {
                    success(data);
                }
                else {
                    error(status, xhr);
                }
            }
        });  

        amplify.request.define("initCompetitions", "ajax", {
            url: swconstants.serverUrl + "/api/competitionsapi/initcompetitions/?callback=?",
            dataType: "json",
            type: "GET",
            decoder: function (data, status, xhr, success, error) {
                if (xhr.status < 300) {
                    success(data);
                }
                else {
                    error(status, xhr);
                }
            }
        });
        
        amplify.request.define("initCompetitionEvents", "ajax", {
            url: swconstants.serverUrl + "/api/competitionsapi/initcompetitionevents/?callback=?",
            dataType: "json",
            type: "GET",
            decoder: function (data, status, xhr, success, error) {
                if (xhr.status < 300) {
                    success(data);
                }
                else {
                    error(status, xhr);
                }
            }
        });

        amplify.request.define("initCompetition", "ajax", {
            url: swconstants.serverUrl + "/api/competitionapi/initcompetition/?id={competitionId}&callback=?",
            dataType: "json",
            type: "GET",
            decoder: function (data, status, xhr, success, error) {
                if (xhr.status < 300) {
                    success(data);
                }
                else {
                    error(status, xhr);
                }
            }
        });

        amplify.request.define("initCompetitionFixtures", "ajax", {
            url: swconstants.serverUrl + "/api/competitionapi/initcompetitionfixtures/?id={competitionId}&callback=?",
            dataType: "json",
            type: "GET",            
        });

        amplify.request.define("initCompetitionTable", "ajax", {
            url: swconstants.serverUrl + "/api/competitionapi/initcompetitiontable/?id={competitionId}&callback=?",
            dataType: "json",
            type: "GET",
        });

        amplify.request.define("getCompetitionGames", "ajax", {
            url: swconstants.serverUrl + "/api/competitionapi/getgames/?leagueid={leagueId}&lastgameid={lastGameId}&roundid={roundId}&callback=?",
            dataType: "json",
            type: "GET",
        });

        amplify.request.define("getCompetitionTeams", "ajax", {
            url: swconstants.serverUrl + "/api/competitionapi/getteams/?id={competitionId}&callback=?",
            dataType: "json",
            type: "GET",
        });
        
        amplify.request.define("getPicturesForTeam", "ajax", {
            url: swconstants.serverUrl + "/api/teamapi/getpictures/?teamid={teamId}&amount={amount}&lastPictureId={lastPictureId}&callback=?",
            dataType: "json",
            type: "GET"
        });

        amplify.request.define("getVideosForTeam", "ajax", {
            url: swconstants.serverUrl + "/api/teamapi/getvideos/?teamid={teamId}&amount={amount}&lastVideoId={lastVideoId}&callback=?",
            dataType: "json",
            type: "GET"
        });

        amplify.request.define("getLeaguePictures", "ajax", {
            url: swconstants.serverUrl + "/api/leagueapi/getpictures/?leagueId={leagueId}&amount={amount}&lastPictureId={lastPictureId}&callback=?",
            dataType: "json",
            type: "GET"
        });

        amplify.request.define("getLeagueVideos", "ajax", {
            url: swconstants.serverUrl + "/api/leagueapi/getvideos/?leagueId={leagueId}&amount={amount}&lastVideoId={lastVideoId}&callback=?",
            dataType: "json",
            type: "GET"
        });
        
        amplify.request.define("initHighlightsForLeagueSite", "ajax", {
            url: swconstants.serverUrl + "/api/leagueapi/inithighlightsforleaguesite/?leagueid={leagueId}&callback=?",
            dataType: "json",
            type: "GET"
        });

        amplify.request.define("getHighlightsForLeagueSite", "ajax", {
            url: swconstants.serverUrl + "/api/leagueapi/gethighlightsforleaguesite/?leagueid={leagueId}&amount={amount}&lastvideoid={lastVideoId}&callback=?",
            dataType: "json",
            type: "GET"
        });

        amplify.request.define("getHighlightForLeagueSite", "ajax", {
            url: swconstants.serverUrl + "/api/leagueapi/gethighlightforleaguesite/?leagueid={leagueId}&videoid={videoId}&callback=?",
            dataType: "json",
            type: "GET"
        });        

        amplify.request.define("getHighlightsForMember", "ajax", {
            url: swconstants.serverUrl + "/api/highlightapi/getlatesthighlightsformember?callback=?",
            dataType: "json",
            type: "GET"
        });        

        amplify.request.define("getLeagueOrganizerHeader", "ajax", {
            url: swconstants.serverUrl + "/api/leagueorganizerapi/getleagueorganizerheader/?leagueOrganizerId={leagueOrganizerId}&callback=?",
            dataType: "json",
            type: "GET",
            decoder: function (data, status, xhr, success, error) {
                if (xhr.status < 300) {
                    success(data);
                }
                else {
                    error(status, xhr);
                }
            }
        });                

        amplify.request.define("unfollowTeam", "ajax", {
            url: swconstants.serverUrl + "/api/teamapi/unfollowteam/?teamid={teamId}&callback=?",
            dataType: "json",
            type: "POST",
            contentType: 'application/json; charset=utf-8'
        });

        amplify.request.define("followLeague", "ajax", {
            url: swconstants.serverUrl + "/api/leagueapi/followleague/?leagueid={leagueId}&callback=?",
            dataType: "json",
            type: "POST",
            contentType: 'application/json; charset=utf-8'
        });

        amplify.request.define("unfollowLeague", "ajax", {
            url: swconstants.serverUrl + "/api/leagueapi/unfollowleague/?leagueid={leagueId}&callback=?",
            dataType: "json",
            type: "POST",
            contentType: 'application/json; charset=utf-8'
        });

        amplify.request.define("publishLiveStream", "ajax", {
            url: swconstants.serverUrl + "/api/livestreamapi/publishlivestream/?livestreamid={liveStreamId}&callback=?",
            dataType: "json",
            type: "POST",
            contentType: 'application/json; charset=utf-8'
        });        

        amplify.request.define("initLeagueOrganizerSite", "ajax", {
            url: swconstants.serverUrl + "/api/leagueorganizerapi/initleagueorganizersite/?leagueOrganizerId={leagueOrganizerId}&callback=?",
            dataType: "json",
            type: "GET",
            decoder: function (data, status, xhr, success, error) {
                if (xhr.status < 300) {
                    success(data);
                }
                else {
                    error(status, xhr);
                }
            }
        });             

        amplify.request.define("initLeagueOrganizerSitePicsAndVideos", "ajax", {
            url: swconstants.serverUrl + "/api/leagueorganizerapi/initleagueorganizersitepicsandvideos/?leagueOrganizerId={leagueOrganizerId}&callback=?",
            dataType: "json",
            type: "GET",
            decoder: function (data, status, xhr, success, error) {
                if (xhr.status < 300) {
                    success(data);
                }
                else {
                    error(status, xhr);
                }
            }
        });

        amplify.request.define("initLeagueOrganizerSiteGameResultGuessStandings", "ajax", {
            url: swconstants.serverUrl + "/api/leagueorganizerapi/initleagueorganizersitegameresultguessstandings/?leagueorganizerid={leagueOrganizerId}&callback=?",
            dataType: "json",
            type: "GET",
            decoder: function (data, status, xhr, success, error) {
                if (xhr.status < 300) {
                    success(data);
                }
                else {
                    error(status, xhr);
                }
            }
        });

        amplify.request.define("initLeagueOrganizerTournamentGroups", "ajax", {
            url: swconstants.serverUrl + "/api/leagueorganizerapi/initleagueorganizertournamentgroups/?leagueorganizerid={leagueOrganizerId}&callback=?",
            dataType: "json",
            type: "GET",
            decoder: function (data, status, xhr, success, error) {
                if (xhr.status < 300) {
                    success(data);
                }
                else {
                    error(status, xhr);
                }
            }
        });        

        amplify.request.define("initLeagueOrganizerSiteFairPlayCards", "ajax", {
            url: swconstants.serverUrl + "/api/leagueorganizerapi/initleagueorganizersitefairplaycards/?leagueOrganizerId={leagueOrganizerId}&amount={amount}&callback=?",
            dataType: "json",
            type: "GET",
            decoder: function (data, status, xhr, success, error) {
                if (xhr.status < 300) {
                    success(data);
                }
                else {
                    error(status, xhr);
                }
            }
        });

        amplify.request.define("initLeagueOrganizerFinalStandings", "ajax", {
            url: swconstants.serverUrl + "/api/leagueorganizerapi/initleagueorganizerfinalstandings/?leagueOrganizerId={leagueOrganizerId}&callback=?",
            dataType: "json",
            type: "GET",
            decoder: function (data, status, xhr, success, error) {
                if (xhr.status < 300) {
                    success(data);
                }
                else {
                    error(status, xhr);
                }
            }
        });

        amplify.request.define("initLeagueOrganizerPlayerStatistics", "ajax", {
            url: swconstants.serverUrl + "/api/leagueorganizerapi/initleagueorganizerplayerstatistics/?leagueOrganizerId={leagueOrganizerId}&callback=?",
            dataType: "json",
            type: "GET",
            decoder: function (data, status, xhr, success, error) {
                if (xhr.status < 300) {
                    success(data);
                }
                else {
                    error(status, xhr);
                }
            }
        });        

        amplify.request.define("initLeagueOrganizerPartners", "ajax", {
            url: swconstants.serverUrl + "/api/leagueorganizerapi/initleagueorganizerpartners/?leagueOrganizerId={leagueOrganizerId}&callback=?",
            dataType: "json",
            type: "GET",
            decoder: function (data, status, xhr, success, error) {
                if (xhr.status < 300) {
                    success(data);
                }
                else {
                    error(status, xhr);
                }
            }
        });

        amplify.request.define("initPartnerAdmin", "ajax", {
            url: swconstants.serverUrl + "/api/partneradminapi/initpartneradmin/?callback=?",
            dataType: "json",
            type: "GET",
            decoder: function (data, status, xhr, success, error) {
                if (xhr.status < 300) {
                    success(data);
                }
                else {
                    error(status, xhr);
                }
            }
        });  

        amplify.request.define("initPartnerFeatureSet", "ajax", {
            url: swconstants.serverUrl + "/api/partneradminapi/initpartnerfeatureset/?id={id}&callback=?",
            dataType: "json",
            type: "GET",
            decoder: function (data, status, xhr, success, error) {
                if (xhr.status < 300) {
                    success(data);
                }
                else {
                    error(status, xhr);
                }
            }
        });

        amplify.request.define("initPartnerPackage", "ajax", {
            url: swconstants.serverUrl + "/api/partneradminapi/initpartnerpackage/?id={id}&callback=?",
            dataType: "json",
            type: "GET",
            decoder: function (data, status, xhr, success, error) {
                if (xhr.status < 300) {
                    success(data);
                }
                else {
                    error(status, xhr);
                }
            }
        });

        amplify.request.define("initLeagueOrganizerLeaguesVC", "ajax", {
            url: swconstants.serverUrl + "/api/leagueorganizerapi/initleagueorganizerleaguesvc/?leagueOrganizerId={leagueOrganizerId}&callback=?",
            dataType: "json",
            type: "GET",
            decoder: function (data, status, xhr, success, error) {
                if (xhr.status < 300) {
                    success(data);
                }
                else {
                    error(status, xhr);
                }
            }
        });

        amplify.request.define("initLeagueOrganizerLeaguesWithCategories", "ajax", {
            url: swconstants.serverUrl + "/api/leagueorganizerapi/initleagueorganizerleagueswithcategories/?leagueOrganizerId={leagueOrganizerId}&callback=?",
            dataType: "json",
            type: "GET",
            decoder: function (data, status, xhr, success, error) {
                if (xhr.status < 300) {
                    success(data);
                }
                else {
                    error(status, xhr);
                }
            }
        });
        
        amplify.request.define("initAddMemberGuardians", "ajax", {
            url: swconstants.serverUrl + "/api/teamadminapi/initaddmemberguardians/?teamid={teamId}&memberid={memberId}&callback=?",
            dataType: "json",
            type: "GET",
            decoder: function (data, status, xhr, success, error) {
                if (xhr.status < 300) {
                    success(data);
                }
                else {
                    error(status, xhr);
                }
            }
        });

        amplify.request.define("initGameForEditView", "ajax", {
            url: swconstants.serverUrl + "/api/gameapi/initgameforeditview/?teamid={teamId}&gameid={gameId}&callback=?",
            dataType: "json",
            type: "GET",
            decoder: function (data, status, xhr, success, error) {
                if (xhr.status < 300) {
                    success(data);
                }
                else {
                    error(status, xhr);
                }
            }
        });

        amplify.request.define("initInfoItemForEditView", "ajax", {
            url: swconstants.serverUrl + "/api/infoitemapi/initinfoitemforeditview/?infoitemtype={infoItemType}&itemid={itemId}&callback=?",
            dataType: "json",
            type: "GET",
            decoder: function (data, status, xhr, success, error) {
                if (xhr.status < 300) {
                    success(data);
                }
                else {
                    error(status, xhr);
                }
            }
        });              

        amplify.request.define("initLeagueOrganizerInfoItems", "ajax", {
            url: swconstants.serverUrl + "/api/leagueorganizerapi/initleagueorganizerinfoitems/?leagueorganizerid={leagueOrganizerId}&callback=?",
            dataType: "json",
            type: "GET",
            decoder: function (data, status, xhr, success, error) {
                if (xhr.status < 300) {
                    success(data);
                }
                else {
                    error(status, xhr);
                }
            }
        });

        amplify.request.define("initLeagueOrganizerPlayPage", "ajax", {
            url: swconstants.serverUrl + "/api/leagueorganizerapi/initleagueorganizerplaypage/?leagueorganizerid={leagueOrganizerId}&callback=?",
            dataType: "json",
            type: "GET",
            decoder: function (data, status, xhr, success, error) {
                if (xhr.status < 300) {
                    success(data);
                }
                else {
                    error(status, xhr);
                }
            }
        });

        amplify.request.define("initLeaguePlayPage", "ajax", {
            url: swconstants.serverUrl + "/api/leagueapi/initplaypage/?leagueid={leagueId}&callback=?",
            dataType: "json",
            type: "GET",
            decoder: function (data, status, xhr, success, error) {
                if (xhr.status < 300) {
                    success(data);
                }
                else {
                    error(status, xhr);
                }
            }
        });

        amplify.request.define("initClubPlayPage", "ajax", {
            url: swconstants.serverUrl + "/api/clubapi/initplaypage/?clubid={clubId}&callback=?",
            dataType: "json",
            type: "GET",
            decoder: function (data, status, xhr, success, error) {
                if (xhr.status < 300) {
                    success(data);
                }
                else {
                    error(status, xhr);
                }
            }
        });

        amplify.request.define("initTeamPlayPage", "ajax", {
            url: swconstants.serverUrl + "/api/teamapi/initplaypage/?teamid={teamId}&callback=?",
            dataType: "json",
            type: "GET",
            decoder: function (data, status, xhr, success, error) {
                if (xhr.status < 300) {
                    success(data);
                }
                else {
                    error(status, xhr);
                }
            }
        });

        amplify.request.define("initClubInfoItems", "ajax", {
            url: swconstants.serverUrl + "/api/clubapi/initclubinfoitems/?clubid={clubId}&callback=?",
            dataType: "json",
            type: "GET",
            decoder: function (data, status, xhr, success, error) {
                if (xhr.status < 300) {
                    success(data);
                }
                else {
                    error(status, xhr);
                }
            }
        });

        amplify.request.define("initTeamInfoItems", "ajax", {
            url: swconstants.serverUrl + "/api/teamapi/initteaminfoitems/?teamid={teamId}&callback=?",
            dataType: "json",
            type: "GET",
            decoder: function (data, status, xhr, success, error) {
                if (xhr.status < 300) {
                    success(data);
                }
                else {
                    error(status, xhr);
                }
            }
        });

        amplify.request.define("initTipInfoItems", "ajax", {
            url: swconstants.serverUrl + "/api/tipapi/initinfoitems/?callback=?",
            dataType: "json",
            type: "GET",
            decoder: function (data, status, xhr, success, error) {
                if (xhr.status < 300) {
                    success(data);
                }
                else {
                    error(status, xhr);
                }
            }
        });

        amplify.request.define("searchFairPlayCards", "ajax", {
            url: swconstants.serverUrl + "/api/fairplaycardapi/searchfairplaycards/?leagueorganizerid={leagueOrganizerId}&searchstring={searchString}&amount={amount}&lastfairplaycardid={lastFairPlayCardID}&callback=?",
            dataType: "json",
            type: "GET",
            decoder: function (data, status, xhr, success, error) {
                if (xhr.status < 300) {
                    success(data);
                }
                else {
                    error(status, xhr);
                }
            }
        });

        amplify.request.define("searchLeagueFairPlayCards", "ajax", {
            url: swconstants.serverUrl + "/api/fairplaycardapi/searchleaguefairplaycards/?leagueid={leagueId}&searchstring={searchString}&amount={amount}&lastfairplaycardid={lastFairPlayCardID}&callback=?",
            dataType: "json",
            type: "GET",
            decoder: function (data, status, xhr, success, error) {
                if (xhr.status < 300) {
                    success(data);
                }
                else {
                    error(status, xhr);
                }
            }
        });

        amplify.request.define("searchRefereesBySearchString", "ajax", {
            url: swconstants.serverUrl + "/api/refereeapi/searchrefereesbysearchstring/?searchstring={searchString}&callback=?",
            dataType: "json",
            type: "GET",
            decoder: function (data, status, xhr, success, error) {
                if (xhr.status < 300) {
                    success(data);
                }
                else {
                    error(status, xhr);
                }
            }
        });        

        amplify.request.define("getFairPlayCardsForLeagueOrganizerSite", "ajax", {
            url: swconstants.serverUrl + "/api/leagueorganizerapi/getfairplaycardsforleagueorganizersite/?leagueOrganizerId={leagueOrganizerId}&amount={amount}&lastFairPlayCardId={lastFairPlayCardId}&callback=?",
            dataType: "json",
            type: "GET",
            decoder: function (data, status, xhr, success, error) {
                if (xhr.status < 300) {
                    success(data);
                }
                else {
                    error(status, xhr);
                }
            }
        });

        amplify.request.define("getFairPlayCardsForLeagueSite", "ajax", {
            url: swconstants.serverUrl + "/api/leagueapi/getfairplaycardsforleaguesite/?leagueId={leagueId}&amount={amount}&lastFairPlayCardId={lastFairPlayCardId}&callback=?",
            dataType: "json",
            type: "GET",
            decoder: function (data, status, xhr, success, error) {
                if (xhr.status < 300) {
                    success(data);
                }
                else {
                    error(status, xhr);
                }
            }
        });        

        amplify.request.define("getLeagueOrganizerFairPlayCardSettings", "ajax", {
            url: swconstants.serverUrl + "/api/leagueorganizerapi/getleagueorganizerfairplaycardsettings?leagueOrganizerId={leagueOrganizerId}&callback=?",
            dataType: "json",
            type: "GET",
            decoder: function (data, status, xhr, success, error) {
                if (xhr.status < 300) {
                    success(data);
                }
                else {
                    error(status, xhr);
                }
            }
        });

        amplify.request.define("getPicturesForLeagueOrganizer", "ajax", {
            url: swconstants.serverUrl + "/api/leagueorganizerapi/getpictures/?leagueorganizerid={leagueOrganizerId}&amount={amount}&lastPictureId={lastPictureId}&callback=?",
            dataType: "json",
            type: "GET"
        });

        amplify.request.define("getVideosForLeagueOrganizer", "ajax", {
            url: swconstants.serverUrl + "/api/leagueorganizerapi/getvideos/?leagueorganizerid={leagueOrganizerId}&amount={amount}&lastVideoId={lastVideoId}&callback=?",
            dataType: "json",
            type: "GET"
        });

        amplify.request.define("getHighlightsForLeagueOrganizer", "ajax", {
            url: swconstants.serverUrl + "/api/leagueorganizerapi/gethighlights/?leagueorganizerid={leagueOrganizerId}&amount={amount}&lastgameid={lastGameId}&callback=?",
            dataType: "json",
            type: "GET"
        });

        amplify.request.define("getReplaysForLeagueOrganizer", "ajax", {
            url: swconstants.serverUrl + "/api/leagueorganizerapi/getreplays/?leagueorganizerid={leagueOrganizerId}&amount={amount}&lastgameid={lastGameId}&callback=?",
            dataType: "json",
            type: "GET"
        });        

        amplify.request.define("getPlannedGamesForLeagueOrganizer", "ajax", {
            url: swconstants.serverUrl + "/api/leagueorganizerapi/getplannedlivestreams/?leagueorganizerid={leagueOrganizerId}&amount={amount}&lastgameid={lastGameId}&callback=?",
            dataType: "json",
            type: "GET"
        });                

        amplify.request.define("getLiveGamesForLeagueOrganizer", "ajax", {
            url: swconstants.serverUrl + "/api/leagueorganizerapi/getlivegames/?leagueorganizerid={leagueOrganizerId}&amount={amount}&lastgameid={lastGameId}&callback=?",
            dataType: "json",
            type: "GET"
        });    

        amplify.request.define("getHighlightsForLeague", "ajax", {
            url: swconstants.serverUrl + "/api/leagueapi/gethighlights/?leagueid={leagueId}&amount={amount}&lastgameid={lastGameId}&callback=?",
            dataType: "json",
            type: "GET"
        });

        amplify.request.define("getReplaysForLeague", "ajax", {
            url: swconstants.serverUrl + "/api/leagueapi/getreplays/?leagueid={leagueId}&amount={amount}&lastgameid={lastGameId}&callback=?",
            dataType: "json",
            type: "GET"
        });

        amplify.request.define("getPlannedGamesForLeague", "ajax", {
            url: swconstants.serverUrl + "/api/leagueapi/getplannedlivestreams/?leagueid={leagueId}&amount={amount}&lastgameid={lastGameId}&callback=?",
            dataType: "json",
            type: "GET"
        });

        amplify.request.define("getLiveGamesForLeague", "ajax", {
            url: swconstants.serverUrl + "/api/leagueapi/getlivegames/?leagueid={leagueId}&amount={amount}&lastgameid={lastGameId}&callback=?",
            dataType: "json",
            type: "GET"
        });  

        amplify.request.define("getHighlightsForClub", "ajax", {
            url: swconstants.serverUrl + "/api/clubapi/gethighlights/?clubid={clubId}&amount={amount}&lastgameid={lastGameId}&callback=?",
            dataType: "json",
            type: "GET"
        });

        amplify.request.define("getReplaysForClub", "ajax", {
            url: swconstants.serverUrl + "/api/clubapi/getreplays/?clubid={clubId}&amount={amount}&lastgameid={lastGameId}&callback=?",
            dataType: "json",
            type: "GET"
        });

        amplify.request.define("getPlannedGamesForClub", "ajax", {
            url: swconstants.serverUrl + "/api/clubapi/getplannedlivestreams/?clubid={clubId}&amount={amount}&lastgameid={lastGameId}&callback=?",
            dataType: "json",
            type: "GET"
        });

        amplify.request.define("getLiveGamesForClub", "ajax", {
            url: swconstants.serverUrl + "/api/clubapi/getlivegames/?clubid={clubId}&amount={amount}&lastgameid={lastGameId}&callback=?",
            dataType: "json",
            type: "GET"
        });  


        amplify.request.define("getHighlightsForTeam", "ajax", {
            url: swconstants.serverUrl + "/api/teamapi/gethighlights/?teamid={teamId}&amount={amount}&lastgameid={lastGameId}&callback=?",
            dataType: "json",
            type: "GET"
        });

        amplify.request.define("getReplaysForTeam", "ajax", {
            url: swconstants.serverUrl + "/api/teamapi/getreplays/?teamid={teamId}&amount={amount}&lastgameid={lastGameId}&callback=?",
            dataType: "json",
            type: "GET"
        });

        amplify.request.define("getPlannedGamesForTeam", "ajax", {
            url: swconstants.serverUrl + "/api/teamapi/getplannedlivestreams/?teamid={teamId}&amount={amount}&lastgameid={lastGameId}&callback=?",
            dataType: "json",
            type: "GET"
        });

        amplify.request.define("getLiveGamesForTeam", "ajax", {
            url: swconstants.serverUrl + "/api/teamapi/getlivegames/?teamid={teamId}&amount={amount}&lastgameid={lastGameId}&callback=?",
            dataType: "json",
            type: "GET"
        });  


        amplify.request.define("getLeagueOrganizerTeamsAdmin", "ajax", {
            url: swconstants.serverUrl + "/api/leagueorganizeradminapi/getleagueorganizerteamsadmin/?leagueid={leagueId}&callback=?",
            dataType: "json",
            type: "GET"
        });

        amplify.request.define("getLeagueOrganizerLeagues", "ajax", {
            url: swconstants.serverUrl + "/api/leagueorganizerapi/getleagueorganizerleagues/?leagueorganizerid={leagueOrganizerId}&genderid={genderId}&seasonid={seasonId}&searchfield={searchField}&callback=?",
            dataType: "json",
            type: "GET"
        });

        amplify.request.define("getLeagueOrganizerLeagueCategories", "ajax", {
            url: swconstants.serverUrl + "/api/leagueorganizerapi/getleagueorganizerleaguecategories/?leagueorganizerId={leagueOrganizerId}&genderid={genderId}&seasonid={seasonId}&searchfield={searchField}&callback=?",
            dataType: "json",
            type: "GET"
        });        

        amplify.request.define("getLeagueCategoriesBySeasonId", "ajax", {
            url: swconstants.serverUrl + "/api/leagueorganizerapi/getleaguecategoriesbyseasonid/?leagueorganizerId={leagueOrganizerId}&seasonid={seasonId}&callback=?",
            dataType: "json",
            type: "GET"
        });                

        amplify.request.define("getPlayerStatisticsForLeagueOrganizer", "ajax", {
            url: swconstants.serverUrl + "/api/leagueorganizerapi/getplayerstatisticsforleagueorganizer/?leagueorganizerId={leagueOrganizerId}&pageid={pageId}&pagesize={pageSize}&column={column}&callback=?",
            dataType: "json",
            type: "GET"
        });        

        amplify.request.define("getGoalieStatisticsForLeagueOrganizer", "ajax", {
            url: swconstants.serverUrl + "/api/leagueorganizerapi/getgoaliestatisticsforleagueorganizer/?leagueorganizerId={leagueOrganizerId}&pageid={pageId}&pagesize={pageSize}&column={column}&callback=?",
            dataType: "json",
            type: "GET"
        });        

        amplify.request.define("getLeagueOrganizerLeaguesForAdminList", "ajax", {
            url: swconstants.serverUrl + "/api/leagueorganizerapi/getleagueorganizerleaguesforadminlist/?leagueorganizerid={leagueOrganizerId}&seasonid={seasonId}&callback=?",
            dataType: "json",
            type: "GET"
        });

        amplify.request.define("getLeagueOrganizerClubsForAdminList", "ajax", {
            url: swconstants.serverUrl + "/api/leagueorganizeradminapi/getleagueorganizerclubs/?leagueorganizerid={leagueOrganizerId}&seasonid={seasonId}&callback=?",
            dataType: "json",
            type: "GET"
        });

        amplify.request.define("getLeagueOrganizerDistrictsForAdminList", "ajax", {
            url: swconstants.serverUrl + "/api/leagueorganizeradminapi/getleagueorganizerdistricts/?seasonid={seasonId}&callback=?",
            dataType: "json",
            type: "GET"
        });

        amplify.request.define("getLeagueOrganizerClubs", "ajax", {
            url: swconstants.serverUrl + "/api/leagueorganizerapi/getleagueorganizerclubs/?leagueOrganizerId={leagueOrganizerId}&callback=?",
            dataType: "json",
            type: "GET",
            decoder: function (data, status, xhr, success, error) {
                if (xhr.status < 300) {
                    success(data);
                }
                else {
                    error(status, xhr);
                }
            }
        });

        amplify.request.define("initWidgetMagazineWebVc", "ajax", {
            url: swconstants.serverUrl + "/api/widgetapi/initwidgetmagazinewebvc/?widgetId={widgetId}&callback=?",
            dataType: "json",
            type: "GET",
            decoder: function (data, status, xhr, success, error) {
                if (xhr.status < 300) {
                    success(data);
                }
                else {
                    error(status, xhr);
                }
            }
        });

        amplify.request.define("initTeamConnectRoleVC", "ajax", {
            url: swconstants.serverUrl + "/api/teamconnectapi/initteamconnectrolevc/?memberid={memberId}&sportid={sportId}&teamid={teamId}&callback=?",
            dataType: "json",
            type: "GET"
        });

        amplify.request.define("initTeamConnectRoleRelationVC", "ajax", {
            url: swconstants.serverUrl + "/api/teamconnectapi/initteamconnectrolerelationvc/?teamid={teamId}&callback=?",
            dataType: "json",
            type: "GET"
        });

        amplify.request.define("initGameRequest", "ajax", {
            url: swconstants.serverUrl + "/api/gameapi/initgamerequest/?gameteamrequestid={id}&callback=?",
            dataType: "json",
            type: "GET"
        });        

        amplify.request.define("inviteAllTeamMembers", "ajax", {
            url: swconstants.serverUrl + "/api/teamadminapi/inviteallteammembers/?teamid={teamId}&callback=?",
            dataType: "json",
            type: "GET"
        });

        amplify.request.define("sendLeagueTeamInfoEmails", "ajax", {
            url: swconstants.serverUrl + "/api/leagueteaminviteapi/sendleagueteaminfoemails/?leagueOrganizerId={leagueOrganizerId}&seasonid={seasonId}&callback=?",
            dataType: "json",
            type: "GET"
        });

        amplify.request.define("sendLeagueTeamInviteEmails", "ajax", {
            url: swconstants.serverUrl + "/api/leagueteaminviteapi/sendLeagueTeamInviteEmails/?leagueOrganizerId={leagueOrganizerId}&seasonid={seasonId}&isreminder={isReminder}&callback=?",
            dataType: "json",
            type: "GET"
        });

        amplify.request.define("sendLeagueTeamInviteEmailsFutsal", "ajax", {
            url: swconstants.serverUrl + "/api/leagueteaminviteapi/sendLeagueTeamInviteEmailsFutsal/?leagueOrganizerId={leagueOrganizerId}&seasonid={seasonId}&isreminder={isReminder}&callback=?",
            dataType: "json",
            type: "GET"
        });

        amplify.request.define("sendLeagueTeamInviteSMS", "ajax", {
            url: swconstants.serverUrl + "/api/leagueteaminviteapi/sendLeagueTeamInviteSMS/?leagueOrganizerId={leagueOrganizerId}&seasonid={seasonId}&isreminder={isReminder}&callback=?",
            dataType: "json",
            type: "GET"
        });

        amplify.request.define("sendClubAdminEmails", "ajax", {
            url: swconstants.serverUrl + "/api/clubadminapi/sendClubAdminEmails/?leagueOrganizerId={leagueOrganizerId}&seasonid={seasonId}&isreminder={isReminder}&callback=?",
            dataType: "json",
            type: "GET"
        });

        amplify.request.define("sendRefereeInviteEmails", "ajax", {
            url: swconstants.serverUrl + "/api/refereeapi/sendRefereeInviteEmails/?leagueOrganizerId={leagueOrganizerId}&seasonid={seasonId}&isreminder={isReminder}&callback=?",
            dataType: "json",
            type: "GET"
        });

        amplify.request.define("dismissTeamAction", "ajax", {
            url: swconstants.serverUrl + "/api/teamactionapi/dismissteamaction/?teamactionid={teamActionId}&callback=?",
            dataType: "json",
            type: "GET"
        });

        amplify.request.define("setTeamActionStatusCompleted", "ajax", {
            url: swconstants.serverUrl + "/api/teamactionapi/setTeamActionStatusCompleted/?teamActionId={teamActionId}&callback=?",
            dataType: "json",
            type: "GET"
        });

        amplify.request.define("initMain", "ajax", {
            url: swconstants.serverUrl + "/api/mainviewapi/initmain/?callback=?",
            dataType: "json",
            type: "GET",
            decoder: function (data, status, xhr, success, error) {
                if (xhr.status < 300) {
                    success(data);
                }
                else {
                    error(status, xhr);
                }
            }
        });

        amplify.request.define("initMainHeader", "ajax", {
            url: swconstants.serverUrl + "/api/mainviewapi/initmainheader/?callback=?",
            dataType: "json",
            type: "GET",
            decoder: function (data, status, xhr, success, error) {
                if (xhr.status < 300) {
                    success(data);
                }
                else {
                    error(status, xhr);
                }
            }
        });

        amplify.request.define("initAdminHeader", "ajax", {
            url: swconstants.serverUrl + "/api/adminapi/initadminheader/?callback=?",
            dataType: "json",
            type: "GET",
            decoder: function (data, status, xhr, success, error) {
                if (xhr.status < 300) {
                    success(data);
                }
                else {
                    error(status, xhr);
                }
            }
        });

        amplify.request.define("initDiscoverFeed", "ajax", {
            url: swconstants.serverUrl + "/api/magazineapi/initdiscoverfeed/?categoryid={categoryId}&subcategoryid={subCategoryId}&callback=?",
            dataType: "json",
            type: "GET",
            decoder: function (data, status, xhr, success, error) {
                if (xhr.status < 300) {
                    success(data);
                }
                else {
                    error(status, xhr);
                }
            }
        });

        amplify.request.define("initMemberInviteVc", "ajax", {
            url: swconstants.serverUrl + "/api/memberinviteapi/initmemberinvitevc/?&memberid={memberId}&callback=?",
            dataType: "json",
            type: "GET"
        });

        amplify.request.define("initMemberEditProfile", "ajax", {
            url: swconstants.serverUrl + "/api/memberapi/initmembereditprofile/?&memberid={memberId}&callback=?",
            dataType: "json",
            type: "GET"
        });        

        amplify.request.define("initMemberInviteAddEditVc", "ajax", {
            url: swconstants.serverUrl + "/api/memberinviteapi/initmemberinviteaddeditvc/?&memberInviteId={memberInviteId}&callback=?",
            dataType: "json",
            type: "GET"
        });

        amplify.request.define("initLiveTimelineBlurbs", "ajax", {
            url: swconstants.serverUrl + "/api/followgameapi/initlivetimelineblurbs?gameid={gameId}&callback=?",
            dataType: "json",
            type: "GET"
        });

        amplify.request.define("synchronizeTimeline", "ajax", {
            url: swconstants.serverUrl + "/api/followgameapi/synchronizetimeline?gameid={gameId}&callback=?",
            dataType: "json",
            type: "GET"
        });           

        amplify.request.define("initLiveStreamControlPanel", "ajax", {
            url: swconstants.serverUrl + "/api/livestreamapi/initlivestreamcontrolpanel?livestreamid={liveStreamId}&callback=?",
            dataType: "json",
            type: "GET"
        });

        amplify.request.define("initPublicLiveTimelineBlurbs", "ajax", {
            url: swconstants.serverUrl + "/api/followgameapi/initpubliclivetimelineblurbs?gameid={gameId}&sharedsecret={sharedsecret}&callback=?",
            dataType: "json",
            type: "GET"
        });        

        amplify.request.define("addNewTeamStaff", "ajax", {
            url: swconstants.serverUrl + "/api/teamstaffapi/post",
            type: "POST",
            dataType: 'json',
            contentType: 'application/json; charset=utf-8'
        });

        amplify.request.define("addNewPlayer", "ajax", {
            url: swconstants.serverUrl + "/api/teamplayerapi/postv2",
            type: "POST",
            dataType: 'json',
            contentType: 'application/json; charset=utf-8'
        });

        amplify.request.define("initTeamAdmin", "ajax", {
            url: swconstants.serverUrl + "/api/teamadminapi/initteamadmin/?teamid={teamId}&callback=?",
            dataType: "json",
            type: "GET"
        });

        amplify.request.define("initTeamAdminConnect", "ajax", {
            url: swconstants.serverUrl + "/api/teamadminapi/initteamadminconnect/?teamid={teamId}&callback=?",
            dataType: "json",
            type: "GET"
        });

        amplify.request.define("initTeamSponsors", "ajax", {
            url: swconstants.serverUrl + "/api/teamadminapi/initteamsponsors/?teamid={teamId}&callback=?",
            dataType: "json",
            type: "GET"
        });

        amplify.request.define("initGameOverview", "ajax", {
            url: swconstants.serverUrl + "/api/magazinegameviewapi/initgameoverview/?gameid={gameId}&callback=?",
            dataType: "json",
            type: "GET"
        });

        amplify.request.define("getGameOverview", "ajax", {
            url: swconstants.serverUrl + "/api/magazinegameviewapi/getgameoverview/?gameid={gameId}&callback=?",
            dataType: "json",
            type: "GET"
        });

        amplify.request.define("getGameMediaItems", "ajax", {
            url: swconstants.serverUrl + "/api/followgameapi/getgamemediaitems/?gameid={gameId}&callback=?",
            dataType: "json",
            type: "GET"
        });

        amplify.request.define("getGameLineUp", "ajax", {
            url: swconstants.serverUrl + "/api/gamelineupapi/getgamelineupforgamebyid/?gameid={gameId}&gamelineupid={gameLineUpId}&callback=?",
            dataType: "json",
            type: "GET"
        });

        amplify.request.define("initGameLineUps", "ajax", {
            url: swconstants.serverUrl + "/api/magazinegameviewapi/initgamelineups/?gameid={gameId}&callback=?",
            dataType: "json",
            type: "GET"
        });

        amplify.request.define("initGameLeagueOverview", "ajax", {
            url: swconstants.serverUrl + "/api/magazinegameviewapi/initgameleagueoverview/?gameid={gameId}&callback=?",
            dataType: "json",
            type: "GET"
        });

        amplify.request.define("connectTeam", "ajax", {
            url: swconstants.serverUrl + "/api/teamadminapi/connectteam/?teamid={teamId}&teamtoconnectid={teamToConnectId}&callback=?",
            dataType: "json",
            type: "GET"
        });

        amplify.request.define("disconnectTeam", "ajax", {
            url: swconstants.serverUrl + "/api/teamadminapi/disconnectteam/?teamid={teamId}&teamtodisconnectid={teamToDisconnectId}&callback=?",
            dataType: "json",
            type: "GET"
        });

        amplify.request.define("validatePersonalIdentityNumber", "ajax", {
            url: swconstants.serverUrl + "/api/teamadminapi/validatepersonalidentitynumber/?personalidentitynumber={personalIdentityNumber}&callback=?",
            dataType: "json",
            type: "GET"
        });

        amplify.request.define("sendInvitetoTeamStaff", "ajax", {
            url: swconstants.serverUrl + "/api/teamstaffapi/sendinvitetoteamstaff/?teamstaffid={teamStaffId}&callback=?",
            dataType: "json",
            type: "GET"
        });

        amplify.request.define("sendInvitetoTeamPlayer", "ajax", {
            url: swconstants.serverUrl + "/api/teamplayerapi/sendinvite/?teamplayerid={teamPlayerId}&callback=?",
            dataType: "json",
            type: "GET"
        });

        amplify.request.define("sendInvitetoMemberGuardian", "ajax", {
            url: swconstants.serverUrl + "/api/memberguardianapi/sendInvitetoMemberGuardian/?memberGuardianid={memberGuardianId}&callback=?",
            dataType: "json",
            type: "GET"
        });

        amplify.request.define("getTeamMembers", "ajax", {
            url: swconstants.serverUrl + "/api/teamadminapi/getteammembers/?teamid={teamId}&callback=?",
            dataType: "json",
            type: "GET"
        });

        amplify.request.define("getPossibleLiveReportersForTeam", "ajax", {
            url: swconstants.serverUrl + "/api/teamlivereporterapi/getpossiblelivereportersforteam/?teamid={teamId}&callback=?",
            dataType: "json",
            type: "GET"
        });

        amplify.request.define("getPossibleTeamAdmins", "ajax", {
            url: swconstants.serverUrl + "/api/teamapi/getpossibleteamadmins/?teamid={teamId}&callback=?",
            dataType: "json",
            type: "GET"
        });

        amplify.request.define("initTeamAdminMenu", "ajax", {
            url: swconstants.serverUrl + "/api/teamapi/initteamadminmenu?teamid={teamId}",
            dataType: "json",
            type: "GET"
        });

        amplify.request.define("initTeamVC", "ajax", {
            url: swconstants.serverUrl + "/api/teamapi/initteamvc/?teamid={teamId}&callback=?",
            dataType: "json",
            type: "GET"
        });

        amplify.request.define("initTeamLiveReporters", "ajax", {
            url: swconstants.serverUrl + "/api/teamapi/initteamlivereporters/?teamid={teamId}&callback=?",
            dataType: "json",
            type: "GET"
        });

        amplify.request.define("initTeamAdminDetails", "ajax", {
            url: swconstants.serverUrl + "/api/teamadminapi/initteamadmindetails/?teamid={teamId}&callback=?",
            dataType: "json",
            type: "GET"
        });

        amplify.request.define("initTeamAdminTeamFeed", "ajax", {
            url: swconstants.serverUrl + "/api/teamfeedapi/initteamadminteamfeed/?teamid={teamId}&callback=?",
            dataType: "json",
            type: "GET"
        });

        amplify.request.define("initTeamGamesAdminVC", "ajax", {
            url: swconstants.serverUrl + "/api/teamapi/initteamgamesadminvc/?teamid={teamId}&memberid={memberId}&callback=?",
            dataType: "json",
            type: "GET"
        });

        amplify.request.define("getComingTeamGames", "ajax", {
            url: swconstants.serverUrl + "/api/teamapi/getcomingteamgames/?teamid={teamId}&lastgameid={lastGameId}&callback=?",
            dataType: "json",
            type: "GET"
        });

        amplify.request.define("getComingStreamedGames", "ajax", {
            url: swconstants.serverUrl + "/api/memberapi/getcomingstreamedgames/?lastgameid={lastGameId}&callback=?",
            dataType: "json",
            type: "GET"
        });

        amplify.request.define("getComingTeamAdminLeagueTeams", "ajax", {
            url: swconstants.serverUrl + "/api/teamapi/getcomingteamadminleagueteams/?teamid={teamId}&lastleagueteamid={lastLeagueTeamId}&callback=?",
            dataType: "json",
            type: "GET"
        });

        amplify.request.define("getPreviousTeamAdminLeagueTeams", "ajax", {
            url: swconstants.serverUrl + "/api/teamapi/getpreviousteamadminleagueteams/?teamid={teamId}&lastleagueteamid={lastLeagueTeamId}&callback=?",
            dataType: "json",
            type: "GET"
        });

        amplify.request.define("getPreviousTeamGames", "ajax", {
            url: swconstants.serverUrl + "/api/teamapi/getpreviousteamgames/?teamid={teamId}&lastgameid={lastGameId}&callback=?",
            dataType: "json",
            type: "GET"
        });

        amplify.request.define("getPreviousStreamedGames", "ajax", {
            url: swconstants.serverUrl + "/api/memberapi/getpreviousstreamedgames/?lastgameid={lastGameId}&callback=?",
            dataType: "json",
            type: "GET"
        });

        amplify.request.define("getComingLeagueGames", "ajax", {
            url: swconstants.serverUrl + "/api/leagueapi/getcomingleaguegames/?leagueid={leagueId}&lastgameid={lastGameId}&callback=?",
            dataType: "json",
            type: "GET"
        });

        amplify.request.define("getPreviousLeagueGames", "ajax", {
            url: swconstants.serverUrl + "/api/leagueapi/getpreviousleaguegames/?leagueid={leagueId}&lastgameid={lastGameId}&callback=?",
            dataType: "json",
            type: "GET"
        });

        amplify.request.define("getComingLeagueOrganizerGames", "ajax", {
            url: swconstants.serverUrl + "/api/leagueorganizerapi/getcomingleagueorganizergames/?leagueorganizerid={leagueOrganizerId}&lastgameid={lastGameId}&callback=?",
            dataType: "json",
            type: "GET"
        });

        amplify.request.define("getPreviousLeagueOrganizerGames", "ajax", {
            url: swconstants.serverUrl + "/api/leagueorganizerapi/getpreviousleagueorganizergames/?leagueorganizerid={leagueOrganizerId}&lastgameid={lastGameId}&callback=?",
            dataType: "json",
            type: "GET"
        });

        amplify.request.define("getComingClubGames", "ajax", {
            url: swconstants.serverUrl + "/api/clubapi/getcomingclubgames/?clubid={clubId}&lastgameid={lastGameId}&callback=?",
            dataType: "json",
            type: "GET"
        });

        amplify.request.define("getPreviousClubGames", "ajax", {
            url: swconstants.serverUrl + "/api/clubapi/getpreviousclubgames/?clubid={clubId}&lastgameid={lastGameId}&callback=?",
            dataType: "json",
            type: "GET"
        });

        amplify.request.define("getPlayerGuardians", "ajax", {
            url: swconstants.serverUrl + "/api/teamapi/getplayerguardians/?teamid={teamId}&callback=?",
            dataType: "json",
            type: "GET"
        });

        amplify.request.define("getPlayerPositions", "ajax", {
            url: swconstants.serverUrl + "/api/teamapi/initplayerpositionselectvc/?sportid={sportId}&callback=?",
            dataType: "json",
            type: "GET"
        });        

        amplify.request.define("getTeamStaffRoles", "ajax", {
            url: swconstants.serverUrl + "/api/teamapi/initteamstaffroleselectvc/?sportid={sportId}&callback=?",
            dataType: "json",
            type: "GET"
        });                

        amplify.request.define("initPlayersAdminVC", "ajax", {
            url: swconstants.serverUrl + "/api/teamapi/initplayersadminvc/?teamid={teamId}&callback=?",
            dataType: "json",
            type: "GET"
        });

        amplify.request.define("initTeamStaffAdminVC", "ajax", {
            url: swconstants.serverUrl + "/api/teamapi/initteamstaffadminvc/?teamid={teamId}&callback=?",
            dataType: "json",
            type: "GET"
        });

        amplify.request.define("initTeamFollowers", "ajax", {
            url: swconstants.serverUrl + "/api/teamapi/initteamfollowers/?teamid={teamId}&callback=?",
            dataType: "json",
            type: "GET"
        });

        amplify.request.define("initTeamLeaguesVC", "ajax", {
            url: swconstants.serverUrl + "/api/teamapi/initteamleaguesvc/?teamid={teamId}&callback=?",
            dataType: "json",
            type: "GET"
        });

        amplify.request.define("initTeamAdminTeamsVC", "ajax", {
            url: swconstants.serverUrl + "/api/teamapi/initteamadminteamsvc/?memberid={memberId}&callback=?",
            dataType: "json",
            type: "GET"
        });        

        amplify.request.define("initPlayerPage", "ajax", {
            url: swconstants.serverUrl + "/api/playerapi/initplayerpage/?id={Id}&callback=?",
            dataType: "json",
            type: "GET"
        });

        amplify.request.define("initPlayerProfile", "ajax", {
            url: swconstants.serverUrl + "/api/playerapi/initplayerprofile/?teamplayerid={teamPlayerId}&gameplayerid={gamePlayerId}&callback=?",
            dataType: "json",
            type: "GET"
        });

        amplify.request.define("getPlayerLeagueStatistics", "ajax", {
            url: swconstants.serverUrl + "/api/playerapi/getplayerleaguestatistics/?playerid={playerId}&callback=?",
            dataType: "json",
            type: "GET"
        });

        amplify.request.define("getPlayerHighlights", "ajax", {
            url: swconstants.serverUrl + "/api/playerapi/getplayerhighlights/?playerid={playerId}&callback=?",
            dataType: "json",
            type: "GET"
        });

        amplify.request.define("initTeamPlayerForEditView", "ajax", {
            url: swconstants.serverUrl + "/api/teamplayerapi/initteamplayerforeditview/?teamid={teamId}&callback=?",
            dataType: "json",
            type: "GET"
        });

        amplify.request.define("updateTeamPlayerOld", "ajax", {
            url: swconstants.serverUrl + "/api/teamplayerapi/put",
            dataType: "json",
            type: "PUT",
            contentType: 'application/json; charset=utf-8'
        });

        amplify.request.define("updateTeamPlayerPrivacySettings", "ajax", {
            url: swconstants.serverUrl + "/api/teamplayerapi/updateteamplayerprivacysettings/?callback=?",
            dataType: "json",
            type: "PUT",
            contentType: 'application/json; charset=utf-8'
        });

        amplify.request.define("getPlayerHeader", "ajax", {
            url: swconstants.serverUrl + "/api/playerapi/getplayerheader/?id={Id}&callback=?",
            dataType: "json",
            type: "GET"
        });

        amplify.request.define("getPlayerForDetailsView", "ajax", {
            url: swconstants.serverUrl + "/api/playerapi/getplayerfordetailsview/?id={Id}&callback=?",
            dataType: "json",
            type: "GET"
        });

        amplify.request.define("getTeamPlayerForEditView", "ajax", {
            url: swconstants.serverUrl + "/api/teamplayerapi/getteamplayerforeditview/?teamplayerid={teamPlayerId}&callback=?",
            dataType: "json",
            type: "GET"
        });

        amplify.request.define("getTeamStaffForEditView", "ajax", {
            url: swconstants.serverUrl + "/api/teamstaffapi/getteamstaffforeditviewv2/?id={Id}&callback=?",
            dataType: "json",
            type: "GET"
        });

        amplify.request.define("getMemberGuardianForEditView", "ajax", {
            url: swconstants.serverUrl + "/api/memberguardianapi/getmemberguardianforeditviewv2/?id={Id}&callback=?",
            dataType: "json",
            type: "GET"
        });        

        amplify.request.define("initTeamStaffForEditView", "ajax", {
            url: swconstants.serverUrl + "/api/teamstaffapi/initteamstaffforeditview/?id={Id}&callback=?",
            dataType: "json",
            type: "GET"
        });

        amplify.request.define("getPlayerGuardianForDetailsView", "ajax", {
            url: swconstants.serverUrl + "/api/playerguardianapi/getplayerguardianfordetailsview/?PlayerGuardianID={PlayerGuardianID}&callback=?",
            dataType: "json",
            type: "GET"
        });

        amplify.request.define("getTeamStaffForDetailsView", "ajax", {
            url: swconstants.serverUrl + "/api/teamstaffapi/getteamstafffordetailsview/?TeamStaffID={TeamStaffID}&callback=?",
            dataType: "json",
            type: "GET"
        });

        amplify.request.define("getAllLiveStreamProviders", "ajax", {
            url: swconstants.serverUrl + "/api/livestreamapi/getalllivestreamproviders/?callback=?",
            dataType: "json",
            type: "GET"
        });

        amplify.request.define("getLeagueForDetailsView", "ajax", {
            url: swconstants.serverUrl + "/api/leagueapi/getleaguefordetailsview/?id={id}&callback=?",
            dataType: "json",
            type: "GET"
        });

        amplify.request.define("getLeagueGames", "ajax", {
            url: swconstants.serverUrl + "/api/leagueapi/getleaguegames/?leagueid={LeagueID}&callback=?",
            dataType: "json",
            type: "GET"
        });

        amplify.request.define("getLeaguePlayOffGames", "ajax", {
            url: swconstants.serverUrl + "/api/leagueapi/getleagueplayoffgames/?leagueid={leagueId}&callback=?",
            dataType: "json",
            type: "GET"
        });        
        
        amplify.request.define("getLeagueTeams", "ajax", {
            url: swconstants.serverUrl + "/api/leagueapi/getleagueteams/?leagueid={LeagueID}&callback=?",
            dataType: "json",
            type: "GET"
        });

        amplify.request.define("getLeagueOrganizerTeams", "ajax", {
            url: swconstants.serverUrl + "/api/leagueorganizerapi/getleagueorganizerteams/?leagueorganizerid={LeagueOrganizerID}&callback=?",
            dataType: "json",
            type: "GET"
        });

        amplify.request.define("getGoalieStatisticsForLeague", "ajax", {
            url: swconstants.serverUrl + "/api/leagueapi/getgoaliestatisticsforleague/?leagueid={leagueId}&pageid={pageId}&pagesize={pageSize}&column={column}&callback=?",
            dataType: "json",
            type: "GET"
        });

        amplify.request.define("getFootballPlayerStatisticsForLeague", "ajax", {
            url: swconstants.serverUrl + "/api/leagueapi/getfootballplayerstatisticsforleague/?leagueid={leagueId}&pageid={pageId}&pagesize={pageSize}&column={column}&callback=?",
            dataType: "json",
            type: "GET"
        });        

        amplify.request.define("getPlayerStatisticsForLeague", "ajax", {
            url: swconstants.serverUrl + "/api/leagueapi/getplayerstatisticsforleague/?leagueid={leagueId}&pageid={pageId}&pagesize={pageSize}&column={column}&callback=?",
            dataType: "json",
            type: "GET"
        });

        amplify.request.define("getPlayerStatisticsForLeaguePlayOff", "ajax", {
            url: swconstants.serverUrl + "/api/leagueapi/getplayerstatisticsforleagueplayoff/?leagueid={leagueId}&pageid={pageId}&pagesize={pageSize}&column={column}&callback=?",
            dataType: "json",
            type: "GET"
        });        

        amplify.request.define("getPlayersForGameSelectLists", "ajax", {
            url: swconstants.serverUrl + "/api/playerapi/getplayersforgameselectlists/?hometeamid={homeTeamId}&awayteamid={awayTeamId}&gameid={gameId}&callback=?",
            dataType: "json",
            type: "GET"
        });        

        amplify.request.define("getFootballEventReport", "ajax", {
            url: swconstants.serverUrl + "/api/footballeventreportapi/getfootballeventreport/?footballeventreportid={footballEventReportId}&callback=?",
            dataType: "json",
            type: "GET"
        });

        amplify.request.define("getFloorballEventReport", "ajax", {
            url: swconstants.serverUrl + "/api/floorballeventreportapi/getfloorballeventreport/?floorballeventreportid={floorballEventReportId}&callback=?",
            dataType: "json",
            type: "GET"
        });

        amplify.request.define("getFutsalEventReport", "ajax", {
            url: swconstants.serverUrl + "/api/futsaleventreportapi/getfutsaleventreport/?futsaleventreportid={futsalEventReportId}&callback=?",
            dataType: "json",
            type: "GET"
        });        

        amplify.request.define("getFootballEREventForEdit", "ajax", {
            url: swconstants.serverUrl + "/api/footballeventreportapi/getfootballereventforedit/?footballereventid={footballEREventId}&callback=?",
            dataType: "json",
            type: "GET"
        });        

        amplify.request.define("getFloorballEREventForEdit", "ajax", {
            url: swconstants.serverUrl + "/api/floorballeventreportapi/getfloorballereventforedit/?floorballereventid={floorballEREventId}&callback=?",
            dataType: "json",
            type: "GET"
        });       

        amplify.request.define("getFutsalEREventForEdit", "ajax", {
            url: swconstants.serverUrl + "/api/futsaleventreportapi/getfutsalereventforedit/?futsalereventid={futsalEREventId}&callback=?",
            dataType: "json",
            type: "GET"
        });        

        amplify.request.define("getFloorballChanceTypesForSelectList", "ajax", {
            url: swconstants.serverUrl + "/api/floorballeventreportapi/getfloorballchancetypesforselectlist/?callback=?",
            dataType: "json",
            type: "GET"
        });

        amplify.request.define("getFloorballPenaltyTypesForSelectList", "ajax", {
            url: swconstants.serverUrl + "/api/floorballeventreportapi/getfloorballpenaltytypesforselectlist/?callback=?",
            dataType: "json",
            type: "GET"
        });        

        amplify.request.define("getFloorballGoalTypesForSelectList", "ajax", {
            url: swconstants.serverUrl + "/api/floorballeventreportapi/getfloorballgoaltypesforselectlist/?callback=?",
            dataType: "json",
            type: "GET"
        });        

        amplify.request.define("initGoalieStatisticsForLeague", "ajax", {
            url: swconstants.serverUrl + "/api/leagueapi/initgoaliestatisticsforleague/?leagueid={leagueId}&column={column}&callback=?",
            dataType: "json",
            type: "GET"
        });

        amplify.request.define("initFootballPlayerStatisticsForLeague", "ajax", {
            url: swconstants.serverUrl + "/api/leagueapi/initfootballplayerstatisticsforleague/?leagueid={leagueId}&column={column}&callback=?",
            dataType: "json",
            type: "GET"
        });        

        amplify.request.define("initFootballEventReportVC", "ajax", {
            url: swconstants.serverUrl + "/api/footballeventreportapi/initfootballeventreportvc/?gameid={gameId}&callback=?",
            dataType: "json",
            type: "GET"
        });                  

        amplify.request.define("initFloorballEventReportVC", "ajax", {
            url: swconstants.serverUrl + "/api/floorballeventreportapi/initfloorballeventreportvc/?gameid={gameId}&callback=?",
            dataType: "json",
            type: "GET"
        });        

        amplify.request.define("getNextGameStatusFootball", "ajax", {
            url: swconstants.serverUrl + "/api/footballeventreportapi/getnextgamestatus/?eventreportid={eventReportId}&callback=?",
            dataType: "json",
            type: "GET"
        });                

        amplify.request.define("getNextGameStatusFloorball", "ajax", {
            url: swconstants.serverUrl + "/api/floorballeventreportapi/getnextgamestatus/?eventreportid={eventReportId}&callback=?",
            dataType: "json",
            type: "GET"
        });                

        amplify.request.define("getNextGameStatusFutsal", "ajax", {
            url: swconstants.serverUrl + "/api/futsaleventreportapi/getnextgamestatus/?eventreportid={eventReportId}&callback=?",
            dataType: "json",
            type: "GET"
        });           

        amplify.request.define("initFutsalEventReportVC", "ajax", {
            url: swconstants.serverUrl + "/api/futsaleventreportapi/initfutsaleventreportvc/?gameid={gameId}&callback=?",
            dataType: "json",
            type: "GET"
        });        

        amplify.request.define("initPlayerStatisticsForLeague", "ajax", {
            url: swconstants.serverUrl + "/api/leagueapi/initplayerstatisticsforleague/?leagueid={leagueId}&column={column}&callback=?",
            dataType: "json",
            type: "GET"
        });

        amplify.request.define("getClubTeams", "ajax", {
            url: swconstants.serverUrl + "/api/clubapi/getclubteams/?clubid={clubId}&callback=?",
            dataType: "json",
            type: "GET"
        });

        amplify.request.define("getTeamsForClub", "ajax", {
            url: swconstants.serverUrl + "/api/clubapi/getteams/?clubid={clubId}&seasonid={seasonId}&callback=?",
            dataType: "json",
            type: "GET"
        });        

        amplify.request.define("getTeamsForClubAndGame", "ajax", {
            url: swconstants.serverUrl + "/api/clubapi/getteamsforclubandgame/?clubid={clubId}&teamid={teamId}&callback=?",
            dataType: "json",
            type: "GET"
        });                                  

        //initMemberCalendar
        amplify.request.define("initMemberCalendar", "ajax", {
            url: swconstants.serverUrl + "/api/mainviewapi/initmembercalendar?callback=?",
            dataType: "json",
            type: "GET"
        });

        amplify.request.define("getMemberHeader", "ajax", {
            url: swconstants.serverUrl + "/api/adminmembersapi/getmemberheader/?memberid={memberId}&callback=?",
            dataType: "json",
            type: "GET"
        });

        amplify.request.define("getUploadedItemsForMember", "ajax", {
            url: swconstants.serverUrl + "/api/adminmembersapi/getuploadeditemsformember/?memberid={memberId}&callback=?",
            dataType: "json",
            type: "GET"
        });

        amplify.request.define("getReportedItemsForMember", "ajax", {
            url: swconstants.serverUrl + "/api/adminmembersapi/getreporteditemsformember/?memberid={memberId}&callback=?",
            dataType: "json",
            type: "GET"
        });

        amplify.request.define("getReportedItemsForGame", "ajax", {
            url: swconstants.serverUrl + "/api/reportapi/getreporteditemsforgame/?gameid={gameId}&callback=?",
            dataType: "json",
            type: "GET"
        });

        amplify.request.define("getReportedItemsByReportedMember", "ajax", {
            url: swconstants.serverUrl + "/api/adminmembersapi/getreporteditemsbyreportedmember/?memberid={memberId}&callback=?",
            dataType: "json",
            type: "GET"
        });

        amplify.request.define("getMemberRoles", "ajax", {
            url: swconstants.serverUrl + "/api/adminmembersapi/getmemberroles/?memberid={memberId}&callback=?",
            dataType: "json",
            type: "GET"
        });

        //getMemberCalendarGames
        amplify.request.define("getMemberCalendarGames", "ajax", {
            url: swconstants.serverUrl + "/api/mainviewapi/getmembercalendargames/?GetOlderGames={GetOlderGames}&LastGameID={LastGameID}&callback=?",
            dataType: "json",
            type: "GET"
        });        

        //GetMemberCalendarLiveGamesCounter
        amplify.request.define("getMemberCalendarLiveGamesCounter", "ajax", {
            url: swconstants.serverUrl + "/api/mainviewapi/getmembercalendarlivegamescounter/?callback=?",
            dataType: "json",
            type: "GET"
        });

        amplify.request.define("getMemberNotifications", "ajax", {
            url: swconstants.serverUrl + "/api/mainviewapi/getmembernotifications/?callback=?",
            dataType: "json",
            type: "GET"
        });

        amplify.request.define("getGameTeamRosterWarnings", "ajax", {
            url: swconstants.serverUrl + "/api/gameteamrosterapi/getgameteamrosterwarnings/?gameteamrosterid={gameTeamRosterId}&callback=?",
            dataType: "json",
            type: "GET"
        });        

        amplify.request.define("mergeMembers", "ajax", {
            url: swconstants.serverUrl + "/api/adminmembersapi/mergemembers/?memberidtodelete={memberIdToDelete}&memberidtokeep={memberIdToKeep}&callback=?",
            dataType: "json",
            type: "GET"
        });

        //amplify.request.define("insertReport", "ajax", {
        //    url: swconstants.serverUrl + "/api/reportapi/post/?gameID={gameID}&timelineItemID={timelineItemID}&timelineItemType={timelineItemType}",
        //    type: "POST",
        //    dataType: 'json',
        //    contentType: 'application/json; charset=utf-8'
        //});

        amplify.request.define("reportContentWithReason", "ajax", {
            url: swconstants.serverUrl + "/api/reportapi/reportcontentwithreason",
            type: "POST",
            dataType: 'json',
            contentType: 'application/json; charset=utf-8'
        });

        //amplify.request.define("reportContentWithReason", "ajax", {
        //    url: swconstants.serverUrl + "/api/reportapi/reportcontentwithreason/?reportTypeID={reportTypeID}&reportContentID={reportContentID}&reportContentTypeID={reportContentTypeID}&reportContentGameID={reportContentGameID}",
        //    type: "POST",
        //    dataType: 'json',
        //    contentType: 'application/json; charset=utf-8'
        //});

        amplify.request.define("insertDiscussionPost", "ajax", {
            url: swconstants.serverUrl + "/api/discussionpostapi/post",
            type: "POST",
            dataType: 'json',
            contentType: 'application/json; charset=utf-8'
        });

        amplify.request.define("insertMemberGuardian", "ajax", {
            url: swconstants.serverUrl + "/api/memberguardianapi/post",
            type: "POST",
            dataType: 'json',
            contentType: 'application/json; charset=utf-8'
        });

        amplify.request.define("insertLeagueOrganizerAdmin", "ajax", {
            url: swconstants.serverUrl + "/api/leagueorganizeradminapi/post",
            type: "POST",
            dataType: 'json',
            contentType: 'application/json; charset=utf-8'
        });

        amplify.request.define("insertInfoItem", "ajax", {
            url: swconstants.serverUrl + "/api/infoitemapi/post",
            type: "POST",
            dataType: 'json',
            contentType: 'application/json; charset=utf-8'
        });

        amplify.request.define("saveTeamPartner", "ajax", {
            url: swconstants.serverUrl + "/api/teamadminapi/saveteampartner",
            type: "POST",
            dataType: 'json',
            contentType: 'application/json; charset=utf-8'
        });                               

        amplify.request.define("saveTeamPartnerSwiss", "ajax", {
            url: swconstants.serverUrl + "/api/teamadminapi/saveteampartnerswiss",
            type: "POST",
            dataType: 'json',
            contentType: 'application/json; charset=utf-8'
        });                               

        amplify.request.define("insertPartnerFeature", "ajax", {
            url: swconstants.serverUrl + "/api/partneradminapi/insertpartnerfeature",
            type: "POST",
            dataType: 'json',
            contentType: 'application/json; charset=utf-8'
        });
        
        amplify.request.define("gainControlOfFootballEventReport", "ajax", {
            url: swconstants.serverUrl + "/api/footballeventreportapi/gaincontrolofeventreport?footballeventreportid={footballEventReportId}",
            type: "POST",
            dataType: 'json',
            contentType: 'application/json; charset=utf-8'
        });

        amplify.request.define("gainControlOfFloorballEventReport", "ajax", {
            url: swconstants.serverUrl + "/api/floorballeventreportapi/gaincontrolofeventreport?floorballeventreportid={floorballEventReportId}",
            type: "POST",
            dataType: 'json',
            contentType: 'application/json; charset=utf-8'
        });        

        amplify.request.define("gainControlOfFutsalEventReport", "ajax", {
            url: swconstants.serverUrl + "/api/futsaleventreportapi/gaincontrolofeventreport?futsaleventreportid={futsalEventReportId}",
            type: "POST",
            dataType: 'json',
            contentType: 'application/json; charset=utf-8'
        });

        amplify.request.define("insertFootballEREvent", "ajax", {
            url: swconstants.serverUrl + "/api/footballeventreportapi/inserterevent",
            type: "POST",
            dataType: 'json',
            contentType: 'application/json; charset=utf-8'
        });

        amplify.request.define("insertFootballEventReport", "ajax", {
            url: swconstants.serverUrl + "/api/footballeventreportapi/insertfootballeventreport",
            type: "POST",
            dataType: 'json',
            contentType: 'application/json; charset=utf-8'
        });        

        amplify.request.define("updateFootballEventReport", "ajax", {
            url: swconstants.serverUrl + "/api/footballeventreportapi/updateeventreport",
            type: "PUT",
            dataType: 'json',
            contentType: 'application/json; charset=utf-8'
        });   

        amplify.request.define("insertFloorballEREvent", "ajax", {
            url: swconstants.serverUrl + "/api/floorballeventreportapi/inserterevent",
            type: "POST",
            dataType: 'json',
            contentType: 'application/json; charset=utf-8'
        });

        amplify.request.define("insertFloorballEventReport", "ajax", {
            url: swconstants.serverUrl + "/api/floorballeventreportapi/insertfloorballeventreport",
            type: "POST",
            dataType: 'json',
            contentType: 'application/json; charset=utf-8'
        });        

        amplify.request.define("updateFloorballEventReport", "ajax", {
            url: swconstants.serverUrl + "/api/floorballeventreportapi/updateeventreport",
            type: "PUT",
            dataType: 'json',
            contentType: 'application/json; charset=utf-8'
        });                

        amplify.request.define("insertFutsalEREvent", "ajax", {
            url: swconstants.serverUrl + "/api/futsaleventreportapi/inserterevent",
            type: "POST",
            dataType: 'json',
            contentType: 'application/json; charset=utf-8'
        });

        amplify.request.define("insertFutsalEventReport", "ajax", {
            url: swconstants.serverUrl + "/api/futsaleventreportapi/insertfutsaleventreport",
            type: "POST",
            dataType: 'json',
            contentType: 'application/json; charset=utf-8'
        });

        amplify.request.define("updateFutsalEventReport", "ajax", {
            url: swconstants.serverUrl + "/api/futsaleventreportapi/updateeventreport",
            type: "PUT",
            dataType: 'json',
            contentType: 'application/json; charset=utf-8'
        });   

        amplify.request.define("updateFootballEREvent", "ajax", {
            url: swconstants.serverUrl + "/api/footballeventreportapi/updateerevent",
            type: "PUT",
            dataType: 'json',
            contentType: 'application/json; charset=utf-8'
        });

        amplify.request.define("updateFloorballEREvent", "ajax", {
            url: swconstants.serverUrl + "/api/floorballeventreportapi/updateerevent",
            type: "PUT",
            dataType: 'json',
            contentType: 'application/json; charset=utf-8'
        });

        amplify.request.define("updateFutsalEREvent", "ajax", {
            url: swconstants.serverUrl + "/api/futsaleventreportapi/updateerevent",
            type: "PUT",
            dataType: 'json',
            contentType: 'application/json; charset=utf-8'
        });

        amplify.request.define("startNewUserSession", "ajax", {
            url: swconstants.serverUrl + "/api/usereventstrackingapi/startnewusersession",
            type: "POST",
            dataType: 'json',
            contentType: 'application/json; charset=utf-8'
        });

        amplify.request.define("insertUserSessionEvents", "ajax", {
            url: swconstants.serverUrl + "/api/usereventstrackingapi/insertevents",
            type: "POST",
            dataType: 'json',
            contentType: 'application/json; charset=utf-8'
        });        

        amplify.request.define("updateLiveStreamSubscription", "ajax", {
            url: swconstants.serverUrl + "/api/livestreamsubscriptionapi/update",
            type: "PUT",
            dataType: 'json',
            contentType: 'application/json; charset=utf-8'
        });        

        amplify.request.define("updatePartner", "ajax", {
            url: swconstants.serverUrl + "/api/partneradminapi/updatepartner",
            type: "POST",
            dataType: 'json',
            contentType: 'application/json; charset=utf-8'
        });                

        amplify.request.define("updatePartnerFeatureSet", "ajax", {
            url: swconstants.serverUrl + "/api/partneradminapi/updatepartnerfeatureset",
            type: "POST",
            dataType: 'json',
            contentType: 'application/json; charset=utf-8'
        });

        amplify.request.define("updatePartnerPackage", "ajax", {
            url: swconstants.serverUrl + "/api/partneradminapi/updatepartnerpackage",
            type: "POST",
            dataType: 'json',
            contentType: 'application/json; charset=utf-8'
        });

        amplify.request.define("initInfoItemForImportView", "ajax", {
            url: swconstants.serverUrl + "/api/infoitemapi/initinfoitemforimportview",
            type: "POST",
            dataType: 'json',
            contentType: 'application/json; charset=utf-8'
        });

        amplify.request.define("insertGameDiscussionPost", "ajax", {
            url: swconstants.serverUrl + "/api/gamediscussionpostapi/post",
            type: "POST",
            dataType: 'json',
            contentType: 'application/json; charset=utf-8'
        });

        amplify.request.define("insertMemberInvite", "ajax", {
            url: swconstants.serverUrl + "/api/memberinviteapi/post",
            type: "POST",
            dataType: 'json',
            contentType: 'application/json; charset=utf-8'
        });

        amplify.request.define("saveGame", "ajax", {
            url: swconstants.serverUrl + "/api/gameapi/savegame",
            type: "POST",
            dataType: 'json',
            contentType: 'application/json; charset=utf-8'
        });

        amplify.request.define("insertGameReport", "ajax", {
            url: swconstants.serverUrl + "/api/gamereportapi/insertgamereport",
            type: "POST",
            dataType: 'json',
            contentType: 'application/json; charset=utf-8'
        });

        amplify.request.define("sendSMSInvite", "ajax", {
            url: swconstants.serverUrl + "/api/teamapi/sendsmsinvite",
            type: "POST",
            dataType: 'json',
            contentType: 'application/json; charset=utf-8'
        });

        amplify.request.define("insertMemberTeamRole", "ajax", {
            url: swconstants.serverUrl + "/api/teamconnectapi/insertmemberteamrole",
            type: "POST",
            dataType: 'json',
            contentType: 'application/json; charset=utf-8',
            decoder: function (data, status, xhr, success, error) {
                if (xhr.status < 300) {
                    success(data);
                }
                else {
                    error(status, xhr);
                }
            }
        });

        amplify.request.define("insertMemberTeamRoleWithRelations", "ajax", {
            url: swconstants.serverUrl + "/api/teamconnectapi/insertmemberteamrolewithrelations",
            type: "POST",
            dataType: 'json',
            contentType: 'application/json; charset=utf-8',
            decoder: function (data, status, xhr, success, error) {
                if (xhr.status < 300) {
                    success(data);
                }
                else {
                    error(status, xhr);
                }
            }
        });        

        amplify.request.define("insertSocialEntityComment", "ajax", {
            url: swconstants.serverUrl + "/api/socialentitycommentapi/post",
            type: "POST",
            dataType: 'json',
            contentType: 'application/json; charset=utf-8'
        });

        amplify.request.define("insertSocialEntityLike", "ajax", {
            url: swconstants.serverUrl + "/api/socialentitylikeapi/post",
            type: "POST",
            dataType: 'json',
            contentType: 'application/json; charset=utf-8'
        });

        amplify.request.define("insertTeam", "ajax", {
            url: swconstants.serverUrl + "/api/teamapi/post",
            type: "POST",
            dataType: 'json',
            contentType: 'application/json; charset=utf-8'
        });

        amplify.request.define("insertPicture", "ajax", {
            url: swconstants.serverUrl + "/api/pictureapi/post",
            type: "POST",
            dataType: 'json',
            contentType: 'application/json; charset=utf-8'
        });

        amplify.request.define("insertVideo", "ajax", {
            url: swconstants.serverUrl + "/api/videoapi/insertvideo",
            type: "POST",
            dataType: 'json',
            contentType: 'application/json; charset=utf-8'
        });

        //amplify.request.define("manageAccount", "ajax", {
        //    url: swconstants.serverUrl + "/account/manage",
        //    type: "POST",
        //    headers: { __RequestVerificationToken: $('input[name=""__RequestVerificationToken""]').val() }
        //});        

        amplify.request.define('changeOptInSettingForMemberAgreement', 'ajax', {
            url: swconstants.serverUrl + '/api/agreementapi/changeoptinsettingformemberagreement?agreementid={agreementId}&didactivate={didActivate}&callback=?',
            dataType: 'json',
            type: 'PUT',
            contentType: 'application/json; charset=utf-8'
        });

        amplify.request.define('updateDiscussionPost', 'ajax', {
            url: swconstants.serverUrl + '/api/discussionpostapi/put',
            dataType: 'json',
            type: 'PUT',
            contentType: 'application/json; charset=utf-8'
        });

        amplify.request.define('updateGameDiscussionPost', 'ajax', {
            url: swconstants.serverUrl + '/api/gamediscussionpostapi/put',
            dataType: 'json',
            type: 'PUT',
            contentType: 'application/json; charset=utf-8'
        });

        amplify.request.define('updateInfoItem', 'ajax', {
            url: swconstants.serverUrl + '/api/infoitemapi/put',
            dataType: 'json',
            type: 'PUT',
            contentType: 'application/json; charset=utf-8'
        });
        
        amplify.request.define('updateAzureMedia', 'ajax', {
            url: swconstants.serverUrl + '/api/videoapi/updateazuremedia',
            dataType: 'json',
            type: 'PUT',
            contentType: 'application/json; charset=utf-8'
        });

        amplify.request.define("updateClubBillboard", "ajax", {
            url: swconstants.serverUrl + "/api/clubadminapi/updateclubbillboard",
            type: "PUT",
            dataType: 'json',
            contentType: 'application/json; charset=utf-8'
        });

        amplify.request.define("updateGameReport", "ajax", {
            url: swconstants.serverUrl + "/api/gamereportapi/updategamereport",
            type: "PUT",
            contentType: 'application/json; charset=utf-8'
        });

        amplify.request.define("updatePartnerFeature", "ajax", {
            url: swconstants.serverUrl + "/api/partnerfeatureapi/updatepartnerfeature",
            type: "PUT",
            dataType: 'json',
            contentType: 'application/json; charset=utf-8'
        });

        amplify.request.define("updateAdminMember", "ajax", {
            url: swconstants.serverUrl + "/api/adminmembersapi/updateadminmember/",
            dataType: "json",
            type: "PUT",
            contentType: 'application/json; charset=utf-8'
        });

        amplify.request.define("updateTeamPartnerStatus", "ajax", {
            url: swconstants.serverUrl + "/api/teamadminapi/updateteampartnerstatus/",
            dataType: "json",
            type: "PUT",
            contentType: 'application/json; charset=utf-8'
        });

        //amplify.request.define("updateGamePlayers", "ajax", {
        //    url: swconstants.serverUrl + "/api/gameplayerapi/updategameplayers/?callback=?",
        //    dataType: "json",
        //    type: "PUT",
        //    contentType: 'application/json; charset=utf-8'
        //});

        amplify.request.define("updateMember", "ajax", {
            url: swconstants.serverUrl + "/api/memberinfoadminapi/updatemember/",
            dataType: "json",
            type: "POST",
            contentType: 'application/json; charset=utf-8'
        });

        amplify.request.define("updateMemberPicture", "ajax", {
            url: swconstants.serverUrl + "/api/memberinfoadminapi/updatememberpicture/",
            dataType: "json",
            type: "POST",
            contentType: 'application/json; charset=utf-8'
        });

        amplify.request.define("updateMemberSettings", "ajax", {
            url: swconstants.serverUrl + "/api/memberinfoadminapi/updatemembersettings/",
            dataType: "json",
            type: "POST",
            contentType: 'application/json; charset=utf-8'
        });

        amplify.request.define("updateReferencePicture", "ajax", {
            url: swconstants.serverUrl + "/api/memberapi/uploadreferencepicture/",
            dataType: "json",
            type: "POST",
            contentType: 'application/json; charset=utf-8'
        });

        amplify.request.define("updatePictureInfo", "ajax", {
            url: swconstants.serverUrl + "/api/pictureapi/updatepictureinfo/",
            dataType: "json",
            type: "POST",
            contentType: 'application/json; charset=utf-8'
        });

        amplify.request.define("updateGameVideoInfo", "ajax", {
            url: swconstants.serverUrl + "/api/gamevideoapi/updategamevideoinfo/",
            dataType: "json",
            type: "POST",
            contentType: 'application/json; charset=utf-8'
        });

        amplify.request.define("updateVideoInfo", "ajax", {
            url: swconstants.serverUrl + "/api/videoapi/updatevideoinfo/",
            dataType: "json",
            type: "POST",
            contentType: 'application/json; charset=utf-8'
        });

        amplify.request.define("updatePartnerVideoInfo", "ajax", {
            url: swconstants.serverUrl + "/api/partnerfeatureapi/updatevideoinfo/",
            dataType: "json",
            type: "POST",
            contentType: 'application/json; charset=utf-8'
        });        

        amplify.request.define("updateTeam", "ajax", {
            url: swconstants.serverUrl + "/api/teamapi/updateteam/",
            dataType: "json",
            type: "POST",
            contentType: 'application/json; charset=utf-8'
        });

        amplify.request.define("initAudienceForFilterTypeClub", "ajax", {
            url: swconstants.serverUrl + "/api/audienceapi/initaudienceforfiltertypeclub/",
            dataType: "json",
            type: "POST",
            contentType: 'application/json; charset=utf-8'
        });

        amplify.request.define("initAudienceForFilterTypeTeam", "ajax", {
            url: swconstants.serverUrl + "/api/audienceapi/initaudienceforfiltertypeteam/",
            dataType: "json",
            type: "POST",
            contentType: 'application/json; charset=utf-8'
        });

        amplify.request.define("updateTeamVM", "ajax", {
            url: swconstants.serverUrl + "/api/teamadminapi/updateteam/",
            dataType: "json",
            type: "PUT",
            contentType: 'application/json; charset=utf-8'
        });

        amplify.request.define("updateTeams", "ajax", {
            url: swconstants.serverUrl + "/api/gameapi/updateteams/",
            dataType: "json",
            type: "PUT",
            contentType: 'application/json; charset=utf-8'
        });

        amplify.request.define("updateSpectators", "ajax", {
            url: swconstants.serverUrl + "/api/gameapi/updatespectators/",
            dataType: "json",
            type: "PUT",
            contentType: 'application/json; charset=utf-8'
        });
        
        amplify.request.define("updateTeamPlayer", "ajax", {
            url: swconstants.serverUrl + "/api/teamplayerapi/putv2/",
            dataType: "json",
            type: "PUT",
            contentType: 'application/json; charset=utf-8'
        });

        amplify.request.define("updateTeamStaff", "ajax", {
            url: swconstants.serverUrl + "/api/teamstaffapi/put/",
            dataType: "json",
            type: "PUT",
            contentType: 'application/json; charset=utf-8'
        });

        amplify.request.define("updateMemberGuardian", "ajax", {
            url: swconstants.serverUrl + "/api/memberguardianapi/put/",
            dataType: "json",
            type: "PUT",
            contentType: 'application/json; charset=utf-8'
        });

        amplify.request.define("initMemberProfile", "ajax", {
            url: swconstants.serverUrl + "/api/memberapi/initmemberprofile/?memberid={memberId}&callback=?",
            dataType: "json",
            type: "GET"
        });

        amplify.request.define("initTeamPlayerProfile", "ajax", {
            url: swconstants.serverUrl + "/api/teamplayerapi/initteamplayerprofile/?id={Id}&callback=?",
            dataType: "json",
            type: "GET"
        });

        amplify.request.define("initTeamAdminVariables", "ajax", {
            url: swconstants.serverUrl + "/api/teamadminapi/initteamadminvariables/?teamid={teamId}&callback=?",
            dataType: "json",
            type: "GET"
        });

        amplify.request.define("initClubAdminSearch", "ajax", {
            url: swconstants.serverUrl + "/api/clubadminapi/initclubadminsearch/?clubid={clubId}&callback=?",
            dataType: "json",
            type: "GET"
        });        

        amplify.request.define("initEditMemberVariables", "ajax", {
            url: swconstants.serverUrl + "/api/adminmembersapi/initeditmembervariables/?callback=?",
            dataType: "json",
            type: "GET"
        });

        amplify.request.define("initAudienceForFilterType", "ajax", {
            url: swconstants.serverUrl + "/api/audienceapi/initaudienceforfiltertype/?audiencefiltertypeid={audienceFilterTypeId}&callback=?",
            dataType: "json",
            type: "GET"
        });

        amplify.request.define("initTargetFilterForFilterType", "ajax", {
            url: swconstants.serverUrl + "/api/targetfilterapi/inittargetfilterforfiltertype/?targetfilterfiltertypeid={targetFilterFilterTypeId}&callback=?",
            dataType: "json",
            type: "GET"
        });                

        amplify.request.define("initTargetFilterNameValues", "ajax", {
            url: swconstants.serverUrl + "/api/targetfilterapi/inittargetfilternamevalues/?targetfilterid={targetFilterId}&targetfilterfiltertypeid={targetFilterFilterTypeId}&callback=?",
            dataType: "json",
            type: "GET"
        });        
        
        amplify.request.define("getTargetFilterGameName", "ajax", {
            url: swconstants.serverUrl + "/api/targetfilterapi/getgamename?gameid={gameId}&callback=?",
            dataType: "json",
            type: "GET"
        });

        amplify.request.define("getTargetFilterClubName", "ajax", {
            url: swconstants.serverUrl + "/api/targetfilterapi/getclubname?clubid={clubId}&callback=?",
            dataType: "json",
            type: "GET"
        });        

        amplify.request.define("getTargetFilterLeagueName", "ajax", {
            url: swconstants.serverUrl + "/api/targetfilterapi/getleaguename?leagueid={leagueId}&callback=?",
            dataType: "json",
            type: "GET"
        });

        amplify.request.define("getTargetFilterLeagueCategoryName", "ajax", {
            url: swconstants.serverUrl + "/api/targetfilterapi/getleaguecategoryname?leaguecategoryid={leagueCategoryId}&callback=?",
            dataType: "json",
            type: "GET"
        });

        amplify.request.define("getInfoItemForEditView", "ajax", {
            url: swconstants.serverUrl + "/api/infoitemapi/getinfoitemforeditview/?infoitemtype={infoItemType}&infoitemid={infoItemId}&callback=?",
            dataType: "json",
            type: "GET"
        });        

        amplify.request.define("getInfoItemPagesForImport", "ajax", {
            url: swconstants.serverUrl + "/api/infoitemapi/getInfoItemPagesForImport/?leagueorganizerid={leagueOrganizerId}&pageid={pageId}&callback=?",
            dataType: "json",
            type: "GET"
        });

        amplify.request.define("getInfoItemPostForImport", "ajax", {
            url: swconstants.serverUrl + "/api/infoitemapi/getInfoItemPostForImport/?leagueorganizerid={leagueOrganizerId}&pageid={pageId}&callback=?",
            dataType: "json",
            type: "GET"
        });

        amplify.request.define("getInfoItemForDetailsView", "ajax", {
            url: swconstants.serverUrl + "/api/infoitemapi/getinfoitemfordetailsview/?infoitemid={infoItemId}&callback=?",
            dataType: "json",
            type: "GET"
        });

        amplify.request.define("getMemberAccountInfo", "ajax", {
            url: swconstants.serverUrl + "/api/memberapi/getmemberaccountinfo/?callback=?",
            dataType: "json",
            type: "GET"
        });

        amplify.request.define("getMemberPurchases", "ajax", {
            url: swconstants.serverUrl + "/api/memberapi/getmemberpurchases/?callback=?",
            dataType: "json",
            type: "GET"
        });

        amplify.request.define("getSignedAgreements", "ajax", {
            url: swconstants.serverUrl + "/api/agreementapi/getsignedagreements/?callback=?",
            dataType: "json",
            type: "GET"
        });

        amplify.request.define("generateChangeEmailRequest", "ajax", {
            url: swconstants.serverUrl + "/api/memberapi/generatechangeemailrequest/?memberid={memberId}&email={email}&callback=?",
            dataType: "json",
            type: "GET"
        });

        amplify.request.define("generateChangePhoneNumberRequest", "ajax", {
            url: swconstants.serverUrl + "/api/memberapi/generatechangephonenumberrequest/?memberid={memberId}&countrycodeprefix={countryCodePrefix}&phonenumber={phoneNumber}&callback=?",
            dataType: "json",
            type: "GET"
        });

        amplify.request.define("verifyEmailChange", "ajax", {
            url: swconstants.serverUrl + "/api/memberapi/verifyemailchange/?verificationcode={verificationCode}&callback=?",
            dataType: "json",
            type: "GET"
        });

        amplify.request.define("verifyPhoneNumberChange", "ajax", {
            url: swconstants.serverUrl + "/api/memberapi/verifyphonenumberchange/?verificationcode={verificationCode}&callback=?",
            dataType: "json",
            type: "GET"
        });

        amplify.request.define("getMemberForAdminEdit", "ajax", {
            url: swconstants.serverUrl + "/api/adminmembersapi/getmemberforadminedit/?memberid={memberId}&callback=?",
            dataType: "json",
            type: "GET"
        });

        amplify.request.define("getMemberForMemberDetails", "ajax", {
            url: swconstants.serverUrl + "/api/memberapi/getmemberformemberdetails/?id={memberId}&callback=?",
            dataType: "json",
            type: "GET"
        });

        amplify.request.define("checkIfTeamPlayerRequireGuardians", "ajax", {
            url: swconstants.serverUrl + "/api/teamadminapi/checkifteamplayerrequireguardians/?id={id}&callback=?",
            dataType: "json",
            type: "GET"
        });

        amplify.request.define("getTimelineItem", "ajax", {
            url: swconstants.serverUrl + "/api/followgameapi/gettimelineitem/?gameid={gameId}&livetimelineitemid={liveTimelineItemID}&livetimelineitemtypeid={liveTimelineItemTypeID}&callback=?",
            dataType: "json",
            type: "GET"
        });

        amplify.request.define("getTimelineBlurb", "ajax", {
            url: swconstants.serverUrl + "/api/followgameapi/gettimelineblurb/?gameid={gameId}&livetimelineitemid={liveTimelineItemID}&livetimelineitemtypeid={liveTimelineItemTypeID}&callback=?",
            dataType: "json",
            type: "GET"
        });

        amplify.request.define("getAzureMediaUploadInfo", "ajax", {
            url: swconstants.serverUrl + "/api/videoapi/getazuremediauploadinfo/?uploadassetid={uploadAssetId}&containertype={containerType}&callback=?",
            dataType: "json",
            type: "GET"
        });

        amplify.request.define("postPicture", "ajax", {
            url: swconstants.serverUrl + "/api/pictureapi/post",
            dataType: "json",
            type: "POST",
            contentType: 'application/json; charset=utf-8'
        });

        amplify.request.define("postVideo", "ajax", {
            url: swconstants.serverUrl + "/api/videoapi/post",
            dataType: "json",
            type: "POST",
            contentType: 'application/json; charset=utf-8'
        });

        amplify.request.define("postGameVideo", "ajax", {
            url: swconstants.serverUrl + "/api/gamevideoapi/post",
            dataType: "json",
            type: "POST",
            contentType: 'application/json; charset=utf-8'
        });

        amplify.request.define("postPartnerFeatureVideo", "ajax", {
            url: swconstants.serverUrl + "/api/partnerfeatureapi/postvideo",
            dataType: "json",
            type: "POST",
            contentType: 'application/json; charset=utf-8'
        });                

        amplify.request.define("searchMemberByEmailAndPhone", "ajax", {
            url: swconstants.serverUrl + "/api/teamapi/searchmemberbyemailandphone/?email={email}&phonenumber={phonenumber}&callback=?",
            dataType: "json",
            type: "GET"
        });

        amplify.request.define("searchMemberByName", "ajax", {
            url: swconstants.serverUrl + "/api/teamapi/searchmemberbyname/?firstname={firstname}&lastname={lastname}&callback=?",
            dataType: "json",
            type: "GET"
        });

        amplify.request.define("searchPlayerTeamStaffRefereeByNameEmailPhone", "ajax", {
            url: swconstants.serverUrl + "/api/teamapi/searchplayerteamstaffrefereebynameemailphone/?firstname={firstname}&lastname={lastname}&email={email}&phone={phone}&teamid={teamid}&callback=?",
            dataType: "json",
            type: "GET"
        });

        amplify.request.define("getMoreTimelineBlurbs", "ajax", {
            url: swconstants.serverUrl + "/api/followgameapi/getmoretimelineblurbs/?gameid={GameID}&lasttimelineitem={LastTimelineItem}&lastitemid={LastItemID}&callback=?",
            dataType: "json",
            type: "GET"
        });

        amplify.request.define("getMoreTeamInfoItems", "ajax", {
            url: swconstants.serverUrl + "/api/teamapi/getmoreinfoitems/?teamid={teamId}&lastinfoitemid={lastInfoItemId}&callback=?",
            dataType: "json",
            type: "GET"
        });

        amplify.request.define("getMoreManagedTeamInfoItems", "ajax", {
            url: swconstants.serverUrl + "/api/teamapi/getmoremanagedinfoitems/?teamid={teamId}&lastinfoitemid={lastInfoItemId}&published={published}&callback=?",
            dataType: "json",
            type: "GET"
        });

        amplify.request.define("getMoreClubInfoItems", "ajax", {
            url: swconstants.serverUrl + "/api/clubapi/getmoreinfoitems/?clubid={clubId}&lastinfoitemid={lastInfoItemId}&callback=?",
            dataType: "json",
            type: "GET"
        });

        amplify.request.define("getMoreManagedClubInfoItems", "ajax", {
            url: swconstants.serverUrl + "/api/clubapi/getmoremanagedinfoitems/?clubid={clubId}&lastinfoitemid={lastInfoItemId}&published={published}&callback=?",
            dataType: "json",
            type: "GET"
        });

        amplify.request.define("getMoreLeagueOrganizerInfoItems", "ajax", {
            url: swconstants.serverUrl + "/api/leagueorganizerapi/getmoreinfoitems/?leagueorganizerid={leagueOrganizerId}&lastinfoitemid={lastInfoItemId}&callback=?",
            dataType: "json",
            type: "GET"
        });

        amplify.request.define("getMoreManagedLeagueOrganizerInfoItems", "ajax", {
            url: swconstants.serverUrl + "/api/leagueorganizerapi/getmoremanagedinfoitems/?leagueorganizerid={leagueOrganizerId}&lastinfoitemid={lastInfoItemId}&published={published}&callback=?",
            dataType: "json",
            type: "GET"
        });

        amplify.request.define("getTipInfoItems", "ajax", {
            url: swconstants.serverUrl + "/api/tipapi/getinfoitems/?callback=?",
            dataType: "json",
            type: "GET"
        });

        amplify.request.define("getManagedTipInfoItems", "ajax", {
            url: swconstants.serverUrl + "/api/tipapi/getmanagedinfoitems/?callback=?",
            dataType: "json",
            type: "GET"
        });

        amplify.request.define("initClub", "ajax", {
            url: swconstants.serverUrl + "/api/clubapi/initclub/?clubid={clubId}&callback=?",
            dataType: "json",
            type: "GET",
            decoder: function (data, status, xhr, success, error) {
                if (xhr.status < 300) {
                    success(data);
                }
                else {
                    error(status, xhr);
                }
            }
        });

        amplify.request.define("initClubTeams", "ajax", {
            url: swconstants.serverUrl + "/api/clubapi/initclubteams/?clubid={clubId}&callback=?",
            dataType: "json",
            type: "GET",
            decoder: function (data, status, xhr, success, error) {
                if (xhr.status < 300) {
                    success(data);
                }
                else {
                    error(status, xhr);
                }
            }
        });

        amplify.request.define("initClubPicsAndVideos", "ajax", {
            url: swconstants.serverUrl + "/api/clubapi/initclubpicsandvideos/?clubid={clubId}&callback=?",
            dataType: "json",
            type: "GET",
            decoder: function (data, status, xhr, success, error) {
                if (xhr.status < 300) {
                    success(data);
                }
                else {
                    error(status, xhr);
                }
            }
        });

        amplify.request.define("initClubBillboard", "ajax", {
            url: swconstants.serverUrl + "/api/clubadminapi/initclubbillboard/?clubid={clubId}&callback=?",
            dataType: "json",
            type: "GET"
        });        

        amplify.request.define("initClubPartners", "ajax", {
            url: swconstants.serverUrl + "/api/clubapi/initclubpartners/?clubid={clubId}&callback=?",
            dataType: "json",
            type: "GET"
        });        

        amplify.request.define("initTeamPartners", "ajax", {
            url: swconstants.serverUrl + "/api/teamapi/initteampartners/?teamid={teamId}&callback=?",
            dataType: "json",
            type: "GET"
        });                

        var
            createMemberFromMemberRequest = function (id, callbacks) {
                return amplify.request({
                    resourceId: 'createMemberFromMemberRequest',
                    data: {
                        id: id
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            connectMemberToPlayer = function (id, callbacks) {
                return amplify.request({
                    resourceId: 'connectMemberToPlayer',
                    data: {
                        id: id
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            connectMemberToTeamStaff = function (id, callbacks) {
                return amplify.request({
                    resourceId: 'connectMemberToTeamStaff',
                    data: {
                        id: id
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            sendTeamPartnerPaymentDossier = function (teamPartnerId, callbacks) {
                return amplify.request({
                    resourceId: 'sendTeamPartnerPaymentDossier',
                    data: {
                        teamPartnerId: teamPartnerId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            sendIndividualInterviewRequest = function (interviewRequestId, callbacks) {
                return amplify.request({
                    resourceId: 'sendIndividualInterviewRequest',
                    data: {
                        interviewRequestId: interviewRequestId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            insertSocialEntityView = function (id) {
                return amplify.request({
                    resourceId: 'insertSocialEntityView',
                    data: {
                        id: id
                    }
                });
            },

            insertSystemAdministrator = function (id, callbacks) {
                return amplify.request({
                    resourceId: 'insertSystemAdministrator',
                    data: {
                        id: id
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            verifyPost = function (id, callbacks) {
                return amplify.request({
                    resourceId: 'verifyPost',
                    data: {
                        id: id
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            updateHideTimelineComments = function (hideTimelineComments, callbacks) {
                return amplify.request({
                    resourceId: 'updateHideTimelineComments',
                    data: {
                        hideTimelineComments: hideTimelineComments
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            generatePayoutsData = function (endDate) {
                return $.ajax({
                    url: swconstants.serverUrl + "/api/adminpayoutsapi/generatepayoutsdata/?enddate=" + endDate + "&callback=?",
                    type: "POST",
                    datatype: "jsonp",
                    processData: false,
                    contentType: "application/json; charset=utf-8"
                });
            },

            sendClubPayments = function (paymentId, callbacks) {
                return amplify.request({
                    resourceId: 'sendClubPayments',
                    data: {
                        paymentId: paymentId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            disconnectHighlightFromEvent = function (erEventId, sportId, callbacks) {
                return amplify.request({
                    resourceId: 'disconnectHighlightFromEvent',
                    data: {
                        erEventId: erEventId,
                        sportId: sportId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            resetTeam = function (teamId, callbacks) {
                return amplify.request({
                    resourceId: 'resetTeam',
                    data: {
                        teamId: teamId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            addRefereeToGame = function (gameId, refereeId, callbacks) {
                return amplify.request({
                    resourceId: 'addRefereeToGame',
                    data: {
                        gameId: gameId,
                        refereeId: refereeId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            acceptGameRequest = function (id, callbacks) {
                return amplify.request({
                    resourceId: 'acceptGameRequest',
                    data: {
                        id: id
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            updateGameLineUp = function (_data, callbacks) {
                return amplify.request({
                    resourceId: 'updateGameLineUp',
                    data: ko.toJSON(_data),
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            updateLeagueTable = function (leagueId, callbacks) {
                return amplify.request({
                    resourceId: 'updateLeagueTable',
                    data: {
                        leagueId: leagueId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            calculatePlayerStatistics = function (leagueId, callbacks) {
                return amplify.request({
                    resourceId: 'calculatePlayerStatistics',
                    data: {
                        leagueId: leagueId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            calculateGoalkeeperStatistics = function (leagueId, callbacks) {
                return amplify.request({
                    resourceId: 'calculateGoalkeeperStatistics',
                    data: {
                        leagueId: leagueId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            publishGameTeamRoster = function (param) {
                var data = JSON.stringify(param);

                //var _data = {
                //    GameTeamRosterID: gameTeamRosterId,
                //    PublishNow: publishNow,
                //    PublishAtGameStart: publishAtGameStart

                //};
                //var data = ko.toJSON(_data);
                return $.ajax({
                    url: swconstants.serverUrl + "/api/gameteamrosterapi/publishgameteamroster/?callback=?",
                    type: "POST",
                    data: data,
                    datatype: "jsonp",
                    processData: false,
                    contentType: "application/json; charset=utf-8"
                });
            },

            updatePublishTime = function (param) {
                var data = JSON.stringify(param);

                return $.ajax({
                    url: swconstants.serverUrl + "/api/gameteamrosterapi/updatepublishtime/?callback=?",
                    type: "POST",
                    data: data,
                    datatype: "jsonp",
                    processData: false,
                    contentType: "application/json; charset=utf-8"
                });
            },

            publishGameLineUp = function (gameLineUpId, publishNow, publishAtGameStart) {
                var _data = {
                    GameLineUpID: gameLineUpId,
                    PublishNow: publishNow,
                    PublishAtGameStart: publishAtGameStart

                };
                var data = ko.toJSON(_data);
                return $.ajax({
                    url: swconstants.serverUrl + "/api/gamelineupapi/publishgamelineup/?callback=?",
                    type: "POST",
                    data: data,
                    datatype: "jsonp",
                    processData: false,
                    contentType: "application/json; charset=utf-8"
                });
            },

            createLoginForExternalSystem = function (externalDataSourceId, userName, password) {
                var _data = {
                    ExternalDataSourceID: externalDataSourceId,
                    Username: userName,
                    Password: password

                };
                var data = ko.toJSON(_data);
                return $.ajax({
                    url: swconstants.serverUrl + "/api/memberapi/createloginforexternalsystem/?callback=?",
                    type: "POST",
                    data: data,
                    datatype: "jsonp",
                    processData: false,
                    contentType: "application/json; charset=utf-8"
                });
            },

            synchronizeGameTeamRoster = function (gameTeamRoster) {
                var data = JSON.stringify(gameTeamRoster);

                return $.ajax({
                    url: swconstants.serverUrl + "/api/gameteamrosterapi/synchronizegameteamroster/?callback=?",
                    type: "POST",
                    data: data,
                    datatype: "jsonp",
                    processData: false,
                    contentType: "application/json; charset=utf-8"
                });
            },

            validateExternalLogin = function (externalDatasourceId, externalCredentialsId, encryptionKey) {
                var _data = {
                    ExternalDatasourceID: externalDatasourceId,
                    ExternalCredentialsID: externalCredentialsId,
                    EncryptionKey: encryptionKey
                };
                var data = ko.toJSON(_data);
                return $.ajax({
                    url: swconstants.serverUrl + "/api/memberapi/validateexternallogin/?callback=?",
                    type: "POST",
                    data: data,
                    datatype: "jsonp",
                    processData: false,
                    contentType: "application/json; charset=utf-8"
                });
            },

            searchArenas = function (searchString, callbacks) {
                return amplify.request({
                    resourceId: 'searchArenas',
                    data: {
                        searchString: searchString
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            searchClubs = function (searchString, callbacks) {
                return amplify.request({
                    resourceId: 'searchClubs',
                    data: {
                        searchString: searchString
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            searchClubTeamStaff = function (teamId, name, personalIdentityNumber, genderId, mobilePhone, countryId) {
                var _data = {
                    TeamID: teamId,
                    PersonalIdentityNumber: personalIdentityNumber,
                    Name: name,
                    GenderID: genderId,
                    MobilePhone: mobilePhone,
                    CountryID: countryId
                };
                var data = ko.toJSON(_data);
                return $.ajax({
                    url: swconstants.serverUrl + "/api/teamadminapi/searchclubteamstaff/?callback=?",
                    type: "POST",
                    data: data,
                    datatype: "jsonp",
                    processData: false,
                    contentType: "application/json; charset=utf-8"
                });
            },

            searchStaffByPhone = function (teamId, mobilePhone, countryId) {
                var _data = {
                    TeamID: teamId,
                    MobilePhone: mobilePhone,
                    CountryID: countryId
                };
                var data = ko.toJSON(_data);
                return $.ajax({
                    url: swconstants.serverUrl + "/api/teamadminapi/searchstaffbyphone/?callback=?",
                    type: "POST",
                    data: data,
                    datatype: "jsonp",
                    processData: false,
                    contentType: "application/json; charset=utf-8"
                });
            },
            
            searchClubTeamAdmin = function (clubId, name, personalIdentityNumber, genderId, mobilePhone, countryId) {
                var _data = {
                    ClubID: clubId,
                    PersonalIdentityNumber: personalIdentityNumber,
                    Name: name,
                    GenderID: genderId,
                    CountryID: countryId,
                    MobilePhone: mobilePhone
                };
                var data = ko.toJSON(_data);
                return $.ajax({
                    url: swconstants.serverUrl + "/api/clubadminapi/searchclubteamadmin/?callback=?",
                    type: "POST",
                    data: data,
                    datatype: "jsonp",
                    processData: false,
                    contentType: "application/json; charset=utf-8"
                });
            },

            searchClubTeamAdminByPhoneNumber = function (clubId, mobilePhone, countryId) {
                var _data = {
                    ClubID: clubId,                    
                    CountryID: countryId,
                    MobilePhone: mobilePhone
                };
                var data = ko.toJSON(_data);
                return $.ajax({
                    url: swconstants.serverUrl + "/api/clubadminapi/searchclubteamadminbyphonenumber/?callback=?",
                    type: "POST",
                    data: data,
                    datatype: "jsonp",
                    processData: false,
                    contentType: "application/json; charset=utf-8"
                });
            },

            searchClubPlayers = function (teamId, name, personalIdentityNumber, genderId, birthYearFrom, birthYearTo) {
                var _data = {
                    TeamID: teamId,
                    Name: name,
                    PersonalIdentityNumber: personalIdentityNumber,
                    GenderID: genderId,
                    BirthYearFrom: birthYearFrom,
                    BirthYearTo: birthYearTo
                };
                var data = ko.toJSON(_data);
                return $.ajax({
                    url: swconstants.serverUrl + "/api/teamadminapi/searchclubplayers/?callback=?",
                    type: "POST",
                    data: data,
                    datatype: "jsonp",
                    processData: false,
                    contentType: "application/json; charset=utf-8"
                });
            },

            createSwishPayment = function (teamId, gameId, phoneNumber, subscriptionType, voucherId, message) {
                var _data = {
                    TeamID: teamId,
                    GameID: gameId,
                    PhoneNumber: phoneNumber,
                    SubscriptionType: subscriptionType,
                    VoucherID: voucherId,
                    Message: message
                };
                var data = ko.toJSON(_data);
                return $.ajax({
                    url: swconstants.serverUrl + "/api/swishapi/createpaymentasync/?callback=?",
                    type: "POST",
                    data: data,
                    datatype: "jsonp",
                    processData: false,
                    contentType: "application/json; charset=utf-8"
                });
            },

            createStripePayment = function (teamId, entityId, domainType, subscriptionType, voucherId) {
                var _data = {
                    TeamID: teamId,
                    EntityID: entityId,
                    DomainType: domainType,
                    SubscriptionType: subscriptionType,
                    VoucherID: voucherId
                };
                var data = ko.toJSON(_data);
                return $.ajax({
                    url: swconstants.serverUrl + "/api/stripeapi/createpaymentasync/?callback=?",
                    type: "POST",
                    data: data,
                    datatype: "jsonp",
                    processData: false,
                    contentType: "application/json; charset=utf-8"
                });
            },

            createLiveStreamVoucher = function (payeePaymentReference) {
                var _data = {
                    PayeePaymentReference: payeePaymentReference
                };
                var data = ko.toJSON(_data);
                return $.ajax({
                    url: swconstants.serverUrl + "/api/livestreamapi/createlivestreamvoucher/?callback=?",
                    type: "POST",
                    data: data,
                    datatype: "jsonp",
                    processData: false,
                    contentType: "application/json; charset=utf-8"
                });
            },

            createLeagueOrganizerStreamPackage = function (_data) {
                var data = ko.toJSON(_data);
                return $.ajax({
                    url: swconstants.serverUrl + "/api/leagueorganizeradminapi/createstreampackage/?callback=?",
                    type: "POST",
                    data: data,
                    datatype: "jsonp",
                    processData: false,
                    contentType: "application/json; charset=utf-8"
                });
            },

            synchronizeGamePlayer = function (gamePlayerId, externalDatasourceId, externalCredentialsId, encryptionKey) {
                var _data = {
                    GamePlayerID: gamePlayerId,
                    ExternalDatasourceID: externalDatasourceId,
                    ExternalCredentialsID: externalCredentialsId,
                    EncryptionKey: encryptionKey
                };

                var data = ko.toJSON(_data);
                return $.ajax({
                    url: swconstants.serverUrl + "/api/gameplayerapi/synchronizegameplayer/?callback=?",
                    type: "POST",
                    data: data,
                    datatype: "jsonp",
                    processData: false,
                    contentType: "application/json; charset=utf-8"
                });
            },

            synchronizeGameTeamStaff = function (gameTeamStaffId, externalDatasourceId, externalCredentialsId, encryptionKey) {
                var _data = {
                    GameTeamStaffID: gameTeamStaffId,
                    ExternalDatasourceID: externalDatasourceId,
                    ExternalCredentialsID: externalCredentialsId,
                    EncryptionKey: encryptionKey
                };

                var data = ko.toJSON(_data);
                return $.ajax({
                    url: swconstants.serverUrl + "/api/gameteamstaffapi/synchronizegameteamstaff/?callback=?",
                    type: "POST",
                    data: data,
                    datatype: "jsonp",
                    processData: false,
                    contentType: "application/json; charset=utf-8"
                });
            },

            insertClubAdministrator = function (clubId, memberId) {
                var _data = {
                    ClubID: clubId,
                    MemberID: memberId
                };
                var data = ko.toJSON(_data);
                return $.ajax({
                    url: swconstants.serverUrl + "/api/clubadminapi/insertclubadministrator/?callback=?",
                    type: "POST",
                    data: data,
                    datatype: "jsonp",
                    processData: false,
                    contentType: "application/json; charset=utf-8"
                });
            },

            insertClubPlayer = function (teamId, playerId, shirtNumber, playerPositionId) {
                var _data = {
                    TeamID: teamId,
                    PlayerID: playerId,
                    ShirtNumber: shirtNumber,
                    PlayerPositionID: playerPositionId
                };
                var data = ko.toJSON(_data);
                return $.ajax({
                    url: swconstants.serverUrl + "/api/teamadminapi/insertclubplayer/?callback=?",
                    type: "POST",
                    data: data,
                    datatype: "jsonp",
                    processData: false,
                    contentType: "application/json; charset=utf-8"
                });
            },

            insertClubStaff = function (teamId, teamStaffId, clubPersonId, teamStaffRoleId, memberId) {
                var _data = {
                    TeamID: teamId,
                    TeamStaffID: teamStaffId,
                    ClubPersonID: clubPersonId,
                    TeamStaffRoleID: teamStaffRoleId,
                    MemberID: memberId
                };
                var data = ko.toJSON(_data);
                return $.ajax({
                    url: swconstants.serverUrl + "/api/teamadminapi/insertclubstaff/?callback=?",
                    type: "POST",
                    data: data,
                    datatype: "jsonp",
                    processData: false,
                    contentType: "application/json; charset=utf-8"
                });
            },

            insertTeamLiveReporter = function (teamId, memberId) {
                var _data = {
                    TeamID: teamId,
                    MemberID: memberId
                };
                var data = ko.toJSON(_data);
                return $.ajax({
                    url: swconstants.serverUrl + "/api/teamlivereporterapi/post/?callback=?",
                    type: "POST",
                    data: data,
                    datatype: "jsonp",
                    processData: false,
                    contentType: "application/json; charset=utf-8"
                });
            },

            insertTeamAdmin = function (teamId, memberId) {
                var _data = {
                    TeamID: teamId,
                    MemberID: memberId
                };
                var data = ko.toJSON(_data);
                return $.ajax({
                    url: swconstants.serverUrl + "/api/teamadministratorapi/post/?callback=?",
                    type: "POST",
                    data: data,
                    datatype: "jsonp",
                    processData: false,
                    contentType: "application/json; charset=utf-8"
                });
            },

            insertClubPartner = function (clubPartner) {
                var data = JSON.stringify(clubPartner);

                return $.ajax({
                    url: swconstants.serverUrl + "/api/clubadminapi/insertclubpartner/?callback=?",
                    type: "POST",
                    data: data,
                    datatype: "jsonp",
                    processData: false,
                    contentType: "application/json; charset=utf-8"
                });
            },

            insertLeagueOrganizerPartner = function (leagueOrganizerPartner) {
                var data = JSON.stringify(leagueOrganizerPartner);
                return $.ajax({
                    url: swconstants.serverUrl + "/api/leagueorganizeradminapi/insertleagueorganizerpartner/?callback=?",
                    type: "POST",
                    data: data,
                    datatype: "jsonp",
                    processData: false,
                    contentType: "application/json; charset=utf-8"
                });
            },

            createAudience = function (_data) {
                var data = JSON.stringify(_data);
                return $.ajax({
                    url: swconstants.serverUrl + "/api/targetfilterapi/createaudience/?callback=?",
                    type: "POST",
                    data: data,
                    datatype: "jsonp",
                    processData: false,
                    contentType: "application/json; charset=utf-8"
                });
            },

            createTargetFilter = function (_data) {
                var data = JSON.stringify(_data);
                return $.ajax({
                    url: swconstants.serverUrl + "/api/targetfilterapi/createtargetfilter/?callback=?",
                    type: "POST",
                    data: data,
                    datatype: "jsonp",
                    processData: false,
                    contentType: "application/json; charset=utf-8"
                });
            },

            getInterviewRequests = function (gameId, templateId, from, to, useProcedure, saveRequests) {
                var _data = {
                    GameID: gameId,
                    TemplateID: templateId,
                    From: from,
                    To: to,
                    UseProcedure: useProcedure,
                    SaveRequests: saveRequests
                };
                var data = ko.toJSON(_data);

                return $.ajax({
                    url: swconstants.serverUrl + "/api/interviewadminapi/getinterviewrequests/?callback=?",
                    type: "POST",
                    data: data,
                    datatype: "jsonp",
                    processData: false,
                    contentType: "application/json; charset=utf-8"
                });
            },


            getUnsentInterviewRequests = function (gameId, templateId, from, to) {
                var _data = {
                    GameID: gameId,
                    TemplateID: templateId,
                    From: from,
                    To: to,
                    UseProcedure: false,
                    SaveRequests: false
                };
                var data = ko.toJSON(_data);

                return $.ajax({
                    url: swconstants.serverUrl + "/api/interviewadminapi/getunsentrequests/?callback=?",
                    type: "POST",
                    data: data,
                    datatype: "jsonp",
                    processData: false,
                    contentType: "application/json; charset=utf-8"
                });
            },

            getSentInterviewRequests = function (lastRequestId, templateId, filterText, status, answerStatus, valid, amount) {
                var _data = {
                    LastRequestID: lastRequestId,
                    TemplateID: templateId,
                    FilterText: filterText,
                    Status: status,
                    AnswerStatus: answerStatus,
                    Valid: valid,
                    Amount: amount
                };
                var data = ko.toJSON(_data);

                return $.ajax({
                    url: swconstants.serverUrl + "/api/interviewadminapi/getsentrequests/?callback=?",
                    type: "POST",
                    data: data,
                    datatype: "jsonp",
                    processData: false,
                    contentType: "application/json; charset=utf-8"
                });
            },

            sendInterviewRequests = function (gameId, templateId, from, to) {
                var _data = {
                    GameID: gameId,
                    TemplateID: templateId,
                    From: from,
                    To: to,
                    UseProcedure: false,
                    SaveRequests: false
                };
                var data = ko.toJSON(_data);

                return $.ajax({
                    url: swconstants.serverUrl + "/api/interviewadminapi/sendrequests/?callback=?",
                    type: "POST",
                    data: data,
                    datatype: "jsonp",
                    processData: false,
                    contentType: "application/json; charset=utf-8"
                });
            },

            initGamePlayerForDetailsView = function (_data) {
                var data = JSON.stringify(_data);
                return $.ajax({
                    url: swconstants.serverUrl + "/api/gameplayerapi/initgameplayerfordetailsview/?callback=?",
                    type: "POST",
                    data: data,
                    datatype: "jsonp",
                    processData: false,
                    contentType: "application/json; charset=utf-8"
                });
            },

            initGameTeamStaffForDetailsView = function (_data) {
                var data = JSON.stringify(_data);
                return $.ajax({
                    url: swconstants.serverUrl + "/api/gameteamstaffapi/initgameteamstafffordetailsview/?callback=?",
                    type: "POST",
                    data: data,
                    datatype: "jsonp",
                    processData: false,
                    contentType: "application/json; charset=utf-8"
                });
            },

            updateClubBillboard = function (clubBillboard, callbacks) {
                return amplify.request({
                    resourceId: 'updateClubBillboard',
                    data: JSON.stringify(clubBillboard),
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            insertGamePlayersForGame = function (_data) {
                var data = JSON.stringify(_data);
                return $.ajax({
                    url: swconstants.serverUrl + "/api/gameplayerapi/insertgameplayersforgame/?callback=?",
                    type: "POST",
                    data: data,
                    datatype: "jsonp",
                    processData: false,
                    contentType: "application/json; charset=utf-8"
                });
            },

            insertGameTeamStaffForGame = function (_data) {
                var data = JSON.stringify(_data);
                return $.ajax({
                    url: swconstants.serverUrl + "/api/gameteamstaffapi/insertgameteamstaffforgame/?callback=?",
                    type: "POST",
                    data: data,
                    datatype: "jsonp",
                    processData: false,
                    contentType: "application/json; charset=utf-8"
                });
            },

            insertGameGoalieStatistics = function (_data) {
                var data = JSON.stringify(_data);
                return $.ajax({
                    url: swconstants.serverUrl + "/api/gamegoaliestatisticapi/insertgamegoaliestatistics/?callback=?",
                    type: "POST",
                    data: data,
                    datatype: "jsonp",
                    processData: false,
                    contentType: "application/json; charset=utf-8"
                });
            },

            insertGoalStatistics = function (gameId) {
                return $.ajax({
                    url: swconstants.serverUrl + "/api/gamegoaliestatisticapi/insertgoalstatistics/?gameid=" + gameId + "&callback=?",
                    type: "POST",
                    datatype: "jsonp",
                    processData: false,
                    contentType: "application/json; charset=utf-8"
                });
            },

            initGameTeamRoster = function (_data) {
                var data = JSON.stringify(_data);
                return $.ajax({
                    url: swconstants.serverUrl + "/api/gameteamrosterapi/initgameteamroster/?callback=?",
                    type: "POST",
                    data: data,
                    datatype: "jsonp",
                    processData: false,
                    contentType: "application/json; charset=utf-8"
                });
            },

            getGameTeamRosterHeader = function (_data) {
                var data = JSON.stringify(_data);
                return $.ajax({
                    url: swconstants.serverUrl + "/api/gameteamrosterapi/getgameteamrosterheader/?callback=?",
                    type: "POST",
                    data: data,
                    datatype: "jsonp",
                    processData: false,
                    contentType: "application/json; charset=utf-8"
                });
            },

            updateGamePlayers = function (_data) {
                var data = JSON.stringify(_data);
                return $.ajax({
                    url: swconstants.serverUrl + "/api/gameplayerapi/updategameplayers/?callback=?",
                    type: "PUT",
                    data: data,
                    datatype: "jsonp",
                    processData: false,
                    contentType: "application/json; charset=utf-8"
                });
            },

            updateGameTeamStaff = function (_data) {
                var data = JSON.stringify(_data);
                return $.ajax({
                    url: swconstants.serverUrl + "/api/gameteamstaffapi/updategameteamstaff/?callback=?",
                    type: "PUT",
                    data: data,
                    datatype: "jsonp",
                    processData: false,
                    contentType: "application/json; charset=utf-8"
                });
            },

            updateClub = function (club) {
                var data = JSON.stringify(club);
                return $.ajax({
                    url: swconstants.serverUrl + "/api/clubadminapi/updateclub/?callback=?",
                    type: "PUT",
                    data: data,
                    datatype: "jsonp",
                    processData: false,
                    contentType: "application/json; charset=utf-8"
                });
            },

            updateClubPartner = function (clubPartner) {
                var data = JSON.stringify(clubPartner);
                return $.ajax({
                    url: swconstants.serverUrl + "/api/clubadminapi/updateclubpartner/?callback=?",
                    type: "PUT",
                    data: data,
                    datatype: "jsonp",
                    processData: false,
                    contentType: "application/json; charset=utf-8"
                });
            },

            updateLeagueOrganizerPartner = function (leagueOrganizerPartner) {
                var data = JSON.stringify(leagueOrganizerPartner);
                return $.ajax({
                    url: swconstants.serverUrl + "/api/leagueorganizeradminapi/updateleagueorganizerpartner/?callback=?",
                    type: "PUT",
                    data: data,
                    datatype: "jsonp",
                    processData: false,
                    contentType: "application/json; charset=utf-8"
                });
            },

            updatePartnerFeaturePlacements = function (partnerFeatureId, placements) {
                var _data = {
                    PartnerFeatureID: partnerFeatureId,
                    Placements: placements
                };
                var data = ko.toJSON(_data);
                return $.ajax({
                    url: swconstants.serverUrl + "/api/partnerfeatureapi/updatepartnerfeatureplacements/?callback=?",
                    type: "PUT",
                    data: data,
                    datatype: "jsonp",
                    processData: false,
                    contentType: "application/json; charset=utf-8"
                });
            },

            updateTeamMemberProfilePicture = function (teamId, teamMemberType, teamMemberId, pictureBase64) {
                var _data = {
                    TeamID: teamId,
                    TeamMemberType: teamMemberType,
                    TeamMemberID: teamMemberId,
                    PictureBase64: pictureBase64
                };
                var data = ko.toJSON(_data);
                return $.ajax({
                    url: swconstants.serverUrl + "/api/teamadminapi/updateteammemberprofilepicture/?callback=?",
                    type: "POST",
                    data: data,
                    datatype: "jsonp",
                    processData: false,
                    contentType: "application/json; charset=utf-8"
                });
            },

            updateTeamMemberProfilePictureCropped = function (teamId, teamMemberType, teamMemberId, startX, startY, width, height, pictureBase64) {
                var _data = {
                    TeamID: teamId,
                    TeamMemberType: teamMemberType,
                    TeamMemberID: teamMemberId,
                    PictureBase64: pictureBase64,
                    StartX: startX,
                    StartY: startY,
                    Width: width,
                    Height: height,

                };
                var data = ko.toJSON(_data);
                return $.ajax({
                    url: swconstants.serverUrl + "/api/teamadminapi/updateteammemberprofilepicture/?callback=?",
                    type: "POST",
                    data: data,
                    datatype: "jsonp",
                    processData: false,
                    contentType: "application/json; charset=utf-8"
                });
            },

            updateTeamBanner = function (teamId, pictureBase64) {
                var _data = {
                    Id: teamId,
                    PictureBase64: pictureBase64
                };
                var data = ko.toJSON(_data);
                return $.ajax({
                    url: swconstants.serverUrl + "/api/teamapi/updatebanner/?id=" + teamId + "&callback=?",
                    type: "PUT",
                    data: data,
                    datatype: "jsonp",
                    processData: false,
                    contentType: "application/json; charset=utf-8"
                });
            },

            insertInterviewPicture = function (pictureBase64) {
                var _data = {
                    BackgroundPictureBase64: pictureBase64
                };
                var data = ko.toJSON(_data);
                return $.ajax({
                    url: swconstants.serverUrl + "/api/interviewapi/insertgenrepicture/?callback=?",
                    type: "POST",
                    data: data,
                    datatype: "jsonp",
                    processData: false,
                    contentType: "application/json; charset=utf-8"
                });
            },

            insertGameHighlight = function (teamId, liveStreamId, eventTime, secondsFromStart, highlightTypeId, highlightSourceId, description, thumbnailBase64) {
                var _data = {
                    TeamID: teamId,
                    LiveStreamID: liveStreamId,
                    EventTime: eventTime,
                    SecondsFromStart: secondsFromStart,
                    HighlightTypeID: highlightTypeId,
                    HighlightSourceID: highlightSourceId,
                    Description: description,
                    ThumbnailBase64: thumbnailBase64
                };
                var data = ko.toJSON(_data);
                return $.ajax({
                    url: swconstants.serverUrl + "/api/livestreamhighlightapi/post/?callback=?",
                    type: "POST",
                    data: data,
                    datatype: "jsonp",
                    processData: false,
                    contentType: "application/json; charset=utf-8"
                });
            },

            updateEREventWithHighlight = function (gameId, liveStreamHighlightId, EREventId) {
                var _data = {
                    GameID: gameId,
                    LiveStreamHighlightID: liveStreamHighlightId,
                    EREventID: EREventId
                };
                var data = ko.toJSON(_data);
                return $.ajax({
                    url: swconstants.serverUrl + "/api/livestreamhighlightapi/updateereventwithhighlight/?callback=?",
                    type: "PUT",
                    data: data,
                    datatype: "jsonp",
                    processData: false,
                    contentType: "application/json; charset=utf-8"
                });
            },

            updateLivestreamHighlightTime = function (liveStreamHighlightId, offset, length) {
                var _data = {
                    LiveStreamHighlightID: liveStreamHighlightId,
                    Offset: offset,
                    Length: length
                };
                var data = ko.toJSON(_data);
                return $.ajax({
                    url: swconstants.serverUrl + "/api/livestreamhighlightapi/updatelivestreamhighlighttime/?callback=?",
                    type: "PUT",
                    data: data,
                    datatype: "jsonp",
                    processData: false,
                    contentType: "application/json; charset=utf-8"
                });
            },

            insertAudienceForInfoItem = function (audienceFilterData) {
                var data = ko.toJSON(audienceFilterData);
                return $.ajax({
                    url: swconstants.serverUrl + "/api/audienceapi/insertaudienceforinfoitem/?callback=?",
                    type: "POST",
                    data: data,
                    datatype: "jsonp",
                    processData: false,
                    contentType: "application/json; charset=utf-8"
                });

                //return amplify.request({
                //    resourceId: 'insertAudienceForInfoItem',
                //    data: JSON.stringify(audienceFilterData),
                //    success: callbacks.success,
                //    error: callbacks.error
                //});
            },

            insertAudienceForPartner = function (audienceFilterData) {
                var data = ko.toJSON(audienceFilterData);
                return $.ajax({
                    url: swconstants.serverUrl + "/api/audienceapi/insertaudienceforpartner/?callback=?",
                    type: "POST",
                    data: data,
                    datatype: "jsonp",
                    processData: false,
                    contentType: "application/json; charset=utf-8"
                });
            },

            insertTargetFilterForPartner = function (targetFilterFilterData) {
                var data = ko.toJSON(targetFilterFilterData);
                return $.ajax({
                    url: swconstants.serverUrl + "/api/targetfilterapi/inserttargetfilterforpartner/?callback=?",
                    type: "POST",
                    data: data,
                    datatype: "jsonp",
                    processData: false,
                    contentType: "application/json; charset=utf-8"
                });
            },

            inviteAllTeamMembers = function (teamId, callbacks) {
                return amplify.request({
                    resourceId: 'inviteAllTeamMembers',
                    data: {
                        teamId: teamId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });

            },

            adminSearchMember = function (freeText) {
                var _data = {
                    FreeText: freeText
                };
                var data = ko.toJSON(_data);
                return $.ajax({
                    url: swconstants.serverUrl + "/api/adminmembersapi/searchmember/?callback=?",
                    type: "POST",
                    data: data,
                    datatype: "jsonp",
                    processData: false,
                    contentType: "application/json; charset=utf-8"
                });
            },

            cancelStripeSubscription = function (subscriptionId) {
                return $.ajax({
                    url: swconstants.serverUrl + "/api/stripeapi/cancelsubscription/?subscriptionid=" + subscriptionId + "&callback=?",
                    type: "POST",
                    datatype: "jsonp",
                    processData: false,
                    contentType: "application/json; charset=utf-8"
                });
            },


            addExistingMemberAsTeamStaff = function (memberId, teamId, teamStaffRoleId) {
                var _data = {
                    MemberID: memberId,
                    TeamID: teamId,
                    TeamStaffRoleID: teamStaffRoleId
                };
                var data = ko.toJSON(_data);
                return $.ajax({
                    url: swconstants.serverUrl + "/api/teamadminapi/addmemberasteamstaff/?callback=?",
                    type: "POST",
                    data: data,
                    datatype: "jsonp",
                    processData: false,
                    contentType: "application/json; charset=utf-8"
                });
            },

            addExistingMemberAsPlayer = function (memberId, teamId, playerPositionId, shirtNumber) {
                var _data = {
                    MemberID: memberId,
                    TeamID: teamId,
                    PlayerPositionID: playerPositionId,
                    ShirtNumber: shirtNumber
                };
                var data = ko.toJSON(_data);
                return $.ajax({
                    url: swconstants.serverUrl + "/api/teamadminapi/addmemberasplayer/?callback=?",
                    type: "POST",
                    data: data,
                    datatype: "jsonp",
                    processData: false,
                    contentType: "application/json; charset=utf-8"
                });
            },

            trackPartnerFeatureClick = function (partnerFeatureID, partnerFeaturePlacementID, deviceTargetID) {
                var _data = {
                    PartnerFeatureID: partnerFeatureID,
                    PartnerFeaturePlacementID: partnerFeaturePlacementID,
                    DeviceTargetID: deviceTargetID
                };
                var data = ko.toJSON(_data);
                return $.ajax({
                    url: swconstants.serverUrl + "/api/partnerfeatureapi/trackpartnerfeatureclick/?callback=?",
                    type: "POST",
                    data: data,
                    datatype: "jsonp",
                    processData: false,
                    contentType: "application/json; charset=utf-8"
                });
            },

            trackPartnerFeatureView = function (partnerFeatureId, partnerFeaturePlacementId, extraTrackingProperty, entityId, deviceTargetId) {
                var _data = {
                    PartnerFeatureID: partnerFeatureId,
                    PartnerFeaturePlacementID: partnerFeaturePlacementId,
                    ExtraTrackingProperty: extraTrackingProperty,
                    PartnerFeatureEntityID: entityId,
                    DeviceTargetID: deviceTargetId
                };
                var data = ko.toJSON(_data);
                return $.ajax({
                    url: swconstants.serverUrl + "/api/partnerfeatureapi/trackpartnerfeatureview/?callback=?",
                    type: "POST",
                    data: data,
                    datatype: "jsonp",
                    processData: false,
                    contentType: "application/json; charset=utf-8"
                });
            },

            trackPartnerFeatureViews = function (items) {
                var data = ko.toJSON(items);
                return $.ajax({
                    url: swconstants.serverUrl + "/api/partnerfeatureapi/trackpartnerfeatureviews/?callback=?",
                    type: "POST",
                    data: data,
                    datatype: "jsonp",
                    processData: false,
                    contentType: "application/json; charset=utf-8"
                });
            },

            trackPartnerFeatureViewsExternal = function (item) {
                var data = ko.toJSON(item);
                return $.ajax({
                    url: swconstants.trackingUrl + "/api/trackpartnerfeatureviews/?callback=?",
                    type: "POST",
                    data: data,
                    datatype: "jsonp",
                    processData: false,
                    contentType: "application/json; charset=utf-8"
                    //cors: true,
                    //headers: {
                    //    'Access-Control-Allow-Origin': '*',
                    //}
                });
            },

            insertUserSessionExternal = function (item) {
                var data = ko.toJSON(item);
                return $.ajax({
                    url: swconstants.trackingUrl + "/api/trackusersessions/?callback=?",
                    type: "POST",
                    data: data,
                    datatype: "jsonp",
                    processData: false,
                    contentType: "application/json; charset=utf-8"
                });
            },

            updateUserSessionExternal = function (item) {
                var data = ko.toJSON(item);
                return $.ajax({
                    url: swconstants.trackingUrl + "/api/trackusersessions/?callback=?",
                    type: "PUT",
                    data: data,
                    datatype: "jsonp",
                    processData: false,
                    contentType: "application/json; charset=utf-8"
                });
            },

            copyPartnerFeature = function (partnerFeatureId, partnerFeatureSetId) {
                var _data = {
                };
                var data = ko.toJSON(_data);
                return $.ajax({
                    url: swconstants.serverUrl + "/api/partnerfeatureapi/copypartnerfeature/?partnerfeatureid=" + partnerFeatureId + "&partnerfeaturesetid=" + partnerFeatureSetId + "&callback=?",
                    type: "POST",
                    data: data,
                    datatype: "jsonp",
                    processData: false,
                    contentType: "application/json; charset=utf-8"

                });
            },

            connectSportswikTeamToTeamsExtPlayer = function (teamID, connectTeamIDs, players, teamStaffIDs, externalplayers) {
                var _data = {
                    TeamID: teamID,
                    CopyPlayerAndTeamStaff: true,
                    ConnectTeamIDs: connectTeamIDs,
                    Players: players,
                    TeamStaffIDs: teamStaffIDs,
                    ExternalPlayers: externalplayers
                };
                var data = ko.toJSON(_data);
                //{"TeamID":202163,"CopyPlayerAndTeamStaff":true,"ConnectTeamIDs":[238694],"Players":[],"TeamStaffIDs":[]}
                return $.ajax({
                    url: swconstants.serverUrl + "/api/teamconnectapi/connectsportswikteamtoteamsextplayer/?callback=?",
                    type: "POST",
                    data: data,
                    datatype: "jsonp",
                    processData: false,
                    contentType: "application/json; charset=utf-8"

                });
            },

            connectSportswikTeamToTeams = function (teamID, connectTeamIDs, playerIDs, teamStaffIDs) {
                var _data = {
                    TeamID: teamID,
                    CopyPlayerAndTeamStaff: true,
                    ConnectTeamIDs: connectTeamIDs,
                    PlayerIDs: playerIDs,
                    TeamStaffIDs: teamStaffIDs
                };
                var data = ko.toJSON(_data);
                return $.ajax({
                    url: swconstants.serverUrl + "/api/teamconnectapi/connectsportswikteamtoteams/?callback=?",
                    type: "POST",
                    data: data,
                    datatype: "jsonp",
                    processData: false,
                    contentType: "application/json; charset=utf-8"
                });
            },

            searchForMember = function (memberID, countryCodePrefix, mobilePhone, personalIdentityNumber, ignoreUserStatus, countryId) {
                var _data = {
                    MemberID: memberID,
                    CountryCodePrefix: countryCodePrefix,
                    MobilePhone: mobilePhone,
                    PersonalIdentityNumber: personalIdentityNumber,
                    IgnoreUserStatus: ignoreUserStatus,
                    CountryID: countryId
                };
                var data = ko.toJSON(_data);
                return $.ajax({
                    url: swconstants.serverUrl + "/api/memberapi/searchformember/?callback=?",
                    type: "POST",
                    data: data,
                    datatype: "jsonp",
                    processData: false,
                    contentType: "application/json; charset=utf-8"
                });
            },

            mergeAndDeleteTeamMembers = function (teamId, memberIdToDelete, memberIdToKeep) {
                var _data = {
                    TeamID: teamId,
                    MemberIDToDelete: memberIdToDelete,
                    MemberIDToKeep: memberIdToKeep
                };
                var data = ko.toJSON(_data);
                return $.ajax({
                    url: swconstants.serverUrl + "/api/teamadminapi/mergeanddeleteteammembers/?callback=?",
                    type: "POST",
                    data: data,
                    datatype: "jsonp",
                    processData: false,
                    contentType: "application/json; charset=utf-8"
                });
            },

            insertGameLineUp = function (gameId, teamId, gameLineUpFormationId, numberOfLines) {
                var _data = {
                    GameID: gameId,
                    TeamID: teamId,
                    GameLineUpFormationID: gameLineUpFormationId,
                    NumberOfLines: numberOfLines
                };
                var data = ko.toJSON(_data);
                return $.ajax({
                    url: swconstants.serverUrl + "/api/gamelineupapi/insertgamelineup/?callback=?",
                    type: "POST",
                    data: data,
                    datatype: "jsonp",
                    processData: false,
                    contentType: "application/json; charset=utf-8"

                });
            },

            deleteMember = function (id, callbacks) {
                return amplify.request({
                    resourceId: 'deleteMember',
                    data: {
                        id: id
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            deleteClub = function (id, callbacks) {
                return amplify.request({
                    resourceId: 'deleteClub',
                    data: {
                        id: id
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            deleteClubBillboard = function (id, callbacks) {
                return amplify.request({
                    resourceId: 'deleteClubBillboard',
                    data: {
                        id: id
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            deleteClubAdministrator = function (id, callbacks) {
                return amplify.request({
                    resourceId: 'deleteClubAdministrator',
                    data: {
                        clubAdministratorId: id
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            deleteClubPartner = function (id, callbacks) {
                return amplify.request({
                    resourceId: 'deleteClubPartner',
                    data: {
                        clubPartnerId: id
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            deleteLeagueOrganizerPartner = function (id, callbacks) {
                return amplify.request({
                    resourceId: 'deleteLeagueOrganizerPartner',
                    data: {
                        leagueOrganizerPartnerId: id
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            deleteInfoItem = function (id, infoItemType, callbacks) {
                return amplify.request({
                    resourceId: 'deleteInfoItem',
                    data: {
                        Id: id,
                        infoItemType: infoItemType
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            deleteHighlightFromEREvent = function (gameId, EREventId, callbacks) {
                return amplify.request({
                    resourceId: 'deleteHighlightFromEREvent',
                    data: {
                        gameId: gameId,
                        EREventId: EREventId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            deletePartnerFeatureSet = function (id, callbacks) {
                return amplify.request({
                    resourceId: 'deletePartnerFeatureSet',
                    data: {
                        id: id
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            deletePartnerPackage = function (id, callbacks) {
                return amplify.request({
                    resourceId: 'deletePartnerPackage',
                    data: {
                        id: id
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            deleteFollower = function (id, callbacks) {
                return amplify.request({
                    resourceId: 'deleteFollower',
                    data: {
                        id: id
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            deleteLeagueOrganizerAdministrator = function (id, callbacks) {
                return amplify.request({
                    resourceId: 'deleteLeagueOrganizerAdministrator',
                    data: {
                        id: id
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            deleteTeamAdmin = function (id, callbacks) {
                return amplify.request({
                    resourceId: 'deleteTeamAdmin',
                    data: {
                        id: id
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            deleteLiveReporter = function (id, callbacks) {
                return amplify.request({
                    resourceId: 'deleteLiveReporter',
                    data: {
                        id: id
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            deleteTeamPlayer = function (id, callbacks) {
                return amplify.request({
                    resourceId: 'deleteTeamPlayer',
                    data: {
                        teamPlayerId: id
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            deleteTeamBanner = function (id, callbacks) {
                return amplify.request({
                    resourceId: 'deleteTeamBanner',
                    data: {
                        id: id
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            deleteMemberGuardian = function (id, callbacks) {
                return amplify.request({
                    resourceId: 'deleteMemberGuardian',
                    data: {
                        id: id
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            deletePlayerGuardian = function (id, callbacks) {
                return amplify.request({
                    resourceId: 'deletePlayerGuardian',
                    data: {
                        PlayerGuardianID: id
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            deleteMemberProfilePicture = function (memberId, callbacks) {
                return amplify.request({
                    resourceId: 'deleteMemberProfilePicture',
                    data: {
                        memberId: memberId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            deleteReferencePicture = function (memberId, callbacks) {
                return amplify.request({
                    resourceId: 'deleteReferencePicture',
                    data: {
                        memberId: memberId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            deleteLeagueTeam = function (id, callbacks) {
                return amplify.request({
                    resourceId: 'deleteLeagueTeam',
                    data: {
                        id: id
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            deleteTeam = function (id, callbacks) {
                return amplify.request({
                    resourceId: 'deleteTeam',
                    data: {
                        id: id
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            deleteTeamStaff = function (id, callbacks) {
                return amplify.request({
                    resourceId: 'deleteTeamStaff',
                    data: {
                        TeamStaffID: id
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            deleteGameDiscussionPost = function (id, callbacks) {
                return amplify.request({
                    resourceId: 'deleteGameDiscussionPost',
                    data: {
                        id: id
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            deleteGameReport = function (id, callbacks) {
                return amplify.request({
                    resourceId: 'deleteGameReport',
                    data: {
                        id: id
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            deleteGame = function (gameId, callbacks) {
                return amplify.request({
                    resourceId: 'deleteGame',
                    data: {
                        gameId: gameId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            deleteMemberTeamRole = function (id, callbacks) {
                return amplify.request({
                    resourceId: 'deleteMemberTeamRole',
                    data: {
                        id: id
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            deleteDiscussionPost = function (id, callbacks) {
                return amplify.request({
                    resourceId: 'deleteDiscussionPost',
                    data: {
                        id: id
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            deleteSocialEntityComment = function (id, callbacks) {
                return amplify.request({
                    resourceId: 'deleteSocialEntityComment',
                    data: {
                        id: id
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            deletePicture = function (pictureId, callbacks) {
                return amplify.request({
                    resourceId: 'deletePicture',
                    data: {
                        id: pictureId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            deleteVideo = function (videoId, callbacks) {
                return amplify.request({
                    resourceId: 'deleteVideo',
                    data: {
                        id: videoId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            deleteSystemAdministrator = function (Id, callbacks) {
                return amplify.request({
                    resourceId: 'deleteSystemAdministrator',
                    data: {
                        id: Id
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            deleteLiveStream = function (id, callbacks) {
                return amplify.request({
                    resourceId: 'deleteLiveStream',
                    data: {
                        id: id
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            deleteGameVideo = function (id, callbacks) {
                return amplify.request({
                    resourceId: 'deleteGameVideo',
                    data: {
                        id: id
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            deleteTeamPartner = function (teamPartnerId, callbacks) {
                return amplify.request({
                    resourceId: 'deleteTeamPartner',
                    data: {
                        teamPartnerId: teamPartnerId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            deleteGameLiveStreamHighlight = function (id, callbacks) {
                return amplify.request({
                    resourceId: 'deleteGameLiveStreamHighlight',
                    data: {
                        id: id
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            deleteGamePlayer = function (gamePlayer) {
                var data = JSON.stringify(gamePlayer);

                return $.ajax({
                    url: swconstants.serverUrl + "/api/gameplayerapi/deletegameplayer/?callback=?",
                    type: "DELETE",
                    data: data,
                    datatype: "jsonp",
                    processData: false,
                    contentType: "application/json; charset=utf-8"
                });
            },

            deleteGameReferee = function (gameRefereeId) {
                return $.ajax({
                    url: swconstants.serverUrl + "/api/gameapi/deletegamereferee/?gamerefereeid=" + gameRefereeId + "&callback=?",
                    type: "DELETE",
                    datatype: "jsonp",
                    processData: false,
                    contentType: "application/json; charset=utf-8"
                });
            },

            deleteGameTeamStaff = function (gameStaff) {
                var data = JSON.stringify(gameStaff);

                return $.ajax({
                    url: swconstants.serverUrl + "/api/gameteamstaffapi/deletegameteamstaff/?callback=?",
                    type: "DELETE",
                    data: data,
                    datatype: "jsonp",
                    processData: false,
                    contentType: "application/json; charset=utf-8"
                });
            },

            deleteGameTeamRoster = function (gameTeamRosterId, callbacks) {
                return amplify.request({
                    resourceId: 'deleteGameTeamRoster',
                    data: {
                        gameTeamRosterId: gameTeamRosterId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            deleteLineUp = function (gameLineUpId, callbacks) {
                return amplify.request({
                    resourceId: 'deleteLineUp',
                    data: {
                        gameLineUpId: gameLineUpId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            deleteIndividualInterviewRequest = function (interviewRequestId, callbacks) {
                return amplify.request({
                    resourceId: 'deleteIndividualInterviewRequest',
                    data: {
                        interviewRequestId: interviewRequestId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            deleteFootballEventReport = function (eventReportId, callbacks) {
                return amplify.request({
                    resourceId: 'deleteFootballEventReport',
                    data: {
                        eventReportId: eventReportId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            deleteFloorballEventReport = function (eventReportId, callbacks) {
                return amplify.request({
                    resourceId: 'deleteFloorballEventReport',
                    data: {
                        eventReportId: eventReportId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            deleteFutsalEventReport = function (eventReportId, callbacks) {
                return amplify.request({
                    resourceId: 'deleteFutsalEventReport',
                    data: {
                        eventReportId: eventReportId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            deleteFootballEREvent = function (footballEREventId, callbacks) {
                return amplify.request({
                    resourceId: 'deleteFootballEREvent',
                    data: {
                        footballEREventId: footballEREventId,
                        memberId: 0
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            deleteFloorballEREvent = function (floorballEREventId, callbacks) {
                return amplify.request({
                    resourceId: 'deleteFloorballEREvent',
                    data: {
                        floorballEREventId: floorballEREventId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            deleteFutsalEREvent = function (futsalEREventId, callbacks) {
                return amplify.request({
                    resourceId: 'deleteFutsalEREvent',
                    data: {
                        futsalEREventId: futsalEREventId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            getPayoutsPreview = function (endDate, callbacks) {
                return amplify.request({
                    resourceId: 'getPayoutsPreview',
                    data: {
                        endDate: endDate
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            getAllMembers = function (callbacks) {
                return amplify.request({
                    resourceId: 'getAllMembers',
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            getAllMemberRequests = function (callbacks) {
                return amplify.request({
                    resourceId: 'getAllMemberRequests',
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            getArenaForSelectList = function (id, callbacks) {
                return amplify.request({
                    resourceId: 'getArenaForSelectList',
                    data: {
                        id: id
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            getArenas = function (callbacks) {
                return amplify.request({
                    resourceId: 'getArenas',
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            getClubs = function (callbacks) {
                return amplify.request({
                    resourceId: 'getClubs',
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            getClubForEditView = function (id, callbacks) {
                return amplify.request({
                    resourceId: 'getClubForEditView',
                    data: {
                        id: id
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            getMagazineBlurb = function (blurbTypeId, gameId, callbacks) {
                return amplify.request({
                    resourceId: 'getMagazineBlurb',
                    data: {
                        blurbTypeId: blurbTypeId,
                        gameId: gameId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            getReportsForAdminSummary = function (lastDate, callbacks) {
                return amplify.request({
                    resourceId: 'getReportsForAdminSummary',
                    data: {
                        lastDate: lastDate
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            getReportsForAdmin = function (lastDate, callbacks) {
                return amplify.request({
                    resourceId: 'getReportsForAdmin',
                    data: {
                        lastDate: lastDate
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            getReportsForAdminByGame = function (lastDate, callbacks) {
                return amplify.request({
                    resourceId: 'getReportsForAdminByGame',
                    data: {
                        lastDate: lastDate
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            getReportsForAdminByMember = function (lastDate, callbacks) {
                return amplify.request({
                    resourceId: 'getReportsForAdminByMember',
                    data: {
                        lastDate: lastDate
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            getReportsForAdminByReportedMember = function (lastDate, callbacks) {
                return amplify.request({
                    resourceId: 'getReportsForAdminByReportedMember',
                    data: {
                        lastDate: lastDate
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            getClubAdminInfo = function (clubId, seasonId, callbacks) {
                return amplify.request({
                    resourceId: 'getClubAdminInfo',
                    data:
                    {
                        clubId: clubId,
                        seasonId: seasonId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            getClubAdminTeamInfo = function (clubId, seasonId, callbacks) {
                return amplify.request({
                    resourceId: 'getClubAdminTeamInfo',
                    data:
                    {
                        clubId: clubId,
                        seasonId: seasonId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            getClubAdminLiveStreamStatistics = function (clubId, callbacks) {
                return amplify.request({
                    resourceId: 'getClubAdminLiveStreamStatistics',
                    data:
                    {
                        clubId: clubId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            getTeamAdminLiveStreamStatistics = function (teamId, callbacks) {
                return amplify.request({
                    resourceId: 'getTeamAdminLiveStreamStatistics',
                    data:
                    {
                        teamId: teamId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            getTeamPayoutSummary = function (teamId, liveStreamSubscriptionId, callbacks) {
                return amplify.request({
                    resourceId: 'getTeamPayoutSummary',
                    data:
                    {
                        teamId: teamId,
                        liveStreamSubscriptionId: liveStreamSubscriptionId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            getGamePlayer = function (gamePlayerId, callbacks) {
                return amplify.request({
                    resourceId: 'getGamePlayer',
                    data:
                    {
                        gamePlayerId: gamePlayerId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            getGameTeamStaff = function (gameTeamStaffId, callbacks) {
                return amplify.request({
                    resourceId: 'getGameTeamStaff',
                    data:
                    {
                        gameTeamStaffId: gameTeamStaffId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            getGameGoalies = function (gameId, teamId, callbacks) {
                return amplify.request({
                    resourceId: 'getGameGoalies',
                    data:
                    {
                        gameId: gameId,
                        teamId: teamId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            initTeamReplayPartners = function (teamId, callbacks) {
                return amplify.request({
                    resourceId: 'initTeamReplayPartners',
                    data:
                    {
                        teamId: teamId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            //initGameTeamRoster = function (gameTeamRosterId, callbacks) {
            //    return amplify.request({
            //        resourceId: 'initGameTeamRoster',
            //        data:
            //        {
            //            gameTeamRosterId: gameTeamRosterId
            //        },
            //        success: callbacks.success,
            //        error: callbacks.error
            //    });
            //},

            initCreateLiveStream = function (gameId, callbacks) {
                return amplify.request({
                    resourceId: 'initCreateLiveStream',
                    data:
                    {
                        gameId: gameId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            initGameReferees = function (gameId, callbacks) {
                return amplify.request({
                    resourceId: 'initGameReferees',
                    data:
                    {
                        gameId: gameId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            initGameTeams = function (gameId, callbacks) {
                return amplify.request({
                    resourceId: 'initGameTeams',
                    data:
                    {
                        gameId: gameId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            initGameGoalieStatistics = function (gameId, callbacks) {
                return amplify.request({
                    resourceId: 'initGameGoalieStatistics',
                    data:
                    {
                        gameId: gameId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            initGamePlayersView = function (gameTeamRosterId, callbacks) {
                return amplify.request({
                    resourceId: 'initGamePlayersView',
                    data:
                    {
                        gameTeamRosterId: gameTeamRosterId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            initGamePlayersViewFromClub = function (gameTeamRosterId, callbacks) {
                return amplify.request({
                    resourceId: 'initGamePlayersViewFromClub',
                    data:
                    {
                        gameTeamRosterId: gameTeamRosterId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            initGamePlayersViewForCopy = function (gameTeamRosterId, gameTeamRosterIdToCopy, callbacks) {
                return amplify.request({
                    resourceId: 'initGamePlayersViewForCopy',
                    data:
                    {
                        gameTeamRosterId: gameTeamRosterId,
                        gameTeamRosterIdToCopy: gameTeamRosterIdToCopy
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            initGameTeamStaffView = function (gameTeamRosterId, callbacks) {
                return amplify.request({
                    resourceId: 'initGameTeamStaffView',
                    data:
                    {
                        gameTeamRosterId: gameTeamRosterId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            initGameTeamStaffViewFromClub = function (gameTeamRosterId, callbacks) {
                return amplify.request({
                    resourceId: 'initGameTeamStaffViewFromClub',
                    data:
                    {
                        gameTeamRosterId: gameTeamRosterId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            initGameTeamStaffViewForCopy = function (gameTeamRosterId, gameTeamRosterIdToCopy, callbacks) {
                return amplify.request({
                    resourceId: 'initGameTeamStaffViewForCopy',
                    data:
                    {
                        gameTeamRosterId: gameTeamRosterId,
                        gameTeamRosterIdToCopy: gameTeamRosterIdToCopy
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            initGameLineUpView = function (gameId, teamId, callbacks) {
                return amplify.request({
                    resourceId: 'initGameLineUpView',
                    data:
                    {
                        gameId: gameId,
                        teamId: teamId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            initLeagueAdmin = function (leagueId, callbacks) {
                return amplify.request({
                    resourceId: 'initLeagueAdmin',
                    data:
                    {
                        leagueId: leagueId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            getGamesWithTeamRoster = function (teamId, gameId, callbacks) {
                return amplify.request({
                    resourceId: 'getGamesWithTeamRoster',
                    data:
                    {
                        teamId: teamId,
                        gameId: gameId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            getTeamPartnerForEditView = function (teamId, teamPartnerId, partnerTypeId, callbacks) {
                return amplify.request({
                    resourceId: 'getTeamPartnerForEditView',
                    data:
                    {
                        teamId: teamId,
                        teamPartnerId: teamPartnerId,
                        partnerTypeId: partnerTypeId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            getTeamPartnerPaymentDossier = function (teamPartnerId, callbacks) {
                return amplify.request({
                    resourceId: 'getTeamPartnerPaymentDossier',
                    data:
                    {
                        teamPartnerId: teamPartnerId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            getStreamPackagesForLeagueOrganizer = function (leagueOrganizerId, callbacks) {
                return amplify.request({
                    resourceId: 'getStreamPackagesForLeagueOrganizer',
                    data:
                    {
                        leagueOrganizerId: leagueOrganizerId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            getLiveStreamStatisticsPerGame = function (teamId, callbacks) {
                return amplify.request({
                    resourceId: 'getLiveStreamStatisticsPerGame',
                    data:
                    {
                        teamId: teamId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            getLiveStreamStatisticsPerTeam = function (teamId, callbacks) {
                return amplify.request({
                    resourceId: 'getLiveStreamStatisticsPerTeam',
                    data:
                    {
                        teamId: teamId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            getLiveStreamLogItems = function (liveStreamId, callbacks) {
                return amplify.request({
                    resourceId: 'getLiveStreamLogItems',
                    data:
                    {
                        liveStreamId: liveStreamId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            getClubAdministrators = function (clubId, callbacks) {
                return amplify.request({
                    resourceId: 'getClubAdministrators',
                    data:
                    {
                        clubId: clubId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            getClubHeaderInfo = function (clubId, callbacks) {
                return amplify.request({
                    resourceId: 'getClubHeaderInfo',
                    data:
                    {
                        clubId: clubId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            getClubPictures = function (clubId, amount, lastPictureId, callbacks) {
                return amplify.request({
                    resourceId: 'getClubPictures',
                    data:
                    {
                        clubId: clubId,
                        amount: amount,
                        lastPictureId: lastPictureId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            getClubVideos = function (clubId, amount, lastVideoId, callbacks) {
                return amplify.request({
                    resourceId: 'getClubVideos',
                    data:
                    {
                        clubId: clubId,
                        amount: amount,
                        lastVideoId: lastVideoId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            getClubTeamsForExternalConnect = function (teamId, callbacks) {
                return amplify.request({
                    resourceId: 'getClubTeamsForExternalConnect',
                    data: {
                        teamId: teamId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            getLeagueOrganizerPartner = function (leagueOrganizerPartnerId, callbacks) {
                return amplify.request({
                    resourceId: 'getLeagueOrganizerPartner',
                    data: {
                        leagueOrganizerPartnerId: leagueOrganizerPartnerId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            getClubPartner = function (clubPartnerId, callbacks) {
                return amplify.request({
                    resourceId: 'getClubPartner',
                    data: {
                        clubPartnerId: clubPartnerId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            getClubPartners = function (clubId, callbacks) {
                return amplify.request({
                    resourceId: 'getClubPartners',
                    data: {
                        clubId: clubId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            getCompetitionHeader = function (competitionId, callbacks) {
                return amplify.request({
                    resourceId: 'getCompetitionHeader',
                    data:
                    {
                        competitionId: competitionId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            getPartnerForAdminDetails = function (partnerId, callbacks) {
                return amplify.request({
                    resourceId: 'getPartnerForAdminDetails',
                    data: {
                        partnerId: partnerId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            getActivePartnerFeatures = function (callbacks) {
                return amplify.request({
                    resourceId: 'getActivePartnerFeatures',
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            getActivePlacements = function (callbacks) {
                return amplify.request({
                    resourceId: 'getActivePlacements',
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            getPartnerFeatureData = function (id, callbacks) {
                return amplify.request({
                    resourceId: 'getPartnerFeatureData',
                    data: {
                        id: id
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            getPaymentStatus = function (callbacks) {
                return amplify.request({
                    resourceId: 'getPaymentStatus',
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            getPaymentTeam = function (gameId, callbacks) {
                return amplify.request({
                    resourceId: 'getPaymentTeam',
                    data: {
                        gameId: gameId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            getCountriesForDialing = function (callbacks) {
                return amplify.request({
                    resourceId: 'getCountriesForDialing',
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            getFollowers = function (teamId, callbacks) {
                return amplify.request({
                    resourceId: 'getFollowers',
                    data: {
                        teamId: teamId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            getGenders = function (callbacks) {
                return amplify.request({
                    resourceId: 'getGenders',
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            getSeasons = function (callbacks) {
                return amplify.request({
                    resourceId: 'getSeasons',
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            initAudienceForPartnerEditView = function (audienceId, audienceTypeId, callbacks) {
                return amplify.request({
                    resourceId: 'initAudienceForPartnerEditView',
                    data: {
                        audienceId: audienceId,
                        audienceTypeId: audienceTypeId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            initAudienceForEditView = function (infoItemType, audienceId, callbacks) {
                return amplify.request({
                    resourceId: 'initAudienceForEditView',
                    data: {
                        infoItemType: infoItemType,
                        audienceId: audienceId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            initTargetFilterForPartnerEditView = function (targetFilterId, callbacks) {
                return amplify.request({
                    resourceId: 'initTargetFilterForPartnerEditView',
                    data: {
                        targetFilterId: targetFilterId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            initLeagueOrganizerManageInfoItems = function (leagueOrganizerId, callbacks) {
                return amplify.request({
                    resourceId: 'initLeagueOrganizerManageInfoItems',
                    data: {
                        leagueOrganizerId: leagueOrganizerId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            initClubManageInfoItems = function (clubId, callbacks) {
                return amplify.request({
                    resourceId: 'initClubManageInfoItems',
                    data: {
                        clubId: clubId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            initTeamManageInfoItems = function (teamId, callbacks) {
                return amplify.request({
                    resourceId: 'initTeamManageInfoItems',
                    data: {
                        teamId: teamId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            initGameReportForEditView = function (gameId, gameReportTypeId, callbacks) {
                return amplify.request({
                    resourceId: 'initGameReportForEditView',
                    data: {
                        gameId: gameId,
                        gameReportTypeId: gameReportTypeId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            initTeamAdminLiveStream = function (teamId, callbacks) {
                return amplify.request({
                    resourceId: 'initTeamAdminLiveStream',
                    data: {
                        teamId: teamId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            initGameLiveStreamHighlights = function (gameId, callbacks) {
                return amplify.request({
                    resourceId: 'initGameLiveStreamHighlights',
                    data: {
                        gameId: gameId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            initClubLiveStreamStatistics = function (clubId, callbacks) {
                return amplify.request({
                    resourceId: 'initClubLiveStreamStatistics',
                    data: {
                        clubId: clubId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            getGameReport = function (id, callbacks) {
                return amplify.request({
                    resourceId: 'getGameReport',
                    data: {
                        GameReportID: id
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            getLiveStreamHighlightsForGame = function (id, callbacks) {
                return amplify.request({
                    resourceId: 'getLiveStreamHighlightsForGame',
                    data: {
                        gameId: id
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            getLiveStreamAudiences = function (id, callbacks) {
                return amplify.request({
                    resourceId: 'getLiveStreamAudiences',
                    data: {
                        id: id
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            getLiveStreamTargetFilters = function (id, callbacks) {
                return amplify.request({
                    resourceId: 'getLiveStreamTargetFilters',
                    data: {
                        id: id
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            getLiveStreamSubscriptionForEditView = function (id, callbacks) {
                return amplify.request({
                    resourceId: 'getLiveStreamSubscriptionForEditView',
                    data: {
                        id: id
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            getGameHeaderInfo = function (id, callbacks) {
                return amplify.request({
                    resourceId: 'getGameHeaderInfo',
                    data: {
                        id: id
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            getGameAdminInformation = function (gameId, callbacks) {
                return amplify.request({
                    resourceId: 'getGameAdminInformation',
                    data: {
                        gameId: gameId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            clearGameCache = function (gameId, callbacks) {
                return amplify.request({
                    resourceId: 'clearGameCache',
                    data: {
                        gameId: gameId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            clearLeagueCache = function (leagueId, callbacks) {
                return amplify.request({
                    resourceId: 'clearLeagueCache',
                    data: {
                        leagueId: leagueId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            getLeagueOrganizerAdministrators = function (leagueOrganizerId, callbacks) {
                return amplify.request({
                    resourceId: 'getLeagueOrganizerAdministrators',
                    data:
                    {
                        leagueOrganizerId: leagueOrganizerId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            getMyRoles = function (callbacks) {
                return amplify.request({
                    resourceId: 'getMyRoles',
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            initMyTeams = function (callbacks) {
                return amplify.request({
                    resourceId: 'initMyTeams',
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            initMyGames = function (callbacks) {
                return amplify.request({
                    resourceId: 'initMyGames',
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            getTeamsIFollow = function (callbacks) {
                return amplify.request({
                    resourceId: 'getTeamsIFollow',
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            getLeaguesIFollow = function (callbacks) {
                return amplify.request({
                    resourceId: 'getLeaguesIFollow',
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            getEREventsForHighlight = function (id, callbacks) {
                return amplify.request({
                    resourceId: 'getEREventsForHighlight',
                    data:
                    {
                        Id: id
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            getEREventsForGame = function (gameId, callbacks) {
                return amplify.request({
                    resourceId: 'getEREventsForGame',
                    data:
                    {
                        gameId: gameId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            getPartnerForEditView = function (id, callbacks) {
                return amplify.request({
                    resourceId: 'getPartnerForEditView',
                    data:
                    {
                        id: id
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            getPartnerFeatureSetForEditView = function (id, callbacks) {
                return amplify.request({
                    resourceId: 'getPartnerFeatureSetForEditView',
                    data:
                    {
                        id: id
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            getPartnerPackageForEditView = function (id, callbacks) {
                return amplify.request({
                    resourceId: 'getPartnerPackageForEditView',
                    data:
                    {
                        id: id
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            getPartnerFeatureTypes = function (callbacks) {
                return amplify.request({
                    resourceId: 'getPartnerFeatureTypes',
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            getPartnerPackagesForPartner = function (id, callbacks) {
                return amplify.request({
                    resourceId: 'getPartnerPackagesForPartner',
                    data: {
                        Id: id
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            getPartnerSetForPartnerPackage = function (id, callbacks) {
                return amplify.request({
                    resourceId: 'getPartnerSetForPartnerPackage',
                    data: {
                        id: id
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            getPartnerFeature = function (id, callbacks) {
                return amplify.request({
                    resourceId: 'getPartnerFeature',
                    data: {
                        Id: id
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            getPartnerFeatureForEditView = function (id, callbacks) {
                return amplify.request({
                    resourceId: 'getPartnerFeatureForEditView',
                    data: {
                        Id: id
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            getPartnerFeatureForDetailView = function (id, callbacks) {
                return amplify.request({
                    resourceId: 'getPartnerFeatureForDetailView',
                    data: {
                        Id: id
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            getPartnerFeatureForCreateView = function (id, callbacks) {
                return amplify.request({
                    resourceId: 'getPartnerFeatureForCreateView',
                    data: {
                        id: id
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            getTeamsForTeamFeedPublishSelect = function (callbacks) {
                return amplify.request({
                    resourceId: 'getTeamsForTeamFeedPublishSelect',
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            getSystemAdministrators = function (callbacks) {
                return amplify.request({
                    resourceId: 'getSystemAdministrators',
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            getMediaLiveStreamItem = function (liveStreamId, callbacks) {
                return amplify.request({
                    resourceId: 'getMediaLiveStreamItem',
                    data: {
                        liveStreamId: liveStreamId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            getMediaHighlightItem = function (videoId, callbacks) {
                return amplify.request({
                    resourceId: 'getMediaHighlightItem',
                    data: {
                        videoId: videoId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            getGameVideoReplayDownloadLink = function (videoId, callbacks) {
                return amplify.request({
                    resourceId: 'getGameVideoReplayDownloadLink',
                    data: {
                        videoId: videoId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            downloadVideo = function (videoId, callbacks) {
                return amplify.request({
                    resourceId: 'downloadVideo',
                    data: {
                        videoId: videoId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            getLiveStreamDownloadLink = function (liveStreamId, callbacks) {
                return amplify.request({
                    resourceId: 'getLiveStreamDownloadLink',
                    data: {
                        liveStreamId: liveStreamId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            getLiveStreamVoucher = function (gameId, code, callbacks) {
                return amplify.request({
                    resourceId: 'getLiveStreamVoucher',
                    data: {
                        gameId: gameId,
                        code: code
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            getMemberActions = function (callbacks) {
                return amplify.request({
                    resourceId: 'getMemberActions',
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            initAdminPayouts = function (callbacks) {
                return amplify.request({
                    resourceId: 'initAdminPayouts',
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            getPaymentForEditView = function (paymentId, callbacks) {
                return amplify.request({
                    resourceId: 'getPaymentForEditView',
                    data: {
                        paymentId: paymentId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            getClubPayoutRows = function (paymentId, leagueOrganizerId, callbacks) {
                return amplify.request({
                    resourceId: 'getClubPayoutRows',
                    data: {
                        paymentId: paymentId,
                        leagueOrganizerId: leagueOrganizerId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            getTeamPayoutRows = function (clubPaymentHeaderId, callbacks) {
                return amplify.request({
                    resourceId: 'getTeamPayoutRows',
                    data: {
                        clubPaymentHeaderId: clubPaymentHeaderId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            getClubPaymentSummary = function (clubPaymentId, callbacks) {
                return amplify.request({
                    resourceId: 'getClubPaymentSummary',
                    data: {
                        clubPaymentId: clubPaymentId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            getMemberPayment = function (id, callbacks) {
                return amplify.request({
                    resourceId: 'getMemberPayment',
                    data: {
                        id: id
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            getMemberPayments = function (memberId, callbacks) {
                return amplify.request({
                    resourceId: 'getMemberPayments',
                    data: {
                        memberId: memberId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            getMemberActionsFloorball = function (callbacks) {
                return amplify.request({
                    resourceId: 'getMemberActionsFloorball',
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            getMemberNotificationsForSelectList = function (lastNotificationId, callbacks) {
                return amplify.request({
                    resourceId: 'getMemberNotificationsForSelectList',
                    data: {
                        lastNotificationId: lastNotificationId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            setMemberNotificationStatus = function (memberNotificationId, statusId, callbacks) {
                return amplify.request({
                    resourceId: 'setMemberNotificationStatus',
                    data: {
                        memberNotificationId: memberNotificationId,
                        statusId: statusId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            setFollowerRequestStatus = function (followerRequestId, statusId, callbacks) {
                return amplify.request({
                    resourceId: 'setFollowerRequestStatus',
                    data: {
                        followerRequestId: followerRequestId,
                        statusId: statusId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            setPlayerRequestStatus = function (playerId, statusId, callbacks) {
                return amplify.request({
                    resourceId: 'setPlayerRequestStatus',
                    data: {
                        playerId: playerId,
                        statusId: statusId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            setTeamStaffRequestStatus = function (teamStaffId, statusId, callbacks) {
                return amplify.request({
                    resourceId: 'setTeamStaffRequestStatus',
                    data: {
                        teamStaffId: teamStaffId,
                        statusId: statusId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            getTeamFeedItem = function (teamFeedItemID, teamFeedItemType, callbacks) {
                return amplify.request({
                    resourceId: 'getTeamFeedItem',
                    data: {
                        teamFeedItemID: teamFeedItemID,
                        teamFeedItemType: teamFeedItemType
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            getStreamStats = function (liveStreamId, callbacks) {
                return amplify.request({
                    resourceId: 'getStreamStats',
                    data: {
                        liveStreamId: liveStreamId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            getStreamSubscription = function (teamId, callbacks) {
                return amplify.request({
                    resourceId: 'getStreamSubscription',
                    data: {
                        teamId: teamId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            getStreamSubscriptionForGame = function (gameId, callbacks) {
                return amplify.request({
                    resourceId: 'getStreamSubscriptionForGame',
                    data: {
                        gameId: gameId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            getStreamSubscriptionForEvent = function (eventId, callbacks) {
                return amplify.request({
                    resourceId: 'getStreamSubscriptionForEvent',
                    data: {
                        eventId: eventId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            getTeamSubscriptions = function (teamId, callbacks) {
                return amplify.request({
                    resourceId: 'getTeamSubscriptions',
                    data: {
                        teamId: teamId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            getTeamMemberForInvite = function (teamId, teamConnectionRoleId, inviteType, callbacks) {
                return amplify.request({
                    resourceId: 'getTeamMemberForInvite',
                    data: {
                        TeamID: teamId,
                        TeamConnectionRoleID: teamConnectionRoleId,
                        InviteType: inviteType
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            getRecommendedTeams = function (id, callbacks) {
                return amplify.request({
                    resourceId: 'getRecommendedTeams',
                    data: {
                        MemberID: id
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            getSports = function (callbacks) {
                return amplify.request({
                    resourceId: 'getSports',
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            getCreatedLeaguesForTeam = function (teamId, callbacks) {
                return amplify.request({
                    resourceId: 'getCreatedLeaguesForTeam',
                    data: {
                        teamId: teamId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            getIncompleteTeamActionsForTeamPage = function (teamId, callbacks) {
                return amplify.request({
                    resourceId: 'getIncompleteTeamActionsForTeamPage',
                    data: {
                        teamId: teamId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            getInterviewTemplate = function (interviewTemplateId, callbacks) {
                return amplify.request({
                    resourceId: 'getInterviewTemplate',
                    data: {
                        interviewTemplateId: interviewTemplateId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            getInterviewTemplates = function (callbacks) {
                return amplify.request({
                    resourceId: 'getInterviewTemplates',
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            getSocialEntityLikesVC = function (id, callbacks) {
                return amplify.request({
                    resourceId: 'getSocialEntityLikesVC',
                    data: {
                        Id: id
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            getSocialEntityViews = function (socialEntityId, pageId, pageSize, callbacks) {
                return amplify.request({
                    resourceId: 'getSocialEntityViews',
                    data: {
                        socialEntityId: socialEntityId,
                        pageId: pageId,
                        pageSize: pageSize
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            getSocialEntityComments = function (socialEntityId, pageId, pageSize, callbacks) {
                return amplify.request({
                    resourceId: 'getSocialEntityComments',
                    data: {
                        socialEntityId: socialEntityId,
                        pageId: pageId,
                        pageSize: pageSize
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            getGameDiscussionPost = function (id, callbacks) {
                return amplify.request({
                    resourceId: 'getGameDiscussionPost',
                    data: {
                        Id: id
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            initGameAttendees = function (gameId, callbacks) {
                return amplify.request({
                    resourceId: 'initGameAttendees',
                    data: {
                        gameId: gameId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            getGameAttendees = function (gameId, gameCheckInTypeId, pageId, pageSize, callbacks) {
                return amplify.request({
                    resourceId: 'getGameAttendees',
                    data: {
                        gameId: gameId,
                        gameCheckInTypeId: gameCheckInTypeId,
                        pageId: pageId,
                        pageSize: pageSize

                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            getAttendeesForMagazineGameViewDetails = function (gameId, memberId, callbacks) {
                return amplify.request({
                    resourceId: 'getAttendeesForMagazineGameViewDetails',
                    data: {
                        gameId: gameId,
                        memberId: memberId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            getPicsAndVideosForMagazineGameViewDetails = function (gameId, memberId, callbacks) {
                return amplify.request({
                    resourceId: 'getPicsAndVideosForMagazineGameViewDetails',
                    data: {
                        gameId: gameId,
                        memberId: memberId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            getDiscussionPost = function (Id, callbacks) {
                return amplify.request({
                    resourceId: 'getDiscussionPost',
                    data: {
                        Id: Id
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            getDiscussionPostForDetailsView = function (Id, callbacks) {
                return amplify.request({
                    resourceId: 'getDiscussionPostForDetailsView',
                    data: {
                        Id: Id
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            getUnverifiedGamePosts = function (gameId, lastItemId, amount, callbacks) {
                return amplify.request({
                    resourceId: 'getUnverifiedGamePosts',
                    data: {
                        gameId: gameId,
                        lastItemId: lastItemId,
                        amount: amount
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            getPictureForDetailsView = function (Id, callbacks) {
                return amplify.request({
                    resourceId: 'getPictureForDetailsView',
                    data: {
                        Id: Id
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            getVideoForDetailsView = function (Id, callbacks) {
                return amplify.request({
                    resourceId: 'getVideoForDetailsView',
                    data: {
                        Id: Id
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            getTeamHeaderInfo = function (teamId, callbacks) {
                return amplify.request({
                    resourceId: 'getTeamHeaderInfo',
                    data: {
                        teamId: teamId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            getTeamHeaderInfoTest = async function (teamId, callbacks) {
                await fetch(swconstants.serverUrl + "/api/teamapi/getteamheaderinfoapi/?teamid=" + teamId, {
                    headers: {
                        'x-api-key': 'sportswik'
                    }
                }).then((response) => {
                    if (!response.ok) {
                        callbacks.error(response);
                        //return;
                        throw new Error("Network response was not OK!");
                    }

                    return response.json();
                })
                    .then((data) => callbacks.success(data))
                    .catch((error) => {
                        console.error('Error:', error);
                    });


                //$.ajax({
                //    url: swconstants.serverUrl + "/api/teamapi/getteamheaderinfo/?teamid=" + teamId + "&callback=?",
                //    type: "GET",
                //    datatype: "jsonp",
                //    processData: false,
                //    contentType: "application/json; charset=utf-8"
                //}).then(callbacks.success).fail(callbacks.error);
            },

            getTeamAdminHeaderInfo = function (teamId, callbacks) {
                return amplify.request({
                    resourceId: 'getTeamAdminHeaderInfo',
                    data: {
                        teamId: teamId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            getTeamHeaderInfoForTeamSite = function (teamId, callbacks) {
                return amplify.request({
                    resourceId: 'getTeamHeaderInfoForTeamSite',
                    data: {
                        teamId: teamId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            getTeamHeaderInfoWithMemberInfo = function (teamId, callbacks) {
                return amplify.request({
                    resourceId: 'getTeamHeaderInfoWithMemberInfo',
                    data: {
                        teamId: teamId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            initTeamConnectRoleVC = function (memberId, sportId, teamId, callbacks) {
                return amplify.request({
                    resourceId: 'initTeamConnectRoleVC',
                    data: {
                        memberId: memberId,
                        sportId: sportId,
                        teamId: teamId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            initTeamConnectRoleRelationVC = function (teamId, callbacks) {
                return amplify.request({
                    resourceId: 'initTeamConnectRoleRelationVC',
                    data: {
                        teamId: teamId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            initGameRequest = function (id, callbacks) {
                return amplify.request({
                    resourceId: 'initGameRequest',
                    data: {
                        id: id
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            getLeagueHeader = function (leagueId, callbacks) {
                return amplify.request({
                    resourceId: 'getLeagueHeader',
                    data: {
                        leagueId: leagueId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            initLeagueTable = function (leagueId, callbacks) {
                return amplify.request({
                    resourceId: 'initLeagueTable',
                    data: {
                        leagueId: leagueId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            initStatisticsTable = function (itemId, tableType, callbacks) {
                return amplify.request({
                    resourceId: 'initStatisticsTable',
                    data: {
                        itemId: itemId,
                        tableType: tableType
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            generateLeagueHighlights = function (leagueId, callbacks) {
                return amplify.request({
                    resourceId: 'generateLeagueHighlights',
                    data: {
                        leagueId: leagueId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            canCreateGameTeamRoster = function (gameId, callbacks) {
                return amplify.request({
                    resourceId: 'canCreateGameTeamRoster',
                    data: {
                        gameId: gameId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            canCreateGameLineUp = function (gameId, teamId, callbacks) {
                return amplify.request({
                    resourceId: 'canCreateGameLineUp',
                    data: {
                        gameId: gameId,
                        teamId: teamId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            insertGameTeamRoster = function (gameId, teamId, callbacks) {
                return amplify.request({
                    resourceId: 'insertGameTeamRoster',
                    data: {
                        gameId: gameId,
                        teamId: teamId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            initCompetitionCalendar = function (callbacks) {
                return amplify.request({
                    resourceId: 'initCompetitionCalendar',
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            getLeagueOrganizersForSelectList = function (callbacks) {
                return amplify.request({
                    resourceId: 'getLeagueOrganizersForSelectList',
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            getLeagueOrganizers = function (callbacks) {
                return amplify.request({
                    resourceId: 'getLeagueOrganizers',
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            initTeamSite = function (teamId, callbacks) {
                return amplify.request({
                    resourceId: 'initTeamSite',
                    data: {
                        teamId: teamId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            initTeamPicsAndVideos = function (teamId, callbacks) {
                return amplify.request({
                    resourceId: 'initTeamPicsAndVideos',
                    data: {
                        teamId: teamId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            initLeagueSite = function (leagueId, callbacks) {
                return amplify.request({
                    resourceId: 'initLeagueSite',
                    data: {
                        leagueId: leagueId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            initLeagueSiteFairPlayCards = function (leagueId, amount, callbacks) {
                return amplify.request({
                    resourceId: 'initLeagueSiteFairPlayCards',
                    data: {
                        leagueId: leagueId,
                        amount: amount
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            initLeagueSitePicsAndVideos = function (leagueId, callbacks) {
                return amplify.request({
                    resourceId: 'initLeagueSitePicsAndVideos',
                    data: {
                        leagueId: leagueId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            initCompetitionsPage = function (callbacks) {
                return amplify.request({
                    resourceId: 'initCompetitionsPage',
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            initPopular = function (callbacks) {
                return amplify.request({
                    resourceId: 'initPopular',
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            initDistricts = function (callbacks) {
                return amplify.request({
                    resourceId: 'initDistricts',
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            initBrowseLeagues = function (callbacks) {
                return amplify.request({
                    resourceId: 'initBrowseLeagues',
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            initUpcomingEvents = function (callbacks) {
                return amplify.request({
                    resourceId: 'initUpcomingEvents',
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            initCurrentEvents = function (callbacks) {
                return amplify.request({
                    resourceId: 'initCurrentEvents',
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            initPastEvents = function (callbacks) {
                return amplify.request({
                    resourceId: 'initPastEvents',
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            initCompetitions = function (callbacks) {
                return amplify.request({
                    resourceId: 'initCompetitions',
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            initCompetitionEvents = function (callbacks) {
                return amplify.request({
                    resourceId: 'initCompetitionEvents',
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            initCompetition = function (competitionId, callbacks) {
                return amplify.request({
                    resourceId: 'initCompetition',
                    data: {
                        competitionId: competitionId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            initCompetitionFixtures = function (competitionId, callbacks) {
                return amplify.request({
                    resourceId: 'initCompetitionFixtures',
                    data: {
                        competitionId: competitionId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            initCompetitionTable = function (competitionId, callbacks) {
                return amplify.request({
                    resourceId: 'initCompetitionTable',
                    data: {
                        competitionId: competitionId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            getCompetitionGames = function (leagueId, lastGameId, roundId, callbacks) {
                return amplify.request({
                    resourceId: 'getCompetitionGames',
                    data: {
                        leagueId: leagueId,
                        lastGameId: lastGameId,
                        roundId: roundId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            getCompetitionTeams = function (competitionId, callbacks) {
                return amplify.request({
                    resourceId: 'getCompetitionTeams',
                    data: {
                        competitionId: competitionId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            getPicturesForTeam = function (teamId, amount, lastPictureId, callbacks) {
                return amplify.request({
                    resourceId: 'getPicturesForTeam',
                    data:
                    {
                        teamId: teamId,
                        amount: amount,
                        lastPictureId: lastPictureId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            getVideosForTeam = function (teamId, amount, lastVideoId, callbacks) {
                return amplify.request({
                    resourceId: 'getVideosForTeam',
                    data:
                    {
                        teamId: teamId,
                        amount: amount,
                        lastVideoId: lastVideoId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            getLeaguePictures = function (leagueId, amount, lastPictureId, callbacks) {
                return amplify.request({
                    resourceId: 'getLeaguePictures',
                    data:
                    {
                        leagueId: leagueId,
                        amount: amount,
                        lastPictureId: lastPictureId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            getLeagueVideos = function (leagueId, amount, lastVideoId, callbacks) {
                return amplify.request({
                    resourceId: 'getLeagueVideos',
                    data:
                    {
                        leagueId: leagueId,
                        amount: amount,
                        lastVideoId: lastVideoId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            initHighlightsForLeagueSite = function (leagueId, callbacks) {
                return amplify.request({
                    resourceId: 'initHighlightsForLeagueSite',
                    data:
                    {
                        leagueId: leagueId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            getHighlightsForLeagueSite = function (leagueId, amount, lastVideoId, callbacks) {
                return amplify.request({
                    resourceId: 'getHighlightsForLeagueSite',
                    data:
                    {
                        leagueId: leagueId,
                        amount: amount,
                        lastVideoId: lastVideoId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            getHighlightForLeagueSite = function (leagueId, videoId, callbacks) {
                return amplify.request({
                    resourceId: 'getHighlightForLeagueSite',
                    data:
                    {
                        leagueId: leagueId,
                        videoId: videoId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            getHighlightsForMember = function (callbacks) {
                return amplify.request({
                    resourceId: 'getHighlightsForMember',
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            getLeagueOrganizerHeader = function (leagueOrganizerId, callbacks) {
                return amplify.request({
                    resourceId: 'getLeagueOrganizerHeader',
                    data: {
                        leagueOrganizerId: leagueOrganizerId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            unfollowTeam = function (teamId, callbacks) {
                return amplify.request({
                    resourceId: 'unfollowTeam',
                    data:
                    {
                        teamId: teamId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },



            followLeague = function (leagueId, callbacks) {
                return amplify.request({
                    resourceId: 'followLeague',
                    data:
                    {
                        leagueId: leagueId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            unfollowLeague = function (leagueId, callbacks) {
                return amplify.request({
                    resourceId: 'unfollowLeague',
                    data:
                    {
                        leagueId: leagueId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            publishLiveStream = function (liveStreamId, callbacks) {
                return amplify.request({
                    resourceId: 'publishLiveStream',
                    data:
                    {
                        liveStreamId: liveStreamId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            initLeagueOrganizerSite = function (leagueOrganizerId, callbacks) {
                return amplify.request({
                    resourceId: 'initLeagueOrganizerSite',
                    data: {
                        leagueOrganizerId: leagueOrganizerId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            initLeagueOrganizerSitePicsAndVideos = function (leagueOrganizerId, callbacks) {
                return amplify.request({
                    resourceId: 'initLeagueOrganizerSitePicsAndVideos',
                    data: {
                        leagueOrganizerId: leagueOrganizerId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            initLeagueOrganizerSiteGameResultGuessStandings = function (leagueOrganizerId, callbacks) {
                return amplify.request({
                    resourceId: 'initLeagueOrganizerSiteGameResultGuessStandings',
                    data: {
                        leagueOrganizerId: leagueOrganizerId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            initLeagueOrganizerTournamentGroups = function (leagueOrganizerId, callbacks) {
                return amplify.request({
                    resourceId: 'initLeagueOrganizerTournamentGroups',
                    data: {
                        leagueOrganizerId: leagueOrganizerId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            initLeagueOrganizerSiteFairPlayCards = function (leagueOrganizerId, amount, callbacks) {
                return amplify.request({
                    resourceId: 'initLeagueOrganizerSiteFairPlayCards',
                    data: {
                        leagueOrganizerId: leagueOrganizerId,
                        amount: amount
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },


            initLeagueOrganizerFinalStandings = function (leagueOrganizerId, callbacks) {
                return amplify.request({
                    resourceId: 'initLeagueOrganizerFinalStandings',
                    data: {
                        leagueOrganizerId: leagueOrganizerId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            initLeagueOrganizerPlayerStatistics = function (leagueOrganizerId, callbacks) {
                return amplify.request({
                    resourceId: 'initLeagueOrganizerPlayerStatistics',
                    data: {
                        leagueOrganizerId: leagueOrganizerId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            initLeagueOrganizerPartners = function (leagueOrganizerId, callbacks) {
                return amplify.request({
                    resourceId: 'initLeagueOrganizerPartners',
                    data: {
                        leagueOrganizerId: leagueOrganizerId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            initPartnerAdmin = function (callbacks) {
                return amplify.request({
                    resourceId: 'initPartnerAdmin',
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            initPartnerFeatureSet = function (id, callbacks) {
                return amplify.request({
                    resourceId: 'initPartnerFeatureSet',
                    data: {
                        id: id
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            initPartnerPackage = function (id, callbacks) {
                return amplify.request({
                    resourceId: 'initPartnerPackage',
                    data: {
                        id: id
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            initLeagueOrganizerLeaguesVC = function (leagueOrganizerId, callbacks) {
                return amplify.request({
                    resourceId: 'initLeagueOrganizerLeaguesVC',
                    data: {
                        leagueOrganizerId: leagueOrganizerId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            initLeagueOrganizerLeaguesWithCategories = function (leagueOrganizerId, callbacks) {
                return amplify.request({
                    resourceId: 'initLeagueOrganizerLeaguesWithCategories',
                    data: {
                        leagueOrganizerId: leagueOrganizerId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            initAddMemberGuardians = function (teamId, memberId, callbacks) {
                return amplify.request({
                    resourceId: 'initAddMemberGuardians',
                    data: {
                        teamId: teamId,
                        memberId: memberId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            initInfoItemForEditView = function (infoItemType, itemId, callbacks) {
                return amplify.request({
                    resourceId: 'initInfoItemForEditView',
                    data: {
                        infoItemType: infoItemType,
                        itemId: itemId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            initGameForEditView = function (teamId, gameId, callbacks) {
                return amplify.request({
                    resourceId: 'initGameForEditView',
                    data: {
                        teamId: teamId,
                        gameId: gameId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            initLeagueOrganizerInfoItems = function (leagueOrganizerId, callbacks) {
                return amplify.request({
                    resourceId: 'initLeagueOrganizerInfoItems',
                    data: {
                        leagueOrganizerId: leagueOrganizerId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            initLeagueOrganizerPlayPage = function (leagueOrganizerId, callbacks) {
                return amplify.request({
                    resourceId: 'initLeagueOrganizerPlayPage',
                    data: {
                        leagueOrganizerId: leagueOrganizerId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            initLeaguePlayPage = function (leagueId, callbacks) {
                return amplify.request({
                    resourceId: 'initLeaguePlayPage',
                    data: {
                        leagueId: leagueId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            initClubPlayPage = function (clubId, callbacks) {
                return amplify.request({
                    resourceId: 'initClubPlayPage',
                    data: {
                        clubId: clubId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            initTeamPlayPage = function (teamId, callbacks) {
                return amplify.request({
                    resourceId: 'initTeamPlayPage',
                    data: {
                        teamId: teamId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            initClubInfoItems = function (clubId, callbacks) {
                return amplify.request({
                    resourceId: 'initClubInfoItems',
                    data: {
                        clubId: clubId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            initTeamInfoItems = function (teamId, callbacks) {
                return amplify.request({
                    resourceId: 'initTeamInfoItems',
                    data: {
                        teamId: teamId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            initTipInfoItems = function (callbacks) {
                return amplify.request({
                    resourceId: 'initTipInfoItems',
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            searchFairPlayCards = function (leagueOrganizerId, searchString, amount, lastFairPlayCardID, callbacks) {
                return amplify.request({
                    resourceId: 'searchFairPlayCards',
                    data: {
                        leagueOrganizerId: leagueOrganizerId,
                        searchString: searchString,
                        amount: amount,
                        lastFairPlayCardID: lastFairPlayCardID
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            searchLeagueFairPlayCards = function (leagueId, searchString, amount, lastFairPlayCardID, callbacks) {
                return amplify.request({
                    resourceId: 'searchLeagueFairPlayCards',
                    data: {
                        leagueId: leagueId,
                        searchString: searchString,
                        amount: amount,
                        lastFairPlayCardID: lastFairPlayCardID
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            searchRefereesBySearchString = function (searchString, callbacks) {
                return amplify.request({
                    resourceId: 'searchRefereesBySearchString',
                    data: {
                        searchString: searchString
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            getFairPlayCardsForLeagueOrganizerSite = function (leagueOrganizerId, amount, lastFairPlayCardId, callbacks) {
                return amplify.request({
                    resourceId: 'getFairPlayCardsForLeagueOrganizerSite',
                    data: {
                        leagueOrganizerId: leagueOrganizerId,
                        amount: amount,
                        lastFairPlayCardId: lastFairPlayCardId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            getFairPlayCardsForLeagueSite = function (leagueId, amount, lastFairPlayCardId, callbacks) {
                return amplify.request({
                    resourceId: 'getFairPlayCardsForLeagueSite',
                    data: {
                        leagueId: leagueId,
                        amount: amount,
                        lastFairPlayCardId: lastFairPlayCardId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            getLeagueOrganizerFairPlayCardSettings = function (leagueOrganizerId, callbacks) {
                return amplify.request({
                    resourceId: 'getLeagueOrganizerFairPlayCardSettings',
                    data: {
                        leagueOrganizerId: leagueOrganizerId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            getPicturesForLeagueOrganizer = function (leagueOrganizerId, amount, lastPictureId, callbacks) {
                return amplify.request({
                    resourceId: 'getPicturesForLeagueOrganizer',
                    data:
                    {
                        leagueOrganizerId: leagueOrganizerId,
                        amount: amount,
                        lastPictureId: lastPictureId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            getVideosForLeagueOrganizer = function (leagueOrganizerId, amount, lastVideoId, callbacks) {
                return amplify.request({
                    resourceId: 'getVideosForLeagueOrganizer',
                    data:
                    {
                        leagueOrganizerId: leagueOrganizerId,
                        amount: amount,
                        lastVideoId: lastVideoId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            getHighlightsForLeagueOrganizer = function (leagueOrganizerId, amount, lastGameId, callbacks) {
                return amplify.request({
                    resourceId: 'getHighlightsForLeagueOrganizer',
                    data:
                    {
                        leagueOrganizerId: leagueOrganizerId,
                        amount: amount,
                        lastGameId: lastGameId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            getReplaysForLeagueOrganizer = function (leagueOrganizerId, amount, lastGameId, callbacks) {
                return amplify.request({
                    resourceId: 'getReplaysForLeagueOrganizer',
                    data:
                    {
                        leagueOrganizerId: leagueOrganizerId,
                        amount: amount,
                        lastGameId: lastGameId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            getPlannedGamesForLeagueOrganizer = function (leagueOrganizerId, amount, lastGameId, callbacks) {
                return amplify.request({
                    resourceId: 'getPlannedGamesForLeagueOrganizer',
                    data:
                    {
                        leagueOrganizerId: leagueOrganizerId,
                        amount: amount,
                        lastGameId: lastGameId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            getLiveGamesForLeagueOrganizer = function (leagueOrganizerId, amount, lastGameId, callbacks) {
                return amplify.request({
                    resourceId: 'getLiveGamesForLeagueOrganizer',
                    data:
                    {
                        leagueOrganizerId: leagueOrganizerId,
                        amount: amount,
                        lastGameId: lastGameId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            getHighlightsForLeague = function (leagueId, amount, lastGameId, callbacks) {
                return amplify.request({
                    resourceId: 'getHighlightsForLeague',
                    data:
                    {
                        leagueId: leagueId,
                        amount: amount,
                        lastGameId: lastGameId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            getReplaysForLeague = function (leagueId, amount, lastGameId, callbacks) {
                return amplify.request({
                    resourceId: 'getReplaysForLeague',
                    data:
                    {
                        leagueId: leagueId,
                        amount: amount,
                        lastGameId: lastGameId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            getPlannedGamesForLeague = function (leagueId, amount, lastGameId, callbacks) {
                return amplify.request({
                    resourceId: 'getPlannedGamesForLeague',
                    data:
                    {
                        leagueId: leagueId,
                        amount: amount,
                        lastGameId: lastGameId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            getLiveGamesForLeague = function (leagueId, amount, lastGameId, callbacks) {
                return amplify.request({
                    resourceId: 'getLiveGamesForLeague',
                    data:
                    {
                        leagueId: leagueId,
                        amount: amount,
                        lastGameId: lastGameId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            getHighlightsForClub = function (clubId, amount, lastGameId, callbacks) {
                return amplify.request({
                    resourceId: 'getHighlightsForClub',
                    data:
                    {
                        clubId: clubId,
                        amount: amount,
                        lastGameId: lastGameId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            getReplaysForClub = function (clubId, amount, lastGameId, callbacks) {
                return amplify.request({
                    resourceId: 'getReplaysForClub',
                    data:
                    {
                        clubId: clubId,
                        amount: amount,
                        lastGameId: lastGameId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            getPlannedGamesForClub = function (clubId, amount, lastGameId, callbacks) {
                return amplify.request({
                    resourceId: 'getPlannedGamesForClub',
                    data:
                    {
                        clubId: clubId,
                        amount: amount,
                        lastGameId: lastGameId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            getLiveGamesForClub = function (clubId, amount, lastGameId, callbacks) {
                return amplify.request({
                    resourceId: 'getLiveGamesForClub',
                    data:
                    {
                        clubId: clubId,
                        amount: amount,
                        lastGameId: lastGameId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },



            getHighlightsForTeam = function (teamId, amount, lastGameId, callbacks) {
                return amplify.request({
                    resourceId: 'getHighlightsForTeam',
                    data:
                    {
                        teamId: teamId,
                        amount: amount,
                        lastGameId: lastGameId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            getReplaysForTeam = function (teamId, amount, lastGameId, callbacks) {
                return amplify.request({
                    resourceId: 'getReplaysForTeam',
                    data:
                    {
                        teamId: teamId,
                        amount: amount,
                        lastGameId: lastGameId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            getPlannedGamesForTeam = function (teamId, amount, lastGameId, callbacks) {
                return amplify.request({
                    resourceId: 'getPlannedGamesForTeam',
                    data:
                    {
                        teamId: teamId,
                        amount: amount,
                        lastGameId: lastGameId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            getLiveGamesForTeam = function (teamId, amount, lastGameId, callbacks) {
                return amplify.request({
                    resourceId: 'getLiveGamesForTeam',
                    data:
                    {
                        teamId: teamId,
                        amount: amount,
                        lastGameId: lastGameId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },


            getLeagueOrganizerTeamsAdmin = function (leagueId, callbacks) {
                return amplify.request({
                    resourceId: 'getLeagueOrganizerTeamsAdmin',
                    data: {
                        leagueId: leagueId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            getLeagueOrganizerLeagues = function (leagueOrganizerId, genderId, seasonId, searchField, callbacks) {
                return amplify.request({
                    resourceId: 'getLeagueOrganizerLeagues',
                    data: {
                        leagueOrganizerId: leagueOrganizerId,
                        genderId: genderId,
                        seasonId: seasonId,
                        searchField: searchField

                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            getLeagueOrganizerLeagueCategories = function (leagueOrganizerId, genderId, seasonId, searchField, callbacks) {
                return amplify.request({
                    resourceId: 'getLeagueOrganizerLeagueCategories',
                    data: {
                        leagueOrganizerId: leagueOrganizerId,
                        genderId: genderId,
                        seasonId: seasonId,
                        searchField: searchField

                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            getLeagueCategoriesBySeasonId = function (leagueOrganizerId, seasonId, callbacks) {
                return amplify.request({
                    resourceId: 'getLeagueCategoriesBySeasonId',
                    data: {
                        leagueOrganizerId: leagueOrganizerId,
                        seasonId: seasonId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            getPlayerStatisticsForLeagueOrganizer = function (leagueOrganizerId, pageId, pageSize, column, callbacks) {
                return amplify.request({
                    resourceId: 'getPlayerStatisticsForLeagueOrganizer',
                    data: {
                        leagueOrganizerId: leagueOrganizerId,
                        pageId: pageId,
                        pageSize: pageSize,
                        column: column

                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            getGoalieStatisticsForLeagueOrganizer = function (leagueOrganizerId, pageId, pageSize, column, callbacks) {
                return amplify.request({
                    resourceId: 'getGoalieStatisticsForLeagueOrganizer',
                    data: {
                        leagueOrganizerId: leagueOrganizerId,
                        pageId: pageId,
                        pageSize: pageSize,
                        column: column

                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            getLeagueOrganizerLeaguesForAdminList = function (leagueOrganizerId, seasonId, callbacks) {
                return amplify.request({
                    resourceId: 'getLeagueOrganizerLeaguesForAdminList',
                    data: {
                        leagueOrganizerId: leagueOrganizerId,
                        seasonId: seasonId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            getLeagueOrganizerClubsForAdminList = function (leagueOrganizerId, seasonId, callbacks) {
                return amplify.request({
                    resourceId: 'getLeagueOrganizerClubsForAdminList',
                    data: {
                        leagueOrganizerId: leagueOrganizerId,
                        seasonId: seasonId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            getLeagueOrganizerDistrictsForAdminList = function (seasonId, callbacks) {
                return amplify.request({
                    resourceId: 'getLeagueOrganizerDistrictsForAdminList',
                    data: {
                        seasonId: seasonId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            getLeagueOrganizerClubs = function (leagueOrganizerId, callbacks) {
                return amplify.request({
                    resourceId: 'getLeagueOrganizerClubs',
                    data: {
                        leagueOrganizerId: leagueOrganizerId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            initWidgetMagazineWebVc = function (widgetId, callbacks) {
                return amplify.request({
                    resourceId: 'initWidgetMagazineWebVc',
                    data: {
                        widgetId: widgetId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            initMain = function (isFromWeb, callbacks) {
                return amplify.request({
                    resourceId: 'initMain',
                    data: {
                        IsFromWeb: isFromWeb
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            initMainHeader = function (callbacks) {
                return amplify.request({
                    resourceId: 'initMainHeader',
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            initAdminHeader = function (callbacks) {
                return amplify.request({
                    resourceId: 'initAdminHeader',
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            initDiscoverFeed = function (categoryId, subCategoryId, callbacks) {
                return amplify.request({
                    resourceId: 'initDiscoverFeed',
                    data: {
                        categoryId: categoryId,
                        subCategoryId: subCategoryId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            getLeagueStanding = function (leagueId, callbacks) {
                return amplify.request({
                    resourceId: 'getLeagueStanding',
                    data: {
                        leagueId: leagueId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            initMemberInviteVc = function (memberId, callbacks) {
                return amplify.request({
                    resourceId: 'initMemberInviteVc',
                    data: {
                        memberId: memberId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            initMemberEditProfile = function (memberId, callbacks) {
                return amplify.request({
                    resourceId: 'initMemberEditProfile',
                    data: {
                        memberId: memberId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            initMemberInviteAddEditVc = function (memberInviteId, callbacks) {
                return amplify.request({
                    resourceId: 'initMemberInviteAddEditVc',
                    data: {
                        memberInviteId: memberInviteId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            addNewTeamStaff = function (teamStaff, callbacks) {
                return amplify.request({
                    resourceId: 'addNewTeamStaff',
                    data: JSON.stringify(teamStaff),
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            addNewPlayer = function (player, callbacks) {
                return amplify.request({
                    resourceId: 'addNewPlayer',
                    data: JSON.stringify(player),
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            initTeamAdmin = function (teamId, callbacks) {
                return amplify.request({
                    resourceId: 'initTeamAdmin',
                    data: {
                        teamId: teamId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            initTeamAdminConnect = function (teamId, callbacks) {
                return amplify.request({
                    resourceId: 'initTeamAdminConnect',
                    data: {
                        teamId: teamId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            initTeamSponsors = function (teamId, callbacks) {
                return amplify.request({
                    resourceId: 'initTeamSponsors',
                    data: {
                        teamId: teamId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            initGameOverview = function (gameId, callbacks) {
                return amplify.request({
                    resourceId: 'initGameOverview',
                    data: {
                        gameId: gameId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            getGameOverview = function (gameId, callbacks) {
                return amplify.request({
                    resourceId: 'getGameOverview',
                    data: {
                        gameId: gameId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            getGameMediaItems = function (gameId, callbacks) {
                return amplify.request({
                    resourceId: 'getGameMediaItems',
                    data: {
                        gameId: gameId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            getGameLineUp = function (gameId, gameLineUpId, callbacks) {
                return amplify.request({
                    resourceId: 'getGameLineUp',
                    data: {
                        gameId: gameId,
                        gameLineUpId: gameLineUpId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            initGameLineUps = function (gameId, callbacks) {
                return amplify.request({
                    resourceId: 'initGameLineUps',
                    data: {
                        gameId: gameId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            initGameLeagueOverview = function (gameId, callbacks) {
                return amplify.request({
                    resourceId: 'initGameLeagueOverview',
                    data: {
                        gameId: gameId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            connectTeam = function (teamId, teamToConnectId, callbacks) {
                return amplify.request({
                    resourceId: 'connectTeam',
                    data: {
                        teamId: teamId,
                        teamToConnectId: teamToConnectId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            disconnectTeam = function (teamId, teamToDisconnectId, callbacks) {
                return amplify.request({
                    resourceId: 'disconnectTeam',
                    data: {
                        teamId: teamId,
                        teamToDisconnectId: teamToDisconnectId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            validatePersonalIdentityNumber = function (personalIdentityNumber, callbacks) {
                return amplify.request({
                    resourceId: 'validatePersonalIdentityNumber',
                    data: {
                        personalIdentityNumber: personalIdentityNumber
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            sendInvitetoTeamStaff = function (teamStaffId, callbacks) {
                return amplify.request({
                    resourceId: 'sendInvitetoTeamStaff',
                    data: {
                        teamStaffId: teamStaffId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            sendInvitetoTeamPlayer = function (teamPlayerId, callbacks) {
                return amplify.request({
                    resourceId: 'sendInvitetoTeamPlayer',
                    data: {
                        teamPlayerId: teamPlayerId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            sendInvitetoMemberGuardian = function (memberGuardianId, callbacks) {
                return amplify.request({
                    resourceId: 'sendInvitetoMemberGuardian',
                    data: {
                        memberGuardianId: memberGuardianId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            getTeamMembers = function (teamId, callbacks) {
                return amplify.request({
                    resourceId: 'getTeamMembers',
                    data: {
                        teamId: teamId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            getPossibleLiveReportersForTeam = function (teamId, callbacks) {
                return amplify.request({
                    resourceId: 'getPossibleLiveReportersForTeam',
                    data: {
                        teamId: teamId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            getPossibleTeamAdmins = function (teamId, callbacks) {
                return amplify.request({
                    resourceId: 'getPossibleTeamAdmins',
                    data: {
                        teamId: teamId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            finishTeamMemberImport = function (teamId, importFileNameGuid, excludedTeamMembers, externalDataSourceID) {
                var _data = {
                    TeamID: teamId,
                    ImportFileNameGuid: importFileNameGuid,
                    ExcludedTeamMembers: excludedTeamMembers,
                    ExternalDataSourceID: externalDataSourceID
                };
                var data = ko.toJSON(_data);
                return $.ajax({
                    url: swconstants.serverUrl + "/api/teamadminapi/finishTeamMemberImport/?callback=?",
                    type: "POST",
                    data: data,
                    datatype: "jsonp",
                    processData: false,
                    contentType: "application/json; charset=utf-8"
                });
            },

            importTeamMemberFile = function (externalDatasourceId, teamId, base64Data) {
                var _data = {
                    ExternalDataSourceID: externalDatasourceId,
                    TeamID: teamId,
                    Base64Data: base64Data
                };
                var data = ko.toJSON(_data);
                return $.ajax({
                    url: swconstants.serverUrl + "/api/teamadminapi/importteammemberfile/?callback=?",
                    type: "POST",
                    data: data,
                    datatype: "jsonp",
                    processData: false,
                    contentType: "application/json; charset=utf-8"
                });
            },

            importMyClubFile = function (externalDatasourceId, teamId, token) {
                var _data = {
                    ExternalDataSourceID: externalDatasourceId,
                    TeamID: teamId,
                    Token: token
                };
                var data = ko.toJSON(_data);
                return $.ajax({
                    url: swconstants.serverUrl + "/api/teamadminapi/importfrommyclubasync/?callback=?",
                    type: "POST",
                    data: data,
                    datatype: "jsonp",
                    processData: false,
                    contentType: "application/json; charset=utf-8"
                });
            },

            initTeamVC = function (teamId, callbacks) {
                return amplify.request({
                    resourceId: 'initTeamVC',
                    data: {
                        teamId: teamId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            initTeamLiveReporters = function (teamId, callbacks) {
                return amplify.request({
                    resourceId: 'initTeamLiveReporters',
                    data: {
                        teamId: teamId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            initTeamAdminDetails = function (teamId, callbacks) {
                return amplify.request({
                    resourceId: 'initTeamAdminDetails',
                    data: {
                        teamId: teamId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            initTeamAdminTeamFeed = function (teamId, callbacks) {
                return amplify.request({
                    resourceId: 'initTeamAdminTeamFeed',
                    data: {
                        teamId: teamId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            initTeamGamesAdminVC = function (teamId, callbacks) {
                return amplify.request({
                    resourceId: 'initTeamGamesAdminVC',
                    data: {
                        teamId: teamId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            getComingTeamGames = function (teamId, lastGameId, callbacks) {
                return amplify.request({
                    resourceId: 'getComingTeamGames',
                    data: {
                        teamId: teamId,
                        lastGameId: lastGameId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            getComingStreamedGames = function (lastGameId, callbacks) {
                return amplify.request({
                    resourceId: 'getComingStreamedGames',
                    data: {
                        lastGameId: lastGameId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            getComingTeamAdminLeagueTeams = function (teamId, lastLeagueTeamId, callbacks) {
                return amplify.request({
                    resourceId: 'getComingTeamAdminLeagueTeams',
                    data: {
                        teamId: teamId,
                        lastLeagueTeamId: lastLeagueTeamId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            getPreviousTeamAdminLeagueTeams = function (teamId, lastLeagueTeamId, callbacks) {
                return amplify.request({
                    resourceId: 'getPreviousTeamAdminLeagueTeams',
                    data: {
                        teamId: teamId,
                        lastLeagueTeamId: lastLeagueTeamId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            getPreviousTeamGames = function (teamId, lastGameId, callbacks) {
                return amplify.request({
                    resourceId: 'getPreviousTeamGames',
                    data: {
                        teamId: teamId,
                        lastGameId: lastGameId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            getPreviousStreamedGames = function (lastGameId, callbacks) {
                return amplify.request({
                    resourceId: 'getPreviousStreamedGames',
                    data: {
                        lastGameId: lastGameId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            getComingLeagueGames = function (leagueId, lastGameId, callbacks) {
                return amplify.request({
                    resourceId: 'getComingLeagueGames',
                    data: {
                        leagueId: leagueId,
                        lastGameId: lastGameId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            getPreviousLeagueGames = function (leagueId, lastGameId, callbacks) {
                return amplify.request({
                    resourceId: 'getPreviousLeagueGames',
                    data: {
                        leagueId: leagueId,
                        lastGameId: lastGameId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            getComingLeagueOrganizerGames = function (leagueOrganizerId, lastGameId, callbacks) {
                return amplify.request({
                    resourceId: 'getComingLeagueOrganizerGames',
                    data: {
                        leagueOrganizerId: leagueOrganizerId,
                        lastGameId: lastGameId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            getPreviousLeagueOrganizerGames = function (leagueOrganizerId, lastGameId, callbacks) {
                return amplify.request({
                    resourceId: 'getPreviousLeagueOrganizerGames',
                    data: {
                        leagueOrganizerId: leagueOrganizerId,
                        lastGameId: lastGameId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            getComingClubGames = function (clubId, lastGameId, callbacks) {
                return amplify.request({
                    resourceId: 'getComingClubGames',
                    data: {
                        clubId: clubId,
                        lastGameId: lastGameId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            getPreviousClubGames = function (clubId, lastGameId, callbacks) {
                return amplify.request({
                    resourceId: 'getPreviousClubGames',
                    data: {
                        clubId: clubId,
                        lastGameId: lastGameId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            initPlayersAdminVC = function (teamId, callbacks) {
                return amplify.request({
                    resourceId: 'initPlayersAdminVC',
                    data: {
                        teamId: teamId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            initTeamStaffAdminVC = function (teamId, callbacks) {
                return amplify.request({
                    resourceId: 'initTeamStaffAdminVC',
                    data: {
                        teamId: teamId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            getPlayerGuardians = function (teamId, callbacks) {
                return amplify.request({
                    resourceId: 'getPlayerGuardians',
                    data: {
                        teamId: teamId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            getPlayerPositions = function (sportId, callbacks) {
                return amplify.request({
                    resourceId: 'getPlayerPositions',
                    data: {
                        sportId: sportId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            getTeamStaffRoles = function (sportId, callbacks) {
                return amplify.request({
                    resourceId: 'getTeamStaffRoles',
                    data: {
                        sportId: sportId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            initClubAdminSearch = function (clubId, callbacks) {
                return amplify.request({
                    resourceId: 'initClubAdminSearch',
                    data: {
                        clubId: clubId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            initTeamAdminVariables = function (teamId, callbacks) {
                return amplify.request({
                    resourceId: 'initTeamAdminVariables',
                    data: {
                        teamId: teamId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            initEditMemberVariables = function (callbacks) {
                return amplify.request({
                    resourceId: 'initEditMemberVariables',
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            initAudienceForFilterType = function (audienceFilterTypeId, callbacks) {
                return amplify.request({
                    resourceId: 'initAudienceForFilterType',
                    data: {
                        audienceFilterTypeId: audienceFilterTypeId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            initTargetFilterForFilterType = function (targetFilterFilterTypeId, callbacks) {
                return amplify.request({
                    resourceId: 'initTargetFilterForFilterType',
                    data: {
                        targetFilterFilterTypeId: targetFilterFilterTypeId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            initTargetFilterNameValues = function (targetFilterId, targetFilterFilterTypeId, callbacks) {
                return amplify.request({
                    resourceId: 'initTargetFilterNameValues',
                    data: {
                        targetFilterId: targetFilterId,
                        targetFilterFilterTypeId: targetFilterFilterTypeId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            getTargetFilterGameName = function (gameId, callbacks) {
                return amplify.request({
                    resourceId: 'getTargetFilterGameName',
                    data: {
                        gameId: gameId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            getTargetFilterClubName = function (clubId, callbacks) {
                return amplify.request({
                    resourceId: 'getTargetFilterClubName',
                    data: {
                        clubId: clubId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            getTargetFilterLeagueName = function (leagueId, callbacks) {
                return amplify.request({
                    resourceId: 'getTargetFilterLeagueName',
                    data: {
                        leagueId: leagueId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            getTargetFilterLeagueCategoryName = function (leagueCategoryId, callbacks) {
                return amplify.request({
                    resourceId: 'getTargetFilterLeagueCategoryName',
                    data: {
                        leagueCategoryId: leagueCategoryId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            getInfoItemForEditView = function (infoItemType, infoItemId, callbacks) {
                return amplify.request({
                    resourceId: 'getInfoItemForEditView',
                    data: {
                        infoItemType: infoItemType,
                        infoItemId: infoItemId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            getInfoItemPagesForImport = function (leagueOrganizerId, pageId, callbacks) {
                return amplify.request({
                    resourceId: 'getInfoItemPagesForImport',
                    data: {
                        leagueOrganizerId: leagueOrganizerId,
                        pageId: pageId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            getInfoItemPostForImport = function (leagueOrganizerId, pageId, callbacks) {
                return amplify.request({
                    resourceId: 'getInfoItemPostForImport',
                    data: {
                        leagueOrganizerId: leagueOrganizerId,
                        pageId: pageId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            getInfoItemForDetailsView = function (infoItemId, callbacks) {
                return amplify.request({
                    resourceId: 'getInfoItemForDetailsView',
                    data: {
                        infoItemId: infoItemId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            getMemberAccountInfo = function (callbacks) {
                return amplify.request({
                    resourceId: 'getMemberAccountInfo',
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            getMemberPurchases = function (callbacks) {
                return amplify.request({
                    resourceId: 'getMemberPurchases',
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            getSignedAgreements = function (callbacks) {
                return amplify.request({
                    resourceId: 'getSignedAgreements',
                    success: callbacks.success,
                    error: callbacks.error
                });
            },            

            initTeamFollowers = function (teamId, callbacks) {
                return amplify.request({
                    resourceId: 'initTeamFollowers',
                    data: {
                        teamId: teamId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            initTeamLeaguesVC = function (teamId, callbacks) {
                return amplify.request({
                    resourceId: 'initTeamLeaguesVC',
                    data: {
                        teamId: teamId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            initLiveTimelineBlurbs = function (gameId, callbacks) {
                return amplify.request({
                    resourceId: 'initLiveTimelineBlurbs',
                    data: {
                        gameId: gameId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            synchronizeTimeline = function (gameId, callbacks) {
                return amplify.request({
                    resourceId: 'synchronizeTimeline',
                    data: {
                        gameId: gameId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            initLiveStreamControlPanel = function (liveStreamId, callbacks) {
                return amplify.request({
                    resourceId: 'initLiveStreamControlPanel',
                    data: {
                        liveStreamId: liveStreamId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            initPublicLiveTimelineBlurbs = function (gameId, sharedsecret, callbacks) {
                return amplify.request({
                    resourceId: 'initPublicLiveTimelineBlurbs',
                    data: {
                        gameId: gameId,
                        sharedsecret: sharedsecret
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            initTeamAdminMenu = function (teamId, callbacks) {
                return amplify.request({
                    resourceId: 'initTeamAdminMenu',
                    data: {
                        teamId: teamId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            initTeamAdminTeamsVC = function (memberId, callbacks) {
                return amplify.request({
                    resourceId: 'initTeamAdminTeamsVC',
                    data: {
                        memberId: memberId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            reportContentWithReason = function (reportContent, callbacks) {
                return amplify.request({
                    resourceId: 'reportContentWithReason',
                    data: JSON.stringify(reportContent),
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            insertMemberGuardian = function (memberGuardian, callbacks) {
                return amplify.request({
                    resourceId: 'insertMemberGuardian',
                    data: JSON.stringify(memberGuardian),
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            insertLeagueOrganizerAdmin = function (loAdmin, callbacks) {
                return amplify.request({
                    resourceId: 'insertLeagueOrganizerAdmin',
                    data: JSON.stringify(loAdmin),
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            insertInfoItem = function (infoItem, callbacks) {
                return amplify.request({
                    resourceId: 'insertInfoItem',
                    data: JSON.stringify(infoItem),
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            saveTeamPartner = function (teamPartner, callbacks) {
                return amplify.request({
                    resourceId: 'saveTeamPartner',
                    data: JSON.stringify(teamPartner),
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            saveTeamPartnerSwiss = function (teamPartner, callbacks) {
                return amplify.request({
                    resourceId: 'saveTeamPartnerSwiss',
                    data: JSON.stringify(teamPartner),
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            insertPartnerFeature = function (partnerFeature, callbacks) {
                return amplify.request({
                    resourceId: 'insertPartnerFeature',
                    data: JSON.stringify(partnerFeature),
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            gainControlOfFootballEventReport = function (footballEventReportId, callbacks) {
                return amplify.request({
                    resourceId: 'gainControlOfFootballEventReport',
                    data: {
                        footballEventReportId: footballEventReportId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            gainControlOfFloorballEventReport = function (floorballEventReportId, callbacks) {
                return amplify.request({
                    resourceId: 'gainControlOfFloorballEventReport',
                    data: {
                        floorballEventReportId: floorballEventReportId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            gainControlOfFutsalEventReport = function (futsalEventReportId, callbacks) {
                return amplify.request({
                    resourceId: 'gainControlOfFutsalEventReport',
                    data: {
                        futsalEventReportId: futsalEventReportId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            insertFootballEREvent = function (footballEREvent, callbacks) {
                return amplify.request({
                    resourceId: 'insertFootballEREvent',
                    data: JSON.stringify(footballEREvent),
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            insertFloorballEREvent = function (floorballEREvent, callbacks) {
                return amplify.request({
                    resourceId: 'insertFloorballEREvent',
                    data: JSON.stringify(floorballEREvent),
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            insertFootballEventReport = function (footballEventReport, callbacks) {
                return amplify.request({
                    resourceId: 'insertFootballEventReport',
                    data: JSON.stringify(footballEventReport),
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            updateFootballEventReport = function (footballEventReport, callbacks) {
                return amplify.request({
                    resourceId: 'updateFootballEventReport',
                    data: JSON.stringify(footballEventReport),
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            insertFloorballEventReport = function (floorballEventReport, callbacks) {
                return amplify.request({
                    resourceId: 'insertFloorballEventReport',
                    data: JSON.stringify(floorballEventReport),
                    success: callbacks.success,
                    error: callbacks.error
                });
            },            
            
            updateFloorballEventReport = function (floorballEventReport, callbacks) {
                return amplify.request({
                    resourceId: 'updateFloorballEventReport',
                    data: JSON.stringify(floorballEventReport),
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            insertFutsalEventReport = function (futsalEventReport, callbacks) {
                return amplify.request({
                    resourceId: 'insertFutsalEventReport',
                    data: JSON.stringify(futsalEventReport),
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            updateFutsalEventReport = function (futsalEventReport, callbacks) {
                return amplify.request({
                    resourceId: 'updateFutsalEventReport',
                    data: JSON.stringify(futsalEventReport),
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            insertFutsalEREvent = function (futsalEREvent, callbacks) {
                return amplify.request({
                    resourceId: 'insertFutsalEREvent',
                    data: JSON.stringify(futsalEREvent),
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            updateFootballEREvent = function (footballEREvent, callbacks) {
                return amplify.request({
                    resourceId: 'updateFootballEREvent',
                    data: JSON.stringify(footballEREvent),
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            updateFloorballEREvent = function (floorballEREvent, callbacks) {
                return amplify.request({
                    resourceId: 'updateFloorballEREvent',
                    data: JSON.stringify(floorballEREvent),
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            updateFutsalEREvent = function (futsalEREvent, callbacks) {
                return amplify.request({
                    resourceId: 'updateFutsalEREvent',
                    data: JSON.stringify(futsalEREvent),
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            startNewUserSession = function (model, callbacks) {
                return amplify.request({
                    resourceId: 'startNewUserSession',
                    data: JSON.stringify(model),
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            insertUserSessionEvents = function (model, callbacks) {
                return amplify.request({
                    resourceId: 'insertUserSessionEvents',
                    data: JSON.stringify(model),
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            updateLiveStreamSubscription = function (liveStreamSubscription, callbacks) {
                return amplify.request({
                    resourceId: 'updateLiveStreamSubscription',
                    data: JSON.stringify(liveStreamSubscription),
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            updatePartner = function (partner, callbacks) {
                return amplify.request({
                    resourceId: 'updatePartner',
                    data: JSON.stringify(partner),
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            updatePartnerFeatureSet = function (partnerFeatureSet, callbacks) {
                return amplify.request({
                    resourceId: 'updatePartnerFeatureSet',
                    data: JSON.stringify(partnerFeatureSet),
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            updatePartnerPackage = function (partnerPackage, callbacks) {
                return amplify.request({
                    resourceId: 'updatePartnerPackage',
                    data: JSON.stringify(partnerPackage),
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            initInfoItemForImportView = function (infoItemForImport, callbacks) {
                return amplify.request({
                    resourceId: 'initInfoItemForImportView',
                    data: JSON.stringify(infoItemForImport),
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            insertDiscussionPost = function (discussionPost, callbacks) {
                return amplify.request({
                    resourceId: 'insertDiscussionPost',
                    data: JSON.stringify(discussionPost),
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            insertGameDiscussionPost = function (gameDiscussionPost, callbacks) {
                return amplify.request({
                    resourceId: 'insertGameDiscussionPost',
                    data: JSON.stringify(gameDiscussionPost),
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            insertGameReport = function (gameReport, callbacks) {
                return amplify.request({
                    resourceId: 'insertGameReport',
                    data: JSON.stringify(gameReport),
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            saveGame = function (game, callbacks) {
                return amplify.request({
                    resourceId: 'saveGame',
                    data: JSON.stringify(game),
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            insertSocialEntityEmotion = function (socialEntityID, socialEntityEmotionTypeID, gameId) {
                var _data = {
                    SocialEntityID: socialEntityID,
                    SocialEntityEmotionTypeID: socialEntityEmotionTypeID,
                    GameID: gameId
                };
                var data = ko.toJSON(_data);
                return $.ajax({
                    url: swconstants.serverUrl + "/api/socialentityemotionapi/post/?callback=?",
                    type: "POST",
                    data: data,
                    datatype: "jsonp",
                    processData: false,
                    contentType: "application/json; charset=utf-8"
                });

            },

            insertGameCheckIn = function (gameId) {
                var _data = {
                    GameID: gameId
                };
                var data = ko.toJSON(_data);
                return $.ajax({
                    url: swconstants.serverUrl + "/api/gameapi/insertgamecheckin/?callback=?",
                    type: "POST",
                    data: data,
                    datatype: "jsonp",
                    processData: false,
                    contentType: "application/json; charset=utf-8"

                });
            },

            insertGameResultGuess = function (gameId, homeScore, awayScore) {
                var _data = {
                    GameID: gameId,
                    HomeScore: homeScore,
                    AwayScore: awayScore
                };
                var data = ko.toJSON(_data);
                return $.ajax({
                    url: swconstants.serverUrl + "/api/gameresultguessapi/post/?callback=?",
                    type: "POST",
                    data: data,
                    datatype: "jsonp",
                    processData: false,
                    contentType: "application/json; charset=utf-8"

                });
            },

            sendSMSInvite = function (memberInvite, callbacks) {
                return amplify.request({
                    resourceId: 'sendSMSInvite',
                    data: JSON.stringify(memberInvite),
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            insertMemberInvite = function (memberInvite, callbacks) {
                return amplify.request({
                    resourceId: 'insertMemberInvite',
                    data: JSON.stringify(memberInvite),
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            insertMemberTeamRole = function (insertMemberTeamRoleData, callbacks) {
                return amplify.request({
                    resourceId: 'insertMemberTeamRole',
                    data: JSON.stringify(insertMemberTeamRoleData),
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            insertMemberTeamRoleWithRelations = function (insertMemberTeamRoleRelationsData, callbacks) {
                return amplify.request({
                    resourceId: 'insertMemberTeamRoleWithRelations',
                    data: JSON.stringify(insertMemberTeamRoleRelationsData),
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            insertSocialEntityComment = function (socialEntityComment, callbacks) {
                return amplify.request({
                    resourceId: 'insertSocialEntityComment',
                    data: JSON.stringify(socialEntityComment),
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            insertSocialEntityLike = function (socialEntityLike, callbacks) {
                return amplify.request({
                    resourceId: 'insertSocialEntityLike',
                    data: JSON.stringify(socialEntityLike),
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            insertTeam = function (team, callbacks) {
                return amplify.request({
                    resourceId: 'insertTeam',
                    data: JSON.stringify(team),
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            insertPicture = function (picture, callbacks) {
                return amplify.request({
                    resourceId: 'insertPicture',
                    data: JSON.stringify(picture),
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            insertVideo = function (video, callbacks) {
                return amplify.request({
                    resourceId: 'insertVideo',
                    data: JSON.stringify(video),
                    success: callbacks.success,
                    error: callbacks.error
                });
            },            

            getClubLivestreamBlurbs = function (clubId, numberOfBlurbsInFeed, lastThreeMagazinePageLayoutIds) {
                var _data = {
                    ItemID: clubId,
                    NumberOfBlurbsInFeed: numberOfBlurbsInFeed,
                    Last3MagazineBlurbTypes: lastThreeMagazinePageLayoutIds
                };
                var data = ko.toJSON(_data);
                return $.ajax({
                    url: swconstants.serverUrl + "/api/clubapi/getclublivestreamblurbs/?callback=?",
                    type: "POST",
                    data: data,
                    datatype: "jsonp",
                    processData: false,
                    contentType: "application/json; charset=utf-8"

                });
            },

            getLeagueLivestreamBlurbs = function (leagueId, numberOfBlurbsInFeed, lastThreeMagazinePageLayoutIds) {
                var _data = {
                    ItemID: leagueId,
                    NumberOfBlurbsInFeed: numberOfBlurbsInFeed,
                    Last3MagazineBlurbTypes: lastThreeMagazinePageLayoutIds
                };
                var data = ko.toJSON(_data);
                return $.ajax({
                    url: swconstants.serverUrl + "/api/leagueapi/getleaguelivestreamblurbs/?callback=?",
                    type: "POST",
                    data: data,
                    datatype: "jsonp",
                    processData: false,
                    contentType: "application/json; charset=utf-8"

                });
            },

            getCompetitionLivestreamBlurbs = function (competitionId, numberOfBlurbsInFeed, lastThreeMagazinePageLayoutIds) {
                var _data = {
                    ItemID: competitionId,
                    NumberOfBlurbsInFeed: numberOfBlurbsInFeed,
                    Last3MagazineBlurbTypes: lastThreeMagazinePageLayoutIds
                };
                var data = ko.toJSON(_data);
                return $.ajax({
                    url: swconstants.serverUrl + "/api/competitionapi/getlivestreamblurbs/?callback=?",
                    type: "POST",
                    data: data,
                    datatype: "jsonp",
                    processData: false,
                    contentType: "application/json; charset=utf-8"

                });
            },

            updateGameFinalResult = function (gameId, homeTeamScore, awayTeamScore) {
                var _data = {
                    GameID: gameId,
                    HomeTeamScore: homeTeamScore,
                    AwayTeamScore: awayTeamScore
                };
                var data = ko.toJSON(_data);
                return $.ajax({
                    url: swconstants.serverUrl + "/api/gameapi/updategamefinalresult/?callback=?",
                    type: "POST",
                    data: data,
                    datatype: "jsonp",
                    processData: false,
                    contentType: "application/json; charset=utf-8"
                });
            },

            scheduleLiveStream = function (gameId, isExternal, generateDescription, encoderTypeID) {
                var _data = {
                    GameID: gameId,
                    IsExternal: isExternal,
                    GenerateDescription: generateDescription,
                    EncoderTypeID: encoderTypeID
                };
                var data = ko.toJSON(_data);
                return $.ajax({
                    url: swconstants.serverUrl + "/api/livestreamapi/schedulelivestream/?callback=?",
                    type: "POST",
                    data: data,
                    datatype: "jsonp",
                    processData: false,
                    contentType: "application/json; charset=utf-8"

                });
            },

            createGameLiveStreamSettings = function (gameId, teamId, price) {
                var _data = {
                    GameID: gameId,
                    TeamID: teamId,
                    Price: price
                };
                var data = ko.toJSON(_data);
                return $.ajax({
                    url: swconstants.serverUrl + "/api/livestreamapi/creategamelivestreamsettings/?callback=?",
                    type: "POST",
                    data: data,
                    datatype: "jsonp",
                    processData: false,
                    contentType: "application/json; charset=utf-8"

                });
            },

            updateStartRecordingTime = function (liveStreamId, startRecordingTime) {
                var _data = {
                    LiveStreamID: liveStreamId,
                    StartRecordingTime: startRecordingTime
                };
                var data = ko.toJSON(_data);
                return $.ajax({
                    url: swconstants.serverUrl + "/api/livestreamapi/updatestartrecordingtime/?callback=?",
                    type: "POST",
                    data: data,
                    datatype: "jsonp",
                    processData: false,
                    contentType: "application/json; charset=utf-8"
                });
            },

            getLeagueOrganizerLivestreamBlurbs = function (leagueOrganizerId, numberOfBlurbsInFeed, lastThreeMagazinePageLayoutIds) {
                var _data = {
                    ItemID: leagueOrganizerId,
                    NumberOfBlurbsInFeed: numberOfBlurbsInFeed,
                    Last3MagazineBlurbTypes: lastThreeMagazinePageLayoutIds
                };
                var data = ko.toJSON(_data);
                return $.ajax({
                    url: swconstants.serverUrl + "/api/leagueorganizerapi/getleagueorganizerlivestreamblurbs/?callback=?",
                    type: "POST",
                    data: data,
                    datatype: "jsonp",
                    processData: false,
                    contentType: "application/json; charset=utf-8"

                });
            },

            GetClubMagazineBlurbs = function (clubId, lastGameTime, lastGameId, lastThreeMagazinePageLayoutIds, currentGamesInFeed) {
                var _data = {
                    ClubID: clubId,
                    LastGameTime: lastGameTime,
                    LastGameID: lastGameId,
                    Last3MagazineBlurbTypes: lastThreeMagazinePageLayoutIds,
                    CurrentGamesInFeed: currentGamesInFeed
                };
                var data = ko.toJSON(_data);
                return $.ajax({
                    url: swconstants.serverUrl + "/api/clubapi/getclubmagazineblurbs/?callback=?",
                    type: "POST",
                    data: data,
                    datatype: "jsonp",
                    processData: false,
                    contentType: "application/json; charset=utf-8"
                });
            },

            GetLeagueOrganizerMagazineBlurbs = function (leagueOrganizerId, lastGameTime, lastThreeMagazinePageLayoutIds, currentGamesInFeed) {
                var _data = {
                    LeagueOrganizerID: leagueOrganizerId,
                    LastGameTime: lastGameTime,
                    Last3MagazineBlurbTypes: lastThreeMagazinePageLayoutIds,
                    CurrentGamesInFeed: currentGamesInFeed
                };
                var data = ko.toJSON(_data);
                return $.ajax({
                    url: swconstants.serverUrl + "/api/leagueorganizerapi/getleagueorganizermagazineblurbs/?callback=?",
                    type: "POST",
                    data: data,
                    datatype: "jsonp",
                    processData: false,
                    contentType: "application/json; charset=utf-8"

                });

            },

            GetLeagueMagazineBlurbs = function (leagueId, lastGameTime, lastThreeMagazinePageLayoutIds, currentGamesInFeed) {
                var _data = {
                    LeagueID: leagueId,
                    LastGameTime: lastGameTime,
                    Last3MagazineBlurbTypes: lastThreeMagazinePageLayoutIds,
                    CurrentGamesInFeed: currentGamesInFeed
                };
                var data = ko.toJSON(_data);
                return $.ajax({
                    url: swconstants.serverUrl + "/api/leagueapi/getleaguemagazineblurbs/?callback=?",
                    type: "POST",
                    data: data,
                    datatype: "jsonp",
                    processData: false,
                    contentType: "application/json; charset=utf-8"
                });
            },

            getCompetitionMagazineBlurbs = function (competitionId, lastGameTime, lastThreeMagazinePageLayoutIds, currentGamesInFeed) {
                var _data = {
                    CompetitionID: competitionId,
                    LastGameTime: lastGameTime,
                    Last3MagazineBlurbTypes: lastThreeMagazinePageLayoutIds,
                    CurrentGamesInFeed: currentGamesInFeed
                };
                var data = ko.toJSON(_data);
                return $.ajax({
                    url: swconstants.serverUrl + "/api/competitionapi/getcompetitionmagazineblurbs/?callback=?",
                    type: "POST",
                    data: data,
                    datatype: "jsonp",
                    processData: false,
                    contentType: "application/json; charset=utf-8"
                });
            },                        

            GetWidgetMagazineBlurbs = function (teamId, clubId, lastGameTime, lastThreeMagazinePageLayoutIds, currentGamesInFeed) {
                var _data = {
                    TeamID: teamId,
                    ClubID: clubId,
                    LastGameTime: lastGameTime,
                    Last3MagazineBlurbTypes: lastThreeMagazinePageLayoutIds,
                    CurrentGamesInFeed: currentGamesInFeed
                };
                var data = ko.toJSON(_data);
                return $.ajax({
                    url: swconstants.serverUrl + "/api/widgetapi/GetWidgetMagazineBlurbs/?callback=?",
                    type: "POST",
                    data: data,
                    datatype: "jsonp",
                    processData: false,
                    contentType: "application/json; charset=utf-8"

                });
            },            

            GetBlurbsForMyFeed = function (lastThreeMagazinePageLayoutIds, rowNumber) {
                var _data = {
                    Last3MagazineBlurbTypes: lastThreeMagazinePageLayoutIds,
                    RowNumber: rowNumber
                };
                var data = ko.toJSON(_data);
                return $.ajax({
                    url: swconstants.serverUrl + "/api/magazineapi/getmyfeed/?callback=?",
                    type: "POST",
                    data: data,
                    datatype: "jsonp",
                    processData: false,
                    contentType: "application/json; charset=utf-8"

                });
            },

            GetBlurbsForTeamFeed = function (memberId, lastTimeStamp, lastThreeMagazinePageLayoutIds, lastGameId, teamId) {
                var _data = {
                    MemberID: memberId,
                    LastTimeStamp: lastTimeStamp,
                    Last3MagazineBlurbTypes: lastThreeMagazinePageLayoutIds,
                    LastGameID: lastGameId,
                    TeamID: teamId
                };
                var data = ko.toJSON(_data);
                return $.ajax({
                    url: swconstants.serverUrl + "/api/teamfeedapi/getblurbsforteamfeed/?callback=?",
                    type: "POST",
                    data: data,
                    datatype: "jsonp",
                    processData: false,
                    contentType: "application/json; charset=utf-8"
                });

            },

            GetBlurbsForDiscoverFeed = function (categoryId, subCategoryId, lastThreeMagazinePageLayoutIds, numberOfBlurbsInFeed) {
                var _data = {
                    CategoryID: categoryId,
                    SubCategoryID: subCategoryId,
                    Last3MagazineBlurbTypes: lastThreeMagazinePageLayoutIds,
                    NumberOfBlurbsInFeed: numberOfBlurbsInFeed
                };
                var data = ko.toJSON(_data);
                return $.ajax({
                    url: swconstants.serverUrl + "/api/magazineapi/getdiscoverfeed/?callback=?",
                    type: "POST",
                    data: data,
                    datatype: "jsonp",
                    processData: false,
                    contentType: "application/json; charset=utf-8"
                });
            },

            postAzureVideo = function (uploadAssetId, itemId, itemTypeId, description, thumbnailBase64) {
                var _data = {
                    UploadAssetID: uploadAssetId,
                    ItemID: itemId,
                    ItemTypeID: itemTypeId,
                    Description: description,
                    ThumbnailBase64: thumbnailBase64
                };
                var data = ko.toJSON(_data);
                return $.ajax({
                    url: swconstants.serverUrl + "/api/videoapi/postazurevideo/?callback=?",
                    type: "POST",
                    data: data,
                    datatype: "jsonp",
                    processData: false,
                    contentType: "application/json; charset=utf-8"

                });
            },

            getTeamConnectViewModel = function (teamId, connectTeamIDs) {
                var _data = {
                    TeamID: teamId,
                    ConnectTeamIDs: connectTeamIDs
                };
                var data = ko.toJSON(_data);
                return $.ajax({
                    url: swconstants.serverUrl + "/api/teamconnectapi/getteamconnectviewmodel/?callback=?",
                    type: "POST",
                    data: data,
                    datatype: "jsonp",
                    processData: false,
                    contentType: "application/json; charset=utf-8"

                });
            },

            getConnectInformation = function (teamId, connectTeamIDs) {
                var _data = {
                    TeamID: teamId,
                    ConnectTeamIDs: connectTeamIDs
                };
                var data = ko.toJSON(_data);
                return $.ajax({
                    url: swconstants.serverUrl + "/api/teamconnectapi/getconnectinformation/?callback=?",
                    type: "POST",
                    data: data,
                    datatype: "jsonp",
                    processData: false,
                    contentType: "application/json; charset=utf-8"

                });
            },

            sendLeagueTeamInvites = function (leagueTeamIDs, isReminder) {
                var _data = {
                    LeagueTeamIDs: leagueTeamIDs,
                    isReminder: isReminder
                };
                var data = ko.toJSON(_data);
                return $.ajax({
                    url: swconstants.serverUrl + "/api/leagueteaminviteapi/sendleagueteaminvites/?callback=?",
                    type: "POST",
                    data: data,
                    datatype: "jsonp",
                    processData: false,
                    contentType: "application/json; charset=utf-8"

                });
            },

            sendLeagueTeamInfoEmails = function (leagueOrganizerId, seasonId, callbacks) {
                return amplify.request({
                    resourceId: 'sendLeagueTeamInfoEmails',
                    data: {
                        leagueOrganizerId: leagueOrganizerId,
                        seasonId: seasonId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            sendLeagueTeamInviteEmails = function (leagueOrganizerId, seasonId, isReminder, callbacks) {
                return amplify.request({
                    resourceId: 'sendLeagueTeamInviteEmails',
                    data: {
                        leagueOrganizerId: leagueOrganizerId,
                        seasonId: seasonId,
                        isReminder: isReminder
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            sendLeagueTeamInviteEmailsFutsal = function (leagueOrganizerId, seasonId, isReminder, callbacks) {
                return amplify.request({
                    resourceId: 'sendLeagueTeamInviteEmailsFutsal',
                    data: {
                        leagueOrganizerId: leagueOrganizerId,
                        seasonId: seasonId,
                        isReminder: isReminder
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            sendLeagueTeamInviteSMS = function (leagueOrganizerId, seasonId, isReminder, callbacks) {
                return amplify.request({
                    resourceId: 'sendLeagueTeamInviteSMS',
                    data: {
                        leagueOrganizerId: leagueOrganizerId,
                        seasonId: seasonId,
                        isReminder: isReminder
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            sendClubAdminEmails = function (leagueOrganizerId, seasonId, isReminder, callbacks) {
                return amplify.request({
                    resourceId: 'sendClubAdminEmails',
                    data: {
                        leagueOrganizerId: leagueOrganizerId,
                        seasonId: seasonId,
                        isReminder: isReminder
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            sendRefereeInviteEmails = function (leagueOrganizerId, seasonId, isReminder, callbacks) {
                return amplify.request({
                    resourceId: 'sendRefereeInviteEmails',
                    data: {
                        leagueOrganizerId: leagueOrganizerId,
                        seasonId: seasonId,
                        isReminder: isReminder
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            dismissTeamAction = function (teamActionId, callbacks) {
                return amplify.request({
                    resourceId: 'dismissTeamAction',
                    data: {
                        teamActionId: teamActionId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            setTeamActionStatusCompleted = function (teamActionId, callbacks) {
                return amplify.request({
                    resourceId: 'setTeamActionStatusCompleted',
                    data: {
                        teamActionId: teamActionId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },            

            processGameHighlights = function (gameId) {
                return $.ajax({
                    url: swconstants.serverUrl + "/api/livestreamhighlightapi/processgamehighlights/?gameid=" + gameId + "&callback=?",
                    type: "POST",
                    datatype: "jsonp",
                    processData: false,
                    contentType: "application/json; charset=utf-8"
                });
            },

            followTeam = function (teamId) {
                return $.ajax({
                    url: swconstants.serverUrl + "/api/teamapi/followteam/?teamid=" + teamId + "&callback=?",
                    type: "POST",
                    datatype: "jsonp",
                    processData: false,
                    contentType: "application/json; charset=utf-8"
                });
            },

            getLiveTimelineBlurbUpdates = function (gameId, memberId, lastTimelineItemInsertTime, firstTimelineItemInsertTime) {
                var _data = {
                    GameID: gameId,
                    MemberID: memberId,
                    LastTimelineItemInsertTime: lastTimelineItemInsertTime,
                    FirstTimelineItemInsertTime: firstTimelineItemInsertTime
                };
                var data = ko.toJSON(_data);
                return $.ajax({
                    url: swconstants.serverUrl + "/api/followgameapi/getlivetimelineblurbupdates/?callback=?",
                    type: "POST",
                    data: data,
                    datatype: "jsonp",
                    processData: false,
                    contentType: "application/json; charset=utf-8"
                });
            },

            getMemberCalendarLiveGamesCounter = function (callbacks) {
                return amplify.request({
                    resourceId: 'getMemberCalendarLiveGamesCounter',
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            getMemberNotifications = function (callbacks) {
                return amplify.request({
                    resourceId: 'getMemberNotifications',
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            getGameTeamRosterWarnings = function (gameTeamRosterId, callbacks) {
                return amplify.request({
                    resourceId: 'getGameTeamRosterWarnings',
                    data: {
                        gameTeamRosterId: gameTeamRosterId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            mergeMembers = function (memberIdToDelete, memberIdToKeep, callbacks) {
                return amplify.request({
                    resourceId: 'mergeMembers',
                    data: {
                        memberIdToDelete: memberIdToDelete,
                        memberIdToKeep: memberIdToKeep
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            initMemberCalendar = function (callbacks) {
                return amplify.request({
                    resourceId: 'initMemberCalendar',
                    success: callbacks.success,
                    error: callbacks.error
                });
            },



            getMemberHeader = function (memberId, callbacks) {
                return amplify.request({
                    resourceId: 'getMemberHeader',
                    data: {
                        memberId: memberId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            getUploadedItemsForMember = function (memberId, callbacks) {
                return amplify.request({
                    resourceId: 'getUploadedItemsForMember',
                    data: {
                        memberId: memberId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            getReportedItemsForMember = function (memberId, callbacks) {
                return amplify.request({
                    resourceId: 'getReportedItemsForMember',
                    data: {
                        memberId: memberId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            getReportedItemsForGame = function (gameId, callbacks) {
                return amplify.request({
                    resourceId: 'getReportedItemsForGame',
                    data: {
                        gameId: gameId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            getReportedItemsByReportedMember = function (memberId, callbacks) {
                return amplify.request({
                    resourceId: 'getReportedItemsByReportedMember',
                    data: {
                        memberId: memberId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            getMemberRoles = function (memberId, callbacks) {
                return amplify.request({
                    resourceId: 'getMemberRoles',
                    data: {
                        memberId: memberId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            getMemberCalendarGames = function (GetOlderGames, LastGameID, callbacks) {
                return amplify.request({
                    resourceId: 'getMemberCalendarGames',
                    data: {
                        GetOlderGames: GetOlderGames,
                        LastGameID: LastGameID
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            updateDiscussionPost = function (discussionPost, callbacks) {
                return amplify.request({
                    resourceId: 'updateDiscussionPost',
                    data: JSON.stringify(discussionPost),
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            changeOptInSettingForMemberAgreement = function (agreementId, didActivate, callbacks) {
                return amplify.request({
                    resourceId: 'changeOptInSettingForMemberAgreement',
                    data: {
                        agreementId: agreementId,
                        didActivate: didActivate
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            updateInfoItem = function (infoItem, callbacks) {
                return amplify.request({
                    resourceId: 'updateInfoItem',
                    data: JSON.stringify(infoItem),
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            updateAzureMedia = function (Id, itemTypeId, callbacks) {
                return amplify.request({
                    resourceId: 'updateAzureMedia',
                    data: JSON.stringify({
                        VideoID: Id,
                        ItemTypeID: itemTypeId
                    }),
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            updateGameDiscussionPost = function (gameDiscussionPost, callbacks) {
                return amplify.request({
                    resourceId: 'updateGameDiscussionPost',
                    data: JSON.stringify(gameDiscussionPost),
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            updateGameReport = function (gameReport, callbacks) {
                return amplify.request({
                    resourceId: 'updateGameReport',
                    data: JSON.stringify(gameReport),
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            updateAdminMember = function (member, callbacks) {
                return amplify.request({
                    resourceId: 'updateAdminMember',
                    data: JSON.stringify(member),
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            updateTeamPartnerStatus = function (teamPartnerId, teamPartnerStatusId, callbacks) {
                return amplify.request({
                    resourceId: 'updateTeamPartnerStatus',
                    data: JSON.stringify({
                        TeamPartnerID: teamPartnerId,
                        TeamPartnerStatusID: teamPartnerStatusId
                    }),
                    //data: {
                    //    TeamPartnerID: teamPartnerId,
                    //    TeamPartnerStatusID: teamPartnerStatusId
                    //},
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            updatePartnerFeature = function (partnerFeature, callbacks) {
                return amplify.request({
                    resourceId: 'updatePartnerFeature',
                    data: JSON.stringify(partnerFeature),
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            updateMember = function (member, callbacks) {
                return amplify.request({
                    resourceId: 'updateMember',
                    data: JSON.stringify(member),
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            updateMemberPicture = function (member, callbacks) {
                return amplify.request({
                    resourceId: 'updateMemberPicture',
                    data: JSON.stringify(member),
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            updateMemberSettings = function (member, callbacks) {
                return amplify.request({
                    resourceId: 'updateMemberSettings',
                    data: JSON.stringify(member),
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            updateReferencePicture = function (member, callbacks) {
                return amplify.request({
                    resourceId: 'updateReferencePicture',
                    data: JSON.stringify(member),
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            updatePictureInfo = function (uploadAssetId, pictureId, description, permissionLevel, teamId, callbacks) {
                return amplify.request({
                    resourceId: 'updatePictureInfo',
                    data: JSON.stringify({
                        UploadAssetID: uploadAssetId,
                        PictureID: pictureId,
                        Description: description,
                        PermissionLevel: permissionLevel,
                        TeamID: teamId
                    }),
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            updateGameVideoInfo = function (uploadAssetId, videoId, description, callbacks) {
                return amplify.request({
                    resourceId: 'updateGameVideoInfo',
                    data: JSON.stringify({
                        UploadAssetID: uploadAssetId,
                        VideoID: videoId,
                        Description: description
                    }),
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            updateVideoInfo = function (uploadAssetId, videoId, description, permissionLevel, teamId, callbacks) {
                return amplify.request({
                    resourceId: 'updateVideoInfo',
                    data: JSON.stringify({
                        UploadAssetID: uploadAssetId,
                        VideoID: videoId,
                        Description: description,
                        PermissionLevel: permissionLevel,
                        TeamID: teamId
                    }),
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            updatePartnerVideoInfo = function (uploadAssetId, videoId, callbacks) {
                return amplify.request({
                    resourceId: 'updatePartnerVideoInfo',
                    data: JSON.stringify({
                        UploadAssetID: uploadAssetId,
                        VideoID: videoId
                    }),
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            updateTeam = function (team, callbacks) {
                return amplify.request({
                    resourceId: 'updateTeam',
                    data: JSON.stringify(team),
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            initAudienceForFilterTypeClub = function (filterData, callbacks) {
                return amplify.request({
                    resourceId: 'initAudienceForFilterTypeClub',
                    data: JSON.stringify(filterData),
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            initAudienceForFilterTypeTeam = function (filterData, callbacks) {
                return amplify.request({
                    resourceId: 'initAudienceForFilterTypeTeam',
                    data: JSON.stringify(filterData),
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            updateTeamVM = function (team, callbacks) {
                return amplify.request({
                    resourceId: 'updateTeamVM',
                    data: JSON.stringify(team),
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            updateTeams = function (game, callbacks) {
                return amplify.request({
                    resourceId: 'updateTeams',
                    data: JSON.stringify(game),
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            updateSpectators = function (game, callbacks) {
                return amplify.request({
                    resourceId: 'updateSpectators',
                    data: JSON.stringify(game),
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            updateTeamPlayer = function (player, callbacks) {
                return amplify.request({
                    resourceId: 'updateTeamPlayer',
                    data: JSON.stringify(player),
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            updateTeamStaff = function (teamStaff, callbacks) {
                return amplify.request({
                    resourceId: 'updateTeamStaff',
                    data: JSON.stringify(teamStaff),
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            updateMemberGuardian = function (memberGuardian, callbacks) {
                return amplify.request({
                    resourceId: 'updateMemberGuardian',
                    data: JSON.stringify(memberGuardian),
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            initMemberProfile = function (memberId, callbacks) {
                return amplify.request({
                    resourceId: 'initMemberProfile',
                    data: {
                        memberId: memberId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            initTeamPlayerProfile = function (id, callbacks) {
                return amplify.request({
                    resourceId: 'initTeamPlayerProfile',
                    data: {
                        Id: id
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            generateChangeEmailRequest = function (memberId, email, callbacks) {
                return amplify.request({
                    resourceId: 'generateChangeEmailRequest',
                    data: {
                        memberId: memberId,
                        email: email
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            generateChangePhoneNumberRequest = function (memberId, countryCodePrefix, phoneNumber, callbacks) {
                return amplify.request({
                    resourceId: 'generateChangePhoneNumberRequest',
                    data: {
                        memberId: memberId,
                        countryCodePrefix: countryCodePrefix,
                        phoneNumber: phoneNumber
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            verifyEmailChange = function (verificationCode, callbacks) {
                return amplify.request({
                    resourceId: 'verifyEmailChange',
                    data: {
                        verificationCode: verificationCode
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            verifyPhoneNumberChange = function (verificationCode, callbacks) {
                return amplify.request({
                    resourceId: 'verifyPhoneNumberChange',
                    data: {
                        verificationCode: verificationCode
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            getMemberForAdminEdit = function (memberId, callbacks) {
                return amplify.request({
                    resourceId: 'getMemberForAdminEdit',
                    data: {
                        memberId: memberId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            getMemberForMemberDetails = function (memberId, callbacks) {
                return amplify.request({
                    resourceId: 'getMemberForMemberDetails',
                    data: {
                        memberId: memberId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            checkIfTeamPlayerRequireGuardians = function (id, callbacks) {
                return amplify.request({
                    resourceId: 'checkIfTeamPlayerRequireGuardians',
                    data: {
                        id: id
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            getTimelineItem = function (gameId, liveTimelineItemID, liveTimelineItemTypeID, callbacks) {
                return amplify.request({
                    resourceId: 'getTimelineItem',
                    data: {
                        gameId: gameId,
                        liveTimelineItemID: liveTimelineItemID,
                        liveTimelineItemTypeID: liveTimelineItemTypeID
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            getTimelineBlurb = function (gameId, liveTimelineItemID, liveTimelineItemTypeID, callbacks) {
                return amplify.request({
                    resourceId: 'getTimelineBlurb',
                    data: {
                        gameId: gameId,
                        liveTimelineItemID: liveTimelineItemID,
                        liveTimelineItemTypeID: liveTimelineItemTypeID
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            getAzureMediaUploadInfo = function (uploadAssetId, containerType, callbacks) {
                return amplify.request({
                    resourceId: 'getAzureMediaUploadInfo',
                    data: {
                        uploadAssetId: uploadAssetId,
                        containerType: containerType
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            getMoreTimelineBlurbs = function (gameId, lastTimelineItem, lastTimeLineItemId, callbacks) {
                return amplify.request({
                    resourceId: 'getMoreTimelineBlurbs',
                    data:
                    {
                        GameID: gameId,
                        LastTimelineItem: lastTimelineItem,
                        LastItemID: lastTimeLineItemId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            getMoreTeamInfoItems = function (teamId, lastInfoItemId, callbacks) {
                return amplify.request({
                    resourceId: 'getMoreTeamInfoItems',
                    data:
                    {
                        teamId: teamId,
                        lastInfoItemId: lastInfoItemId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            getMoreManagedTeamInfoItems = function (teamId, lastInfoItemId, published, callbacks) {
                return amplify.request({
                    resourceId: 'getMoreManagedTeamInfoItems',
                    data:
                    {
                        teamId: teamId,
                        lastInfoItemId: lastInfoItemId,
                        published: published
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            getMoreClubInfoItems = function (clubId, lastInfoItemId, callbacks) {
                return amplify.request({
                    resourceId: 'getMoreClubInfoItems',
                    data:
                    {
                        clubId: clubId,
                        lastInfoItemId: lastInfoItemId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            getMoreManagedClubInfoItems = function (clubId, lastInfoItemId, published, callbacks) {
                return amplify.request({
                    resourceId: 'getMoreManagedClubInfoItems',
                    data:
                    {
                        clubId: clubId,
                        lastInfoItemId: lastInfoItemId,
                        published: published
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            getMoreLeagueOrganizerInfoItems = function (leagueOrganizerId, lastInfoItemId, callbacks) {
                return amplify.request({
                    resourceId: 'getMoreLeagueOrganizerInfoItems',
                    data:
                    {
                        leagueOrganizerId: leagueOrganizerId,
                        lastInfoItemId: lastInfoItemId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            getMoreManagedLeagueOrganizerInfoItems = function (leagueOrganizerId, lastInfoItemId, published, callbacks) {
                return amplify.request({
                    resourceId: 'getMoreManagedLeagueOrganizerInfoItems',
                    data:
                    {
                        leagueOrganizerId: leagueOrganizerId,
                        lastInfoItemId: lastInfoItemId,
                        published: published
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            getTipInfoItems = function (callbacks) {
                return amplify.request({
                    resourceId: 'getTipInfoItems',
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            getManagedTipInfoItems = function (callbacks) {
                return amplify.request({
                    resourceId: 'getManagedTipInfoItems',
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            postPicture = function (uploadAssetId, gameId, teamId, callbacks) {
                return amplify.request({
                    resourceId: 'postPicture',
                    //data: JSON.stringify(picture),
                    data: JSON.stringify({
                        UploadAssetID: uploadAssetId,
                        GameID: gameId,
                        TeamID: teamId
                    }),
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            postVideo = function (uploadAssetId, gameId, teamId, callbacks) {
                return amplify.request({
                    resourceId: 'postVideo',
                    data: JSON.stringify({
                        UploadAssetID: uploadAssetId,
                        GameID: gameId,
                        TeamID: teamId
                    }),
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            postGameVideo = function (uploadAssetId, gameId, thumbnailBase64, videoTypeId, callbacks) {
                return amplify.request({
                    resourceId: 'postGameVideo',
                    data: JSON.stringify({
                        UploadAssetID: uploadAssetId,
                        GameID: gameId,
                        ThumbnailBase64: thumbnailBase64,
                        VideoTypeID: videoTypeId
                    }),
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            postPartnerFeatureVideo = function (uploadAssetId, callbacks) {
                return amplify.request({
                    resourceId: 'postPartnerFeatureVideo',
                    data: JSON.stringify({
                        UploadAssetID: uploadAssetId
                    }),
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            uploadVideo = function (uploadAssetID, item, callbacks) {
                var request = new FormData();
                request.append('file', item.File);
                $.ajax({
                    type: 'POST',
                    url: swconstants.serverUrl + "/api/upload/postvideoasync?uploadassetid=" + uploadAssetID,
                    data: request,
                    processData: false,
                    contentType: false,
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            uploadMedia = function (pictureInfo, item, callbacks) {
                var request = new FormData();
                request.append('file', item.File);
                $.ajax({
                    type: 'POST',
                    url: swconstants.serverUrl + "/api/upload/postpictureasync?UploadAssetID=" + pictureInfo.UploadAssetID,
                    data: request,
                    processData: false,
                    contentType: false,
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            initPlayerPage = function (id, callbacks) {
                return amplify.request({
                    resourceId: 'initPlayerPage',
                    data:
                    {
                        Id: id
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            initPlayerProfile = function (teamPlayerId, gamePlayerId, callbacks) {
                return amplify.request({
                    resourceId: 'initPlayerProfile',
                    data:
                    {
                        teamPlayerId: teamPlayerId,
                        gamePlayerId: gamePlayerId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            getPlayerLeagueStatistics = function (playerId, callbacks) {
                return amplify.request({
                    resourceId: 'getPlayerLeagueStatistics',
                    data:
                    {
                        playerId: playerId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            getPlayerHighlights = function (playerId, callbacks) {
                return amplify.request({
                    resourceId: 'getPlayerHighlights',
                    data:
                    {
                        playerId: playerId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            updateTeamPlayerOld = function (teamPlayer, callbacks) {
                return amplify.request({
                    resourceId: 'updateTeamPlayerOld',
                    data: JSON.stringify(teamPlayer),
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            updateTeamPlayerPrivacySettings = function (teamPlayerPrivacySettings, callbacks) {
                return amplify.request({
                    resourceId: 'updateTeamPlayerPrivacySettings',
                    data: JSON.stringify(teamPlayerPrivacySettings),
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            getPlayerHeader = function (id, callbacks) {
                return amplify.request({
                    resourceId: 'getPlayerHeader',
                    data:
                    {
                        Id: id
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            getPlayerForDetailsView = function (id, callbacks) {
                return amplify.request({
                    resourceId: 'getPlayerForDetailsView',
                    data:
                    {
                        Id: id
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            getTeamPlayerForEditView = function (teamPlayerId, callbacks) {
                return amplify.request({
                    resourceId: 'getTeamPlayerForEditView',
                    data:
                    {
                        teamPlayerId: teamPlayerId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            getTeamStaffForEditView = function (id, callbacks) {
                return amplify.request({
                    resourceId: 'getTeamStaffForEditView',
                    data:
                    {
                        Id: id
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            getMemberGuardianForEditView = function (id, callbacks) {
                return amplify.request({
                    resourceId: 'getMemberGuardianForEditView',
                    data:
                    {
                        Id: id
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            initTeamPlayerForEditView = function (teamId, callbacks) {
                return amplify.request({
                    resourceId: 'initTeamPlayerForEditView',
                    data:
                    {
                        teamId: teamId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            initTeamStaffForEditView = function (id, callbacks) {
                return amplify.request({
                    resourceId: 'initTeamStaffForEditView',
                    data:
                    {
                        Id: id
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            getPlayerGuardianForDetailsView = function (playerGuardianId, callbacks) {
                return amplify.request({
                    resourceId: 'getPlayerGuardianForDetailsView',
                    data:
                    {
                        PlayerGuardianID: playerGuardianId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            getTeamStaffForDetailsView = function (teamStaffId, callbacks) {
                return amplify.request({
                    resourceId: 'getTeamStaffForDetailsView',
                    data:
                    {
                        TeamStaffID: teamStaffId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            getAllLiveStreamProviders = function (callbacks) {
                return amplify.request({
                    resourceId: 'getAllLiveStreamProviders',
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            getLeagueForDetailsView = function (leagueId, callbacks) {
                return amplify.request({
                    resourceId: 'getLeagueForDetailsView',
                    data:
                    {
                        id: leagueId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            getLeagueGames = function (leagueId, callbacks) {
                return amplify.request({
                    resourceId: 'getLeagueGames',
                    data:
                    {
                        LeagueID: leagueId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            getLeaguePlayOffGames = function (leagueId, callbacks) {
                return amplify.request({
                    resourceId: 'getLeaguePlayOffGames',
                    data:
                    {
                        leagueId: leagueId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            getLeagueTeams = function (leagueId, callbacks) {
                return amplify.request({
                    resourceId: 'getLeagueTeams',
                    data:
                    {
                        LeagueID: leagueId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            getLeagueOrganizerTeams = function (leagueOrganizerId, callbacks) {
                return amplify.request({
                    resourceId: 'getLeagueOrganizerTeams',
                    data:
                    {
                        LeagueOrganizerID: leagueOrganizerId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            getGoalieStatisticsForLeague = function (leagueId, pageId, pageSize, column, callbacks) {
                return amplify.request({
                    resourceId: 'getGoalieStatisticsForLeague',
                    data:
                    {
                        leagueId: leagueId,
                        pageId: pageId,
                        pageSize: pageSize,
                        column: column

                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            getFootballPlayerStatisticsForLeague = function (leagueId, pageId, pageSize, column, callbacks) {
                return amplify.request({
                    resourceId: 'getFootballPlayerStatisticsForLeague',
                    data:
                    {
                        leagueId: leagueId,
                        pageId: pageId,
                        pageSize: pageSize,
                        column: column

                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            getPlayerStatisticsForLeague = function (leagueId, pageId, pageSize, column, callbacks) {
                return amplify.request({
                    resourceId: 'getPlayerStatisticsForLeague',
                    data:
                    {
                        leagueId: leagueId,
                        pageId: pageId,
                        pageSize: pageSize,
                        column: column

                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            getPlayerStatisticsForLeaguePlayOff = function (leagueId, pageId, pageSize, column, callbacks) {
                return amplify.request({
                    resourceId: 'getPlayerStatisticsForLeaguePlayOff',
                    data:
                    {
                        leagueId: leagueId,
                        pageId: pageId,
                        pageSize: pageSize,
                        column: column

                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },            

            getPlayersForGameSelectLists = function (homeTeamId, awayTeamId, gameId, callbacks) {
                return amplify.request({
                    resourceId: 'getPlayersForGameSelectLists',
                    data:
                    {
                        homeTeamId: homeTeamId,
                        awayTeamId: awayTeamId,
                        gameId: gameId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            getFootballEventReport = function (footballEventReportId, callbacks) {
                return amplify.request({
                    resourceId: 'getFootballEventReport',
                    data:
                    {
                        footballEventReportId: footballEventReportId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            getFloorballEventReport = function (floorballEventReportId, callbacks) {
                return amplify.request({
                    resourceId: 'getFloorballEventReport',
                    data:
                    {
                        floorballEventReportId: floorballEventReportId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            getFutsalEventReport = function (futsalEventReportId, callbacks) {
                return amplify.request({
                    resourceId: 'getFutsalEventReport',
                    data:
                    {
                        futsalEventReportId: futsalEventReportId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            getFootballEREventForEdit = function (footballEREventId, callbacks) {
                return amplify.request({
                    resourceId: 'getFootballEREventForEdit',
                    data:
                    {
                        footballEREventId: footballEREventId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            getFloorballEREventForEdit = function (floorballEREventId, callbacks) {
                return amplify.request({
                    resourceId: 'getFloorballEREventForEdit',
                    data:
                    {
                        floorballEREventId: floorballEREventId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },            

            getFutsalEREventForEdit = function (futsalEREventId, callbacks) {
                return amplify.request({
                    resourceId: 'getFutsalEREventForEdit',
                    data:
                    {
                        futsalEREventId: futsalEREventId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            getFloorballChanceTypesForSelectList = function (callbacks) {
                return amplify.request({
                    resourceId: 'getFloorballChanceTypesForSelectList',                    
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            getFloorballPenaltyTypesForSelectList = function (callbacks) {
                return amplify.request({
                    resourceId: 'getFloorballPenaltyTypesForSelectList',                    
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            getFloorballGoalTypesForSelectList = function (callbacks) {
                return amplify.request({
                    resourceId: 'getFloorballGoalTypesForSelectList',
                    success: callbacks.success,
                    error: callbacks.error
                });
            },            

            initGoalieStatisticsForLeague = function (leagueId, column, callbacks) {
                return amplify.request({
                    resourceId: 'initGoalieStatisticsForLeague',
                    data:
                    {
                        leagueId: leagueId,
                        column: column

                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            initFootballPlayerStatisticsForLeague = function (leagueId, column, callbacks) {
                return amplify.request({
                    resourceId: 'initFootballPlayerStatisticsForLeague',
                    data:
                    {
                        leagueId: leagueId,
                        column: column

                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            initFootballEventReportVC = function (gameId, callbacks) {
                return amplify.request({
                    resourceId: 'initFootballEventReportVC',
                    data:
                    {
                        gameId: gameId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            initFloorballEventReportVC = function (gameId, callbacks) {
                return amplify.request({
                    resourceId: 'initFloorballEventReportVC',
                    data:
                    {
                        gameId: gameId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },            

            getNextGameStatusFootball = function (eventReportId, callbacks) {
                return amplify.request({
                    resourceId: 'getNextGameStatusFootball',
                    data:
                    {
                        eventReportId: eventReportId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },       

            getNextGameStatusFloorball = function (eventReportId, callbacks) {
                return amplify.request({
                    resourceId: 'getNextGameStatusFloorball',
                    data:
                    {
                        eventReportId: eventReportId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },   

            getNextGameStatusFutsal = function (eventReportId, callbacks) {
                return amplify.request({
                    resourceId: 'getNextGameStatusFutsal',
                    data:
                    {
                        eventReportId: eventReportId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },   

            initFutsalEventReportVC = function (gameId, callbacks) {
                return amplify.request({
                    resourceId: 'initFutsalEventReportVC',
                    data:
                    {
                        gameId: gameId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            initPlayerStatisticsForLeague = function (leagueId, column, callbacks) {
                return amplify.request({
                    resourceId: 'initPlayerStatisticsForLeague',
                    data:
                    {
                        leagueId: leagueId,
                        column: column

                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            getClubTeams = function (clubId, callbacks) {
                return amplify.request({
                    resourceId: 'getClubTeams',
                    data:
                    {
                        clubId: clubId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            getTeamsForClub = function (clubId, seasonId, callbacks) {
                return amplify.request({
                    resourceId: 'getTeamsForClub',
                    data:
                    {
                        clubId: clubId,
                        seasonId: seasonId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },            

            getTeamsForClubAndGame = function (clubId, teamId, callbacks) {
                return amplify.request({
                    resourceId: 'getTeamsForClubAndGame',
                    data:
                    {
                        clubId: clubId,
                        teamId: teamId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },                                 

            initClub = function (clubId, callbacks) {
                return amplify.request({
                    resourceId: 'initClub',
                    data: {
                        clubId: clubId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            initClubTeams = function (clubId, callbacks) {
                return amplify.request({
                    resourceId: 'initClubTeams',
                    data: {
                        clubId: clubId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            initClubPicsAndVideos = function (clubId, callbacks) {
                return amplify.request({
                    resourceId: 'initClubPicsAndVideos',
                    data: {
                        clubId: clubId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            initClubBillboard = function (clubId, callbacks) {
                return amplify.request({
                    resourceId: 'initClubBillboard',
                    data:
                    {
                        clubId: clubId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            initClubPartners = function (clubId, callbacks) {
                return amplify.request({
                    resourceId: 'initClubPartners',
                    data:
                    {
                        clubId: clubId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            initTeamPartners = function (teamId, callbacks) {
                return amplify.request({
                    resourceId: 'initTeamPartners',
                    data:
                    {
                        teamId: teamId
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },            

            searchMemberByEmailAndPhone = function (email, phonenumber, callbacks) {
                return amplify.request({
                    resourceId: 'searchMemberByEmailAndPhone',
                    data: {
                        email: email,
                        phonenumber: phonenumber
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            searchMemberByName = function (firstname, lastname, callbacks) {
                return amplify.request({
                    resourceId: 'searchMemberByName',
                    data: {
                        firstname: firstname,
                        lastname: lastname
                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },

            searchPlayerTeamStaffRefereeByNameEmailPhone = function (firstname, lastname, email, phone, teamid, callbacks) {
                return amplify.request({
                    resourceId: 'searchPlayerTeamStaffRefereeByNameEmailPhone',
                    data: {
                        firstname: firstname,
                        lastname: lastname,
                        email: email,
                        phone: phone,
                        teamid: teamid

                    },
                    success: callbacks.success,
                    error: callbacks.error
                });
            };

        return {
            createMemberFromMemberRequest: createMemberFromMemberRequest,
            connectMemberToPlayer: connectMemberToPlayer,
            connectMemberToTeamStaff: connectMemberToTeamStaff,
            copyPartnerFeature: copyPartnerFeature,
            connectSportswikTeamToTeamsExtPlayer: connectSportswikTeamToTeamsExtPlayer,
            connectSportswikTeamToTeams: connectSportswikTeamToTeams,
            searchForMember: searchForMember,
            mergeAndDeleteTeamMembers: mergeAndDeleteTeamMembers,
            mergeMembers: mergeMembers,
            insertSocialEntityView: insertSocialEntityView,
            updateHideTimelineComments: updateHideTimelineComments,
            generatePayoutsData: generatePayoutsData,            
            sendClubPayments: sendClubPayments,
            calculatePlayerStatistics: calculatePlayerStatistics,
            calculateGoalkeeperStatistics: calculateGoalkeeperStatistics,
            updateLeagueTable: updateLeagueTable,
            disconnectHighlightFromEvent: disconnectHighlightFromEvent,
            resetTeam: resetTeam,
            addRefereeToGame: addRefereeToGame,
            acceptGameRequest: acceptGameRequest,
            insertGamePlayersForGame: insertGamePlayersForGame,
            initGamePlayerForDetailsView: initGamePlayerForDetailsView,
            initGameTeamStaffForDetailsView: initGameTeamStaffForDetailsView,
            updateGamePlayers: updateGamePlayers,
            updateGameLineUp: updateGameLineUp,
            insertGameTeamStaffForGame: insertGameTeamStaffForGame,
            insertGameGoalieStatistics: insertGameGoalieStatistics,
            insertGoalStatistics: insertGoalStatistics,
            updateGameTeamStaff: updateGameTeamStaff,
            publishGameTeamRoster: publishGameTeamRoster,
            updatePublishTime: updatePublishTime,
            publishGameLineUp: publishGameLineUp,
            createLoginForExternalSystem: createLoginForExternalSystem,
            validateExternalLogin: validateExternalLogin,            
            insertGameHighlight: insertGameHighlight,
            insertAudienceForInfoItem: insertAudienceForInfoItem,
            insertAudienceForPartner: insertAudienceForPartner,
            insertTargetFilterForPartner: insertTargetFilterForPartner, 
            deleteGameDiscussionPost: deleteGameDiscussionPost,
            deleteGameReferee: deleteGameReferee,
            deleteGameReport: deleteGameReport,
            deleteGame: deleteGame,
            deleteMemberTeamRole: deleteMemberTeamRole,
            deleteFollower: deleteFollower,
            deleteTeamAdmin: deleteTeamAdmin,
            deleteLiveReporter: deleteLiveReporter, 
            deleteTeamPlayer: deleteTeamPlayer,
            deleteTeamBanner: deleteTeamBanner,
            deleteMemberGuardian: deleteMemberGuardian,
            deletePlayerGuardian: deletePlayerGuardian,
            deleteMember: deleteMember,
            deleteClub: deleteClub,
            deleteClubAdministrator: deleteClubAdministrator,
            deleteClubPartner: deleteClubPartner,
            deleteLeagueOrganizerPartner: deleteLeagueOrganizerPartner,
            deleteClubBillboard: deleteClubBillboard,
            deleteInfoItem: deleteInfoItem,  
            deleteHighlightFromEREvent: deleteHighlightFromEREvent,
            deletePartnerFeatureSet: deletePartnerFeatureSet,
            deletePartnerPackage: deletePartnerPackage,
            deleteLeagueTeam: deleteLeagueTeam,
            deleteLeagueOrganizerAdministrator: deleteLeagueOrganizerAdministrator,
            deleteTeam: deleteTeam, // Denna och ovanför är gröna
            deleteTeamStaff: deleteTeamStaff,
            deleteMemberProfilePicture: deleteMemberProfilePicture,
            deleteReferencePicture: deleteReferencePicture,
            deleteSocialEntityComment: deleteSocialEntityComment,
            deleteDiscussionPost: deleteDiscussionPost,
            deleteGameLiveStreamHighlight: deleteGameLiveStreamHighlight,
            deleteGamePlayer: deleteGamePlayer,
            deleteGameTeamStaff: deleteGameTeamStaff, 
            deleteGameTeamRoster: deleteGameTeamRoster,
            deleteLineUp: deleteLineUp,
            deleteIndividualInterviewRequest: deleteIndividualInterviewRequest,
            deleteFootballEventReport: deleteFootballEventReport,
            deleteFloorballEventReport: deleteFloorballEventReport,
            deleteFutsalEventReport: deleteFutsalEventReport,
            deleteFootballEREvent: deleteFootballEREvent,
            deleteFloorballEREvent: deleteFloorballEREvent,
            deleteFutsalEREvent: deleteFutsalEREvent,
            getPayoutsPreview: getPayoutsPreview,
            getAllMembers: getAllMembers,
            getAllMemberRequests: getAllMemberRequests,
            getArenas: getArenas,
            getClubs: getClubs,
            getClubForEditView: getClubForEditView,
            getMagazineBlurb: getMagazineBlurb,
            getReportsForAdminSummary: getReportsForAdminSummary,
            getReportsForAdmin: getReportsForAdmin,
            getReportsForAdminByGame: getReportsForAdminByGame,
            getReportsForAdminByMember: getReportsForAdminByMember,
            getReportsForAdminByReportedMember: getReportsForAdminByReportedMember,
            getClubAdminInfo: getClubAdminInfo,
            getClubAdminTeamInfo: getClubAdminTeamInfo,
            getClubAdminLiveStreamStatistics: getClubAdminLiveStreamStatistics,
            getTeamAdminLiveStreamStatistics: getTeamAdminLiveStreamStatistics,
            getClubPaymentSummary: getClubPaymentSummary,
            getTeamPayoutSummary: getTeamPayoutSummary,
            getGameTeamStaff: getGameTeamStaff,
            getGamePlayer: getGamePlayer,      
            getGameGoalies: getGameGoalies,
            getGameTeamRosterHeader: getGameTeamRosterHeader,
            initTeamReplayPartners: initTeamReplayPartners,
            initGameTeamRoster: initGameTeamRoster,
            initCreateLiveStream: initCreateLiveStream,
            initGameReferees: initGameReferees,
            initGameTeams: initGameTeams,
            initGameGoalieStatistics: initGameGoalieStatistics,
            initGamePlayersView: initGamePlayersView,
            initGamePlayersViewFromClub: initGamePlayersViewFromClub,
            initGamePlayersViewForCopy: initGamePlayersViewForCopy, 
            initGameTeamStaffView: initGameTeamStaffView,
            initGameTeamStaffViewFromClub: initGameTeamStaffViewFromClub,
            initGameTeamStaffViewForCopy: initGameTeamStaffViewForCopy, 
            initGameLineUpView: initGameLineUpView,
            initLeagueAdmin: initLeagueAdmin,
            updateGameFinalResult: updateGameFinalResult,
            getGamesWithTeamRoster: getGamesWithTeamRoster,
            getTeamPartnerForEditView: getTeamPartnerForEditView,
            getTeamPartnerPaymentDossier: getTeamPartnerPaymentDossier,
            getStreamPackagesForLeagueOrganizer: getStreamPackagesForLeagueOrganizer,
            getLiveStreamStatisticsPerGame: getLiveStreamStatisticsPerGame,
            getLiveStreamStatisticsPerTeam: getLiveStreamStatisticsPerTeam,
            getLiveStreamLogItems: getLiveStreamLogItems,
            getClubAdministrators: getClubAdministrators,
            getLeagueOrganizerAdministrators: getLeagueOrganizerAdministrators,
            getClubHeaderInfo: getClubHeaderInfo,
            getClubPictures: getClubPictures,
            getClubVideos: getClubVideos,
            getClubTeamsForExternalConnect: getClubTeamsForExternalConnect,
            getLeagueOrganizerPartner: getLeagueOrganizerPartner,
            getClubPartner: getClubPartner,
            getClubPartners: getClubPartners,
            getCompetitionHeader: getCompetitionHeader,
            getPartnerForAdminDetails: getPartnerForAdminDetails,
            getActivePartnerFeatures: getActivePartnerFeatures,
            getActivePlacements: getActivePlacements,
            getPartnerFeatureData: getPartnerFeatureData,
            getPaymentStatus: getPaymentStatus,
            getPaymentTeam: getPaymentTeam,                        
            getCountriesForDialing: getCountriesForDialing,
            getAllLiveStreamProviders: getAllLiveStreamProviders,
            initAudienceForPartnerEditView: initAudienceForPartnerEditView,
            initAudienceForEditView: initAudienceForEditView,
            initTargetFilterForPartnerEditView: initTargetFilterForPartnerEditView,
            initLeagueOrganizerManageInfoItems: initLeagueOrganizerManageInfoItems,
            initClubManageInfoItems: initClubManageInfoItems,
            initTeamManageInfoItems: initTeamManageInfoItems,
            initGameReportForEditView: initGameReportForEditView,
            initTeamAdminLiveStream: initTeamAdminLiveStream,
            initGameLiveStreamHighlights: initGameLiveStreamHighlights,
            initClubLiveStreamStatistics: initClubLiveStreamStatistics,            
            getGameReport: getGameReport,
            getLiveStreamHighlightsForGame: getLiveStreamHighlightsForGame,
            getLiveStreamAudiences: getLiveStreamAudiences,
            getLiveStreamTargetFilters: getLiveStreamTargetFilters,
            getLiveStreamSubscriptionForEditView: getLiveStreamSubscriptionForEditView,
            getFollowers: getFollowers,
            getGenders: getGenders,
            getSeasons: getSeasons,
            getInterviewRequests: getInterviewRequests,            
            getUnsentInterviewRequests: getUnsentInterviewRequests,
            getSentInterviewRequests: getSentInterviewRequests,
            sendInterviewRequests: sendInterviewRequests,
            getRecommendedTeams: getRecommendedTeams,
            getTeamMemberForInvite: getTeamMemberForInvite,            
            getCreatedLeaguesForTeam: getCreatedLeaguesForTeam,
            getSports: getSports,
            getIncompleteTeamActionsForTeamPage: getIncompleteTeamActionsForTeamPage,
            getInterviewTemplate: getInterviewTemplate,
            getInterviewTemplates: getInterviewTemplates,
            getSocialEntityLikesVC: getSocialEntityLikesVC,
            getSocialEntityViews: getSocialEntityViews,
            getSocialEntityComments: getSocialEntityComments,
            initTeamAdmin: initTeamAdmin,
            initTeamAdminConnect: initTeamAdminConnect,
            initTeamSponsors: initTeamSponsors,
            initGameOverview: initGameOverview,
            getGameOverview: getGameOverview,
            getGameMediaItems: getGameMediaItems,
            getGameLineUp: getGameLineUp,
            initGameLineUps: initGameLineUps,
            initGameLeagueOverview: initGameLeagueOverview,
            connectTeam: connectTeam,
            disconnectTeam: disconnectTeam,
            validatePersonalIdentityNumber: validatePersonalIdentityNumber,
            sendInvitetoTeamStaff: sendInvitetoTeamStaff,
            sendInvitetoTeamPlayer: sendInvitetoTeamPlayer,
            sendInvitetoMemberGuardian: sendInvitetoMemberGuardian,
            getTeamMembers: getTeamMembers,
            getPossibleLiveReportersForTeam: getPossibleLiveReportersForTeam,
            getPossibleTeamAdmins: getPossibleTeamAdmins,
            addNewTeamStaff: addNewTeamStaff,
            addNewPlayer: addNewPlayer,
            finishTeamMemberImport: finishTeamMemberImport,
            importTeamMemberFile: importTeamMemberFile,
            importMyClubFile: importMyClubFile,
            initTeamConnectRoleRelationVC: initTeamConnectRoleRelationVC,
            initTeamConnectRoleVC: initTeamConnectRoleVC,
            initGameRequest: initGameRequest,
            initTeamAdminMenu: initTeamAdminMenu,
            initTeamVC: initTeamVC,
            initTeamLiveReporters: initTeamLiveReporters,
            initTeamAdminDetails: initTeamAdminDetails,
            getGameDiscussionPost: getGameDiscussionPost,
            initLiveTimelineBlurbs: initLiveTimelineBlurbs,
            synchronizeTimeline: synchronizeTimeline,
            initLiveStreamControlPanel: initLiveStreamControlPanel,
            initPublicLiveTimelineBlurbs: initPublicLiveTimelineBlurbs,
            initMain: initMain,
            initMainHeader: initMainHeader,
            initAdminHeader: initAdminHeader,
            initDiscoverFeed: initDiscoverFeed,
            getLeagueHeader: getLeagueHeader,
            initLeagueTable: initLeagueTable,
            initStatisticsTable: initStatisticsTable,
            generateLeagueHighlights: generateLeagueHighlights,
            canCreateGameTeamRoster: canCreateGameTeamRoster,
            canCreateGameLineUp: canCreateGameLineUp,
            insertGameTeamRoster: insertGameTeamRoster,
            insertGameLineUp: insertGameLineUp,
            initCompetitionCalendar: initCompetitionCalendar,
            getLeagueOrganizersForSelectList: getLeagueOrganizersForSelectList,
            getLeagueOrganizers: getLeagueOrganizers,
            initTeamSite: initTeamSite,                        
            initTeamPicsAndVideos: initTeamPicsAndVideos,
            initLeagueSite: initLeagueSite,
            initLeagueSiteFairPlayCards: initLeagueSiteFairPlayCards,
            initLeagueSitePicsAndVideos: initLeagueSitePicsAndVideos,
            initCompetitionsPage: initCompetitionsPage,
            initPopular: initPopular,
            initDistricts: initDistricts,
            initBrowseLeagues: initBrowseLeagues,
            initUpcomingEvents: initUpcomingEvents,
            initCurrentEvents: initCurrentEvents,
            initPastEvents: initPastEvents,
            initCompetitions: initCompetitions,
            initCompetitionEvents: initCompetitionEvents,
            initCompetition: initCompetition,
            initCompetitionFixtures: initCompetitionFixtures,
            initCompetitionTable: initCompetitionTable,
            getCompetitionGames: getCompetitionGames,
            getCompetitionTeams: getCompetitionTeams,
            getPicturesForTeam: getPicturesForTeam,
            getVideosForTeam: getVideosForTeam,
            getLeaguePictures: getLeaguePictures,
            getLeagueVideos: getLeagueVideos,
            initHighlightsForLeagueSite: initHighlightsForLeagueSite,
            getHighlightsForLeagueSite: getHighlightsForLeagueSite,
            getHighlightForLeagueSite: getHighlightForLeagueSite,
            getHighlightsForMember: getHighlightsForMember,
            getLeagueOrganizerHeader: getLeagueOrganizerHeader,
            getLeagueOrganizerFairPlayCardSettings: getLeagueOrganizerFairPlayCardSettings,
            initLeagueOrganizerSite: initLeagueOrganizerSite,
            initLeagueOrganizerSitePicsAndVideos: initLeagueOrganizerSitePicsAndVideos,
            initLeagueOrganizerSiteGameResultGuessStandings: initLeagueOrganizerSiteGameResultGuessStandings,
            initLeagueOrganizerTournamentGroups: initLeagueOrganizerTournamentGroups,
            initLeagueOrganizerSiteFairPlayCards: initLeagueOrganizerSiteFairPlayCards,
            initLeagueOrganizerFinalStandings: initLeagueOrganizerFinalStandings,
            initLeagueOrganizerPlayerStatistics: initLeagueOrganizerPlayerStatistics,
            initLeagueOrganizerPartners: initLeagueOrganizerPartners,           
            initPartnerAdmin: initPartnerAdmin,
            initPartnerFeatureSet: initPartnerFeatureSet,
            initPartnerPackage: initPartnerPackage,
            initLeagueOrganizerLeaguesVC: initLeagueOrganizerLeaguesVC,
            initLeagueOrganizerLeaguesWithCategories: initLeagueOrganizerLeaguesWithCategories,
            initAddMemberGuardians: initAddMemberGuardians,
            initInfoItemForEditView: initInfoItemForEditView,
            initGameForEditView: initGameForEditView,
            initLeagueOrganizerInfoItems: initLeagueOrganizerInfoItems,
            initLeagueOrganizerPlayPage: initLeagueOrganizerPlayPage,
            initLeaguePlayPage: initLeaguePlayPage,
            initClubPlayPage: initClubPlayPage,
            initTeamPlayPage: initTeamPlayPage,
            initClubInfoItems: initClubInfoItems,
            initTeamInfoItems: initTeamInfoItems,
            initTipInfoItems: initTipInfoItems,
            searchFairPlayCards: searchFairPlayCards,
            searchLeagueFairPlayCards: searchLeagueFairPlayCards,            
            searchRefereesBySearchString: searchRefereesBySearchString,
            getFairPlayCardsForLeagueSite: getFairPlayCardsForLeagueSite,
            getFairPlayCardsForLeagueOrganizerSite: getFairPlayCardsForLeagueOrganizerSite,            
            getLeagueOrganizerTeams: getLeagueOrganizerTeams,
            getLeagueOrganizerTeamsAdmin: getLeagueOrganizerTeamsAdmin,
            getPicturesForLeagueOrganizer: getPicturesForLeagueOrganizer,
            getVideosForLeagueOrganizer: getVideosForLeagueOrganizer,
            getHighlightsForLeagueOrganizer: getHighlightsForLeagueOrganizer,
            getReplaysForLeagueOrganizer: getReplaysForLeagueOrganizer,
            getPlannedGamesForLeagueOrganizer: getPlannedGamesForLeagueOrganizer,
            getLiveGamesForLeagueOrganizer: getLiveGamesForLeagueOrganizer,
            getHighlightsForLeague: getHighlightsForLeague,
            getReplaysForLeague: getReplaysForLeague,
            getPlannedGamesForLeague: getPlannedGamesForLeague,
            getLiveGamesForLeague: getLiveGamesForLeague,
            getHighlightsForClub: getHighlightsForClub,
            getReplaysForClub: getReplaysForClub,
            getPlannedGamesForClub: getPlannedGamesForClub,
            getLiveGamesForClub: getLiveGamesForClub,
            getHighlightsForTeam: getHighlightsForTeam,
            getReplaysForTeam: getReplaysForTeam,
            getPlannedGamesForTeam: getPlannedGamesForTeam,
            getLiveGamesForTeam: getLiveGamesForTeam,
            getLeagueOrganizerLeagues: getLeagueOrganizerLeagues,
            getLeagueOrganizerLeagueCategories: getLeagueOrganizerLeagueCategories,
            getLeagueCategoriesBySeasonId: getLeagueCategoriesBySeasonId,
            getPlayerStatisticsForLeagueOrganizer: getPlayerStatisticsForLeagueOrganizer,
            getGoalieStatisticsForLeagueOrganizer: getGoalieStatisticsForLeagueOrganizer,
            getLeagueOrganizerLeaguesForAdminList: getLeagueOrganizerLeaguesForAdminList,
            getLeagueOrganizerClubsForAdminList: getLeagueOrganizerClubsForAdminList,
            getLeagueOrganizerDistrictsForAdminList: getLeagueOrganizerDistrictsForAdminList,
            getLeagueOrganizerClubs: getLeagueOrganizerClubs,
            followTeam: followTeam,
            unfollowTeam: unfollowTeam,            
            followLeague: followLeague,
            unfollowLeague: unfollowLeague,
            publishLiveStream: publishLiveStream,
            initWidgetMagazineWebVc: initWidgetMagazineWebVc,
            getLiveTimelineBlurbUpdates: getLiveTimelineBlurbUpdates,
            sendLeagueTeamInvites: sendLeagueTeamInvites,
            sendLeagueTeamInfoEmails: sendLeagueTeamInfoEmails,
            sendLeagueTeamInviteEmails: sendLeagueTeamInviteEmails,
            sendLeagueTeamInviteEmailsFutsal: sendLeagueTeamInviteEmailsFutsal,
            sendLeagueTeamInviteSMS: sendLeagueTeamInviteSMS,
            sendClubAdminEmails: sendClubAdminEmails,
            sendRefereeInviteEmails: sendRefereeInviteEmails,
            sendTeamPartnerPaymentDossier: sendTeamPartnerPaymentDossier,
            sendIndividualInterviewRequest: sendIndividualInterviewRequest,
            synchronizeGameTeamRoster: synchronizeGameTeamRoster,
            getGameTeamRosterWarnings: getGameTeamRosterWarnings,
            dismissTeamAction: dismissTeamAction,
            setTeamActionStatusCompleted: setTeamActionStatusCompleted,
            insertGameCheckIn: insertGameCheckIn,
            insertDiscussionPost: insertDiscussionPost,
            insertMemberGuardian: insertMemberGuardian,
            insertLeagueOrganizerAdmin: insertLeagueOrganizerAdmin,
            insertInfoItem: insertInfoItem,
            saveTeamPartner: saveTeamPartner,
            saveTeamPartnerSwiss: saveTeamPartnerSwiss,
            insertPartnerFeature: insertPartnerFeature,
            gainControlOfFootballEventReport: gainControlOfFootballEventReport,
            gainControlOfFloorballEventReport: gainControlOfFloorballEventReport,
            gainControlOfFutsalEventReport: gainControlOfFutsalEventReport,
            insertFootballEREvent: insertFootballEREvent,
            insertFootballEventReport: insertFootballEventReport,
            updateFootballEventReport: updateFootballEventReport,
            insertFloorballEREvent: insertFloorballEREvent,
            insertFloorballEventReport: insertFloorballEventReport,
            updateFloorballEventReport: updateFloorballEventReport,
            insertFutsalEREvent: insertFutsalEREvent,
            insertFutsalEventReport: insertFutsalEventReport,
            updateFutsalEventReport: updateFutsalEventReport,
            updateFootballEREvent: updateFootballEREvent,
            updateFloorballEREvent: updateFloorballEREvent,
            updateFutsalEREvent: updateFutsalEREvent,
            startNewUserSession: startNewUserSession,
            insertUserSessionEvents: insertUserSessionEvents,
            updateLiveStreamSubscription: updateLiveStreamSubscription,
            updatePartner: updatePartner,
            updatePartnerFeatureSet: updatePartnerFeatureSet,
            updatePartnerPackage: updatePartnerPackage,
            updatePartnerFeaturePlacements: updatePartnerFeaturePlacements,
            initInfoItemForImportView: initInfoItemForImportView,
            insertGameDiscussionPost: insertGameDiscussionPost,
            saveGame: saveGame,
            insertGameReport: insertGameReport,
            insertSocialEntityEmotion: insertSocialEntityEmotion,
            insertPicture: insertPicture,
            insertVideo: insertVideo,
            insertTeam: insertTeam,
            insertMemberInvite: insertMemberInvite,
            insertMemberTeamRole: insertMemberTeamRole,
            insertMemberTeamRoleWithRelations: insertMemberTeamRoleWithRelations,            
            insertSocialEntityComment: insertSocialEntityComment,
            insertSocialEntityLike: insertSocialEntityLike,            
            insertSystemAdministrator: insertSystemAdministrator,
            postAzureVideo: postAzureVideo,
            verifyPost: verifyPost,                        
            initMemberEditProfile: initMemberEditProfile,
            initMemberInviteVc: initMemberInviteVc,
            initMemberInviteAddEditVc: initMemberInviteAddEditVc,
            initTeamAdminTeamFeed: initTeamAdminTeamFeed,            
            initTeamAdminTeamsVC: initTeamAdminTeamsVC,
            inviteAllTeamMembers: inviteAllTeamMembers,
            reportContentWithReason: reportContentWithReason,
            
            sendSMSInvite: sendSMSInvite,
            initGameAttendees: initGameAttendees,
            getGameAttendees: getGameAttendees,
            getAttendeesForMagazineGameViewDetails: getAttendeesForMagazineGameViewDetails,
            getPicsAndVideosForMagazineGameViewDetails: getPicsAndVideosForMagazineGameViewDetails,
            getDiscussionPost: getDiscussionPost,
            getDiscussionPostForDetailsView: getDiscussionPostForDetailsView,
            getUnverifiedGamePosts: getUnverifiedGamePosts,            
            getPictureForDetailsView: getPictureForDetailsView,
            getVideoForDetailsView: getVideoForDetailsView,                        
            getTeamHeaderInfoTest: getTeamHeaderInfoTest,
            getTeamHeaderInfo: getTeamHeaderInfo,
            getTeamHeaderInfoForTeamSite: getTeamHeaderInfoForTeamSite,
            getTeamHeaderInfoWithMemberInfo: getTeamHeaderInfoWithMemberInfo,
            getTeamAdminHeaderInfo: getTeamAdminHeaderInfo,
            getTimelineItem: getTimelineItem,
            getTimelineBlurb: getTimelineBlurb,            
            //manageAccount: manageAccount,
            changeOptInSettingForMemberAgreement: changeOptInSettingForMemberAgreement,
            updateDiscussionPost: updateDiscussionPost,
            updateGameDiscussionPost: updateGameDiscussionPost,
            updateInfoItem: updateInfoItem,
            updateAzureMedia: updateAzureMedia,
            updateGameReport: updateGameReport,
            updateAdminMember: updateAdminMember,
            updateTeamPartnerStatus: updateTeamPartnerStatus,
            updatePartnerFeature: updatePartnerFeature,
            updateMember: updateMember,
            updateMemberPicture: updateMemberPicture,
            updateMemberSettings: updateMemberSettings,
            updateReferencePicture: updateReferencePicture,
            updatePictureInfo: updatePictureInfo,
            updateGameVideoInfo: updateGameVideoInfo,
            updateVideoInfo: updateVideoInfo,
            updatePartnerVideoInfo: updatePartnerVideoInfo,
            initAudienceForFilterTypeClub: initAudienceForFilterTypeClub,
            initAudienceForFilterTypeTeam: initAudienceForFilterTypeTeam,
            updateTeam: updateTeam,
            updateTeamVM: updateTeamVM,
            updateTeams: updateTeams,  
            updateSpectators: updateSpectators,
            updateTeamPlayer: updateTeamPlayer,
            updateTeamStaff: updateTeamStaff,
            updateMemberGuardian: updateMemberGuardian,
            deletePicture: deletePicture,
            deleteVideo: deleteVideo,
            deleteSystemAdministrator: deleteSystemAdministrator,
            deleteLiveStream: deleteLiveStream,
            deleteGameVideo: deleteGameVideo,
            deleteTeamPartner: deleteTeamPartner,            
            GetBlurbsForMyFeed: GetBlurbsForMyFeed,
            GetBlurbsForTeamFeed: GetBlurbsForTeamFeed,                        
            getClubLivestreamBlurbs: getClubLivestreamBlurbs,
            getLeagueLivestreamBlurbs: getLeagueLivestreamBlurbs,
            getCompetitionLivestreamBlurbs: getCompetitionLivestreamBlurbs,
            getLeagueOrganizerLivestreamBlurbs: getLeagueOrganizerLivestreamBlurbs,
            GetClubMagazineBlurbs: GetClubMagazineBlurbs,
            GetLeagueOrganizerMagazineBlurbs: GetLeagueOrganizerMagazineBlurbs,
            GetLeagueMagazineBlurbs: GetLeagueMagazineBlurbs,
            getCompetitionMagazineBlurbs: getCompetitionMagazineBlurbs,                        
            GetWidgetMagazineBlurbs: GetWidgetMagazineBlurbs,            
            GetBlurbsForDiscoverFeed: GetBlurbsForDiscoverFeed,                        
            processGameHighlights: processGameHighlights,
            getConnectInformation: getConnectInformation,
            getTeamConnectViewModel: getTeamConnectViewModel,
            getGameHeaderInfo: getGameHeaderInfo,            
            getGameAdminInformation: getGameAdminInformation,
            scheduleLiveStream: scheduleLiveStream,
            createGameLiveStreamSettings: createGameLiveStreamSettings,
            updateStartRecordingTime: updateStartRecordingTime,
            clearGameCache: clearGameCache,
            clearLeagueCache: clearLeagueCache,
            getTeamsIFollow: getTeamsIFollow,
            getLeaguesIFollow: getLeaguesIFollow,
            getEREventsForHighlight: getEREventsForHighlight,
            getEREventsForGame: getEREventsForGame,
            getPartnerForEditView: getPartnerForEditView,
            getPartnerFeatureSetForEditView: getPartnerFeatureSetForEditView,
            getPartnerPackageForEditView: getPartnerPackageForEditView,             
            getPartnerFeatureTypes: getPartnerFeatureTypes,            
            getPartnerPackagesForPartner: getPartnerPackagesForPartner,
            getPartnerSetForPartnerPackage: getPartnerSetForPartnerPackage,
            getPartnerFeature: getPartnerFeature,
            getPartnerFeatureForEditView: getPartnerFeatureForEditView,
            getPartnerFeatureForDetailView: getPartnerFeatureForDetailView,
            getPartnerFeatureForCreateView: getPartnerFeatureForCreateView,
            getMyRoles: getMyRoles,
            initMyTeams: initMyTeams,
            initMyGames: initMyGames,
            getLeagueStanding: getLeagueStanding,
            uploadMedia: uploadMedia,
            uploadVideo: uploadVideo,
            initMemberProfile: initMemberProfile,
            initTeamPlayerProfile: initTeamPlayerProfile,
            initTeamAdminVariables: initTeamAdminVariables,
            initClubAdminSearch: initClubAdminSearch,
            initEditMemberVariables: initEditMemberVariables,
            initAudienceForFilterType: initAudienceForFilterType,
            initTargetFilterForFilterType: initTargetFilterForFilterType,
            initTargetFilterNameValues: initTargetFilterNameValues,
            getTargetFilterGameName: getTargetFilterGameName,
            getTargetFilterClubName: getTargetFilterClubName,
            getTargetFilterLeagueName: getTargetFilterLeagueName,
            getTargetFilterLeagueCategoryName: getTargetFilterLeagueCategoryName,            
            getInfoItemForEditView: getInfoItemForEditView,
            getInfoItemPagesForImport: getInfoItemPagesForImport,
            getInfoItemPostForImport: getInfoItemPostForImport,
            getInfoItemForDetailsView: getInfoItemForDetailsView,
            getMemberAccountInfo: getMemberAccountInfo,
            getMemberPurchases: getMemberPurchases,
            getSignedAgreements: getSignedAgreements,
            generateChangeEmailRequest: generateChangeEmailRequest,
            generateChangePhoneNumberRequest: generateChangePhoneNumberRequest,
            verifyEmailChange: verifyEmailChange,
            verifyPhoneNumberChange: verifyPhoneNumberChange,
            getMemberForAdminEdit: getMemberForAdminEdit,
            getMemberForMemberDetails: getMemberForMemberDetails,
            checkIfTeamPlayerRequireGuardians: checkIfTeamPlayerRequireGuardians,            
            getMemberCalendarGames: getMemberCalendarGames,
            initMemberCalendar: initMemberCalendar,
            getMemberHeader: getMemberHeader,
            getUploadedItemsForMember: getUploadedItemsForMember,
            getReportedItemsForMember: getReportedItemsForMember,
            getReportedItemsForGame: getReportedItemsForGame,
            getReportedItemsByReportedMember: getReportedItemsByReportedMember,
            getMemberRoles: getMemberRoles,
            getMemberCalendarLiveGamesCounter: getMemberCalendarLiveGamesCounter,
            getSystemAdministrators: getSystemAdministrators,
            getMediaLiveStreamItem: getMediaLiveStreamItem,
            getMediaHighlightItem: getMediaHighlightItem,
            downloadVideo: downloadVideo,
            getGameVideoReplayDownloadLink: getGameVideoReplayDownloadLink,
            getLiveStreamDownloadLink: getLiveStreamDownloadLink,
            getLiveStreamVoucher: getLiveStreamVoucher,
            getMemberActions: getMemberActions,
            initAdminPayouts: initAdminPayouts,
            getPaymentForEditView: getPaymentForEditView,
            getClubPayoutRows: getClubPayoutRows,
            getTeamPayoutRows: getTeamPayoutRows,
            getMemberPayment: getMemberPayment,
            getMemberPayments: getMemberPayments,
            getMemberActionsFloorball: getMemberActionsFloorball,
            getMemberNotifications: getMemberNotifications,
            initTeamGamesAdminVC: initTeamGamesAdminVC,
            getComingTeamGames: getComingTeamGames,
            getComingStreamedGames: getComingStreamedGames,
            getComingTeamAdminLeagueTeams: getComingTeamAdminLeagueTeams,
            getPreviousTeamAdminLeagueTeams: getPreviousTeamAdminLeagueTeams,
            getPreviousTeamGames: getPreviousTeamGames,
            getPreviousStreamedGames: getPreviousStreamedGames,
            getComingLeagueGames: getComingLeagueGames,
            getPreviousLeagueGames: getPreviousLeagueGames,
            getComingLeagueOrganizerGames: getComingLeagueOrganizerGames,
            getPreviousLeagueOrganizerGames: getPreviousLeagueOrganizerGames,
            getComingClubGames: getComingClubGames,
            getPreviousClubGames: getPreviousClubGames,
            getPlayerGuardians: getPlayerGuardians,
            getPlayerPositions: getPlayerPositions,
            getTeamStaffRoles: getTeamStaffRoles,
            initPlayersAdminVC: initPlayersAdminVC,
            initTeamStaffAdminVC: initTeamStaffAdminVC,            
            initTeamFollowers: initTeamFollowers,
            initTeamLeaguesVC: initTeamLeaguesVC,            
            getAzureMediaUploadInfo: getAzureMediaUploadInfo,                                  
            postPicture: postPicture,
            postVideo: postVideo,
            postGameVideo: postGameVideo,
            postPartnerFeatureVideo: postPartnerFeatureVideo,             
            getMoreTimelineBlurbs: getMoreTimelineBlurbs,
            getMoreTeamInfoItems: getMoreTeamInfoItems,
            getMoreManagedTeamInfoItems: getMoreManagedTeamInfoItems,
            getMoreClubInfoItems: getMoreClubInfoItems,
            getMoreManagedClubInfoItems: getMoreManagedClubInfoItems,
            getMoreLeagueOrganizerInfoItems: getMoreLeagueOrganizerInfoItems,
            getMoreManagedLeagueOrganizerInfoItems: getMoreManagedLeagueOrganizerInfoItems,
            getTipInfoItems: getTipInfoItems,
            getManagedTipInfoItems: getManagedTipInfoItems,
            initPlayerPage: initPlayerPage,
            initPlayerProfile: initPlayerProfile,
            getPlayerLeagueStatistics: getPlayerLeagueStatistics,
            getPlayerHighlights: getPlayerHighlights,
            initTeamPlayerForEditView: initTeamPlayerForEditView,
            updateTeamPlayerOld: updateTeamPlayerOld,
            updateTeamPlayerPrivacySettings: updateTeamPlayerPrivacySettings,
            getPlayerHeader: getPlayerHeader,
            getPlayerForDetailsView: getPlayerForDetailsView,            
            getTeamPlayerForEditView: getTeamPlayerForEditView,
            getTeamStaffForEditView: getTeamStaffForEditView,
            getMemberGuardianForEditView: getMemberGuardianForEditView,                        
            initTeamStaffForEditView: initTeamStaffForEditView,
            getPlayerGuardianForDetailsView: getPlayerGuardianForDetailsView,
            getTeamStaffForDetailsView: getTeamStaffForDetailsView,
            getLeagueForDetailsView: getLeagueForDetailsView,
            getLeagueGames: getLeagueGames,
            getLeaguePlayOffGames: getLeaguePlayOffGames,
            getLeagueTeams: getLeagueTeams,            
            getGoalieStatisticsForLeague: getGoalieStatisticsForLeague,
            getFootballPlayerStatisticsForLeague: getFootballPlayerStatisticsForLeague,
            getPlayerStatisticsForLeague: getPlayerStatisticsForLeague,
            getPlayerStatisticsForLeaguePlayOff: getPlayerStatisticsForLeaguePlayOff,
            getPlayersForGameSelectLists: getPlayersForGameSelectLists,
            getFootballEventReport: getFootballEventReport,
            getFloorballEventReport: getFloorballEventReport,
            getFutsalEventReport: getFutsalEventReport,
            getFootballEREventForEdit: getFootballEREventForEdit,
            getFloorballEREventForEdit: getFloorballEREventForEdit,
            getFutsalEREventForEdit: getFutsalEREventForEdit,
            getFloorballPenaltyTypesForSelectList: getFloorballPenaltyTypesForSelectList,
            getFloorballChanceTypesForSelectList: getFloorballChanceTypesForSelectList,
            getFloorballGoalTypesForSelectList: getFloorballGoalTypesForSelectList,
            initPlayerStatisticsForLeague: initPlayerStatisticsForLeague,
            initGoalieStatisticsForLeague: initGoalieStatisticsForLeague,
            initFootballPlayerStatisticsForLeague: initFootballPlayerStatisticsForLeague,
            initFootballEventReportVC: initFootballEventReportVC,
            initFloorballEventReportVC: initFloorballEventReportVC,
            getNextGameStatusFootball: getNextGameStatusFootball,
            getNextGameStatusFloorball: getNextGameStatusFloorball,
            getNextGameStatusFutsal: getNextGameStatusFutsal,
            initFutsalEventReportVC: initFutsalEventReportVC,
            getClubTeams: getClubTeams,
            getTeamsForClub: getTeamsForClub,            
            getTeamsForClubAndGame: getTeamsForClubAndGame,                                        
            initClub: initClub,
            initClubTeams: initClubTeams,
            initClubPicsAndVideos: initClubPicsAndVideos,  
            initClubBillboard: initClubBillboard,
            initClubPartners: initClubPartners,            
            initTeamPartners: initTeamPartners,
            searchMemberByEmailAndPhone: searchMemberByEmailAndPhone,
            searchMemberByName: searchMemberByName,
            adminSearchMember: adminSearchMember,
            cancelStripeSubscription: cancelStripeSubscription,
            searchArenas: searchArenas,
            searchClubs: searchClubs,
            searchClubTeamStaff: searchClubTeamStaff,
            searchStaffByPhone: searchStaffByPhone,
            searchClubTeamAdmin: searchClubTeamAdmin,
            searchClubTeamAdminByPhoneNumber: searchClubTeamAdminByPhoneNumber,
            searchClubPlayers: searchClubPlayers,
            createSwishPayment: createSwishPayment,
            createStripePayment: createStripePayment,
            createLiveStreamVoucher: createLiveStreamVoucher,
            createLeagueOrganizerStreamPackage: createLeagueOrganizerStreamPackage,
            synchronizeGamePlayer: synchronizeGamePlayer,
            synchronizeGameTeamStaff: synchronizeGameTeamStaff,
            insertClubAdministrator: insertClubAdministrator,
            insertClubPlayer: insertClubPlayer,
            insertClubStaff: insertClubStaff,
            insertTeamLiveReporter: insertTeamLiveReporter,
            insertTeamAdmin: insertTeamAdmin,
            insertClubPartner: insertClubPartner,
            insertGameResultGuess: insertGameResultGuess,
            insertLeagueOrganizerPartner: insertLeagueOrganizerPartner, 
            createAudience: createAudience,
            createTargetFilter: createTargetFilter,
            updateClub: updateClub,
            updateClubPartner: updateClubPartner,
            updateLeagueOrganizerPartner: updateLeagueOrganizerPartner,
            updateClubBillboard: updateClubBillboard,
            updateTeamMemberProfilePicture: updateTeamMemberProfilePicture,
            updateTeamMemberProfilePictureCropped: updateTeamMemberProfilePictureCropped,
            updateTeamBanner: updateTeamBanner,
            updateEREventWithHighlight: updateEREventWithHighlight,
            updateLivestreamHighlightTime: updateLivestreamHighlightTime,
            insertInterviewPicture: insertInterviewPicture,
            trackPartnerFeatureView: trackPartnerFeatureView,
            trackPartnerFeatureViews: trackPartnerFeatureViews,
            trackPartnerFeatureViewsExternal: trackPartnerFeatureViewsExternal,
            trackPartnerFeatureClick: trackPartnerFeatureClick,
            insertUserSessionExternal: insertUserSessionExternal,
            updateUserSessionExternal: updateUserSessionExternal,
            addExistingMemberAsTeamStaff: addExistingMemberAsTeamStaff,
            addExistingMemberAsPlayer: addExistingMemberAsPlayer,
            searchPlayerTeamStaffRefereeByNameEmailPhone: searchPlayerTeamStaffRefereeByNameEmailPhone,
            getArenaForSelectList: getArenaForSelectList,
            getTeamsForTeamFeedPublishSelect: getTeamsForTeamFeedPublishSelect,
            getMemberNotificationsForSelectList: getMemberNotificationsForSelectList,
            setMemberNotificationStatus: setMemberNotificationStatus,
            setFollowerRequestStatus: setFollowerRequestStatus,
            setPlayerRequestStatus: setPlayerRequestStatus,
            setTeamStaffRequestStatus: setTeamStaffRequestStatus,
            getTeamFeedItem: getTeamFeedItem,
            getStreamStats: getStreamStats,
            getStreamSubscription: getStreamSubscription,
            getTeamSubscriptions: getTeamSubscriptions,
            getStreamSubscriptionForGame: getStreamSubscriptionForGame,
            getStreamSubscriptionForEvent: getStreamSubscriptionForEvent
        };
    });;
define('index',
    ['jquery', 'helpers/sw.uihelper'],
    function ($, uihelper) {
        var         
        formSubmitHandler = function (e) {
            var $form = $(this);

            // We check if jQuery.validator exists on the form
            if (!$form.valid || $form.valid()) {
                // Show spinner for with login information
                uihelper.displayLoadingIndicator(signInTexts.RegisteringMember);

                $.post($form.attr('action'), $form.serializeArray())
                    .done(function (json) {
                        json = json || {};

                        // In case of success, we redirect to the provided URL or the same page.
                        if (json.success) {
                            window.location = json.redirect || location.href;
                        } else if (json.errors) {
                            $("#loading").fadeOut();
                            uihelper.displayErrors($form, json.errors);
                        }
                    })
                    .error(function () {
                        uihelper.displayErrors($form, ['An unknown error happened.']);
                        $("#loading").fadeOut();
                    });
            }

            // Prevent the normal behavior since we opened the dialog
            e.preventDefault();
        },

        loginFormSubmitHandler = function (e) {
            var $form = $(this);

            // We check if jQuery.validator exists on the form
            if (!$form.valid || $form.valid()) {
                uihelper.displayLoadingIndicator(signInTexts.LoggingIn);

                $.post($form.attr('action'), $form.serializeArray())
                    .done(function (json) {
                        json = json || {};
                        // In case of success, we redirect to the provided URL or the same page.
                        if (json.success) {
                            window.location = json.redirect || location.href;
                            if (location.href.indexOf("#") > 0)
                            {
                                location.reload();
                            }
                        } else if (json.errors) {
                            $("#loading").fadeOut();
                            uihelper.displayErrors($form, json.errors);
                        }
                    })
                    .error(function () {
                        uihelper.displayErrors($form, ['An unknown error happened.']);
                        $("#loading").fadeOut();
                    });
            }

            // Prevent the normal behavior since we opened the dialog
            e.preventDefault();
        },

        getParameterByName = function(name) {
            var match = RegExp('[?&]' + name + '=([^&]*)').exec(window.location.search);
            return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
        },

        arrayContainsCampaign = function(array, campaginInfo)
        {
            for (var i = 0; i < array.length; i++)
            {
                if( array[i].utm_source   === campaginInfo.utm_source &&
                    array[i].utm_medium   === campaginInfo.utm_medium &&
                    array[i].utm_content  === campaginInfo.utm_content &&
                    array[i].utm_campaign === campaginInfo.utm_campaign )
                    return true;
            }

            return false;
        },

        addCampaignInfoToCookie = function() {
            //create campaginInfo object 
            var campaignInfo = 
            {
                timestamp: Date.now(),
                utm_source: getParameterByName('utm_source'),
                utm_medium: getParameterByName('utm_medium'),
                utm_content: getParameterByName('utm_content'),
                utm_campaign: getParameterByName('utm_campaign')
            };

            //get cookies
            var storedArray = JSON.parse($.cookie('campaigns'));

            if(storedArray === null)
                storedArray = [];

            //If this campagin is not already in cookie, save it
            if(campaignInfo.utm_source !== null)
            {
                if(!arrayContainsCampaign(storedArray, campaignInfo))
                    storedArray.push(campaignInfo);
            }

            //store it in cookie
            $.cookie('campaigns', JSON.stringify(storedArray), { expires: 31 , path: '/' });


            //console.log(storedArray);
        },

        init = function () {            
            $('#loginButton').click(function () {
                $('#resetPasswordPanel').slideUp(function () {

                    $('#loginPanel').slideDown(function () {
                        $('html, body').animate({
                            scrollTop: $("#loginPanel").offset().top
                        }, 200);
                    });

                });
            });

            $('.showLoginAgain').click(function () {
                $('#resetPasswordPanel').slideUp(function(){
                    $('#loginPanel').slideDown();
                });

            });

            $("#showResetPasswordPanel").click(function () {
                $("#loginPanel").slideUp(function () {
                    $("#resetPasswordPanel").slideDown(function () {
                        $("#UserName").focus();
                    });
                });
            });                        

            $("#loginForm").submit(loginFormSubmitHandler);
            $("#registerRequestForm").submit(formSubmitHandler);            

            $("input[type='number']").on("focus", function () {
                $(this).select();
            });

            addCampaignInfoToCookie();
        };

        init();

        return {
            formSubmitHandler: formSubmitHandler
        };
    });;
define('ko.bindingHandlers',
    ['jquery', 'ko', 'datamanager', 'config', 'router', 'helpers/sw.iconhelper', 'helpers/sw.imagehelper', 'helpers/sw.socialentityhelper', 'viewmodels/vm.socialentityviews', 'viewmodels/vm.socialentitycomments', 'viewmodels/vm.socialentitylikes', 'viewmodels/vm.shell'],
    function ($, ko, datamanager, config, router, swiconhelper, swimagehelper, socialentityhelper, socialentityviews, socialentitycomments, socialentitylikes, shell) {
        // Returns formatted date and time
        ko.bindingHandlers.swTextualDate = {
            update: function (element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
                var valueUnwrapped = ko.utils.unwrapObservable(valueAccessor());
                var textContent = '';
                if (valueUnwrapped !== "") {
                    var year = parseInt(moment(valueUnwrapped).format("YYYY"));

                    if (year > 9000) {
                        textContent = "-";
                    }
                    else if (moment(valueUnwrapped).format("YYYY-MM-DD") !== '1900-01-01') {
                        textContent = moment(valueUnwrapped).format("ddd DD MMM HH:mm");
                    }
                }
                ko.bindingHandlers.text.update(element, function () { return textContent; });
            }
        };

        // Returns formatted date
        ko.bindingHandlers.swTextualDateWithoutTime = {
            update: function (element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
                var valueUnwrapped = ko.utils.unwrapObservable(valueAccessor());
                var textContent = '';
                if (moment(valueUnwrapped).format("YYYY-MM-DD") !== '1900-01-01') {
                    textContent = moment(valueUnwrapped).format("ddd DD MMM");
                }
                ko.bindingHandlers.text.update(element, function () { return textContent; });
            }
        };

        ko.bindingHandlers.swTextualDateLongerWithoutTime = {
            update: function (element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
                var valueUnwrapped = ko.utils.unwrapObservable(valueAccessor());
                var textContent = '';
                if (moment(valueUnwrapped).format("YYYY-MM-DD") !== '1900-01-01') {
                    textContent = moment(valueUnwrapped).format("dddd DD MMMM");
                }
                ko.bindingHandlers.text.update(element, function () { return textContent; });
            }
        };

        ko.bindingHandlers.swTextualGameTime = {
            update: function (element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
                var valueUnwrapped = ko.utils.unwrapObservable(valueAccessor());
                var textContent = '';
                if (moment(valueUnwrapped).format("YYYY-MM-DD") !== '1900-01-01') {
                    textContent = moment(valueUnwrapped).format("DD MMM HH:mm");
                }
                ko.bindingHandlers.text.update(element, function () { return textContent; });
            }
        };

        ko.bindingHandlers.swTextualDateWithYearWithoutTime = {
            update: function (element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
                var valueUnwrapped = ko.utils.unwrapObservable(valueAccessor());
                var textContent = '';
                if (moment(valueUnwrapped).format("YYYY-MM-DD") !== '1900-01-01') {
                    textContent = moment(valueUnwrapped).format("D MMMM YYYY");
                }
                ko.bindingHandlers.text.update(element, function () { return textContent; });
            }
        };

        ko.bindingHandlers.swTextualDateWithOnlyTime = {
            update: function (element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
                var valueUnwrapped = ko.utils.unwrapObservable(valueAccessor());
                var textContent = '';
                if (moment(valueUnwrapped).format("YYYY-MM-DD") !== '1900-01-01') {
                    textContent = moment(valueUnwrapped).format("HH:mm");
                }
                ko.bindingHandlers.text.update(element, function () { return textContent; });
            }
        };

        ko.bindingHandlers.swTextualTimeOnly = {
            update: function (element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
                var valueUnwrapped = ko.utils.unwrapObservable(valueAccessor());
                var textContent = '';
                if (moment(valueUnwrapped).format("YYYY-MM-DD") !== '1900-01-01') {
                    textContent = moment(valueUnwrapped).format("HH:mm:ss");
                }
                ko.bindingHandlers.text.update(element, function () { return textContent; });
            }
        };

        ko.bindingHandlers.swDateWithoutTime = {
            update: function (element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
                var valueUnwrapped = ko.utils.unwrapObservable(valueAccessor());
                var textContent = '';
                if (moment(valueUnwrapped).format("YYYY-MM-DD") !== '1900-01-01') {
                    textContent = moment(valueUnwrapped).format("YYYY-MM-DD");
                }
                ko.bindingHandlers.text.update(element, function () { return textContent; });
            }
        };

        ko.bindingHandlers.swDateWithMonthAndDay = {
            update: function (element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
                var valueUnwrapped = ko.utils.unwrapObservable(valueAccessor());
                var textContent = '';
                if (moment(valueUnwrapped).format("YYYY-MM-DD") !== '1900-01-01') {
                    textContent = moment(valueUnwrapped).format("MMM D");
                }
                ko.bindingHandlers.text.update(element, function () { return textContent; });
            }
        };

        ko.bindingHandlers.swDateWithTime = {
            update: function (element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
                var valueUnwrapped = ko.utils.unwrapObservable(valueAccessor());
                var textContent = '';
                if (moment(valueUnwrapped).format("YYYY-MM-DD") !== '1900-01-01') {
                    textContent = moment(valueUnwrapped).format("YYYY-MM-DD HH:mm");
                }
                ko.bindingHandlers.text.update(element, function () { return textContent; });
            }
        };

        ko.bindingHandlers.swDateWithTimeAndPrecision = {
            update: function (element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
                var valueUnwrapped = ko.utils.unwrapObservable(valueAccessor());
                var textContent = '';
                if (moment(valueUnwrapped).format("YYYY-MM-DD") !== '1900-01-01') {
                    textContent = moment(valueUnwrapped).format("YYYY-MM-DD HH:mm:ss");
                }
                ko.bindingHandlers.text.update(element, function () { return textContent; });
            }
        };

        ko.bindingHandlers.swTextualTime = {
            update: function (element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
                var valueUnwrapped = ko.utils.unwrapObservable(valueAccessor());
                var textContent = '';

                if (moment(valueUnwrapped).format("YYYY-MM-DD") !== '1900-01-01') {
                    var t1 = new Date(moment(valueUnwrapped));
                    var t2 = new Date();

                    var minutes = parseInt((t2 - t1) / (1000 * 60));
                    var hours = parseInt((t2 - t1) / (1000 * 60 * 60));
                    var days = parseInt((t2 - t1) / (1000 * 60 * 60 * 24));
                    
                    if (minutes < 0) {
                        // Special case when the post has a publishtime in the future
                        textContent = moment(valueUnwrapped).format("YYYY-MM-DD HH:mm");
                    } else if (minutes < 60) {
                        textContent = minutes + ' ' + MiscTexts.MinutesAgo;
                    } else if (hours < 24) {
                        textContent = hours + ' ' + MiscTexts.HoursAgo;
                    } else if (days < 31) {
                        textContent = days + ' ' + MiscTexts.DaysAgo;
                    } else {
                        textContent = moment(valueUnwrapped).format("YYYY-MM-DD HH:mm");
                    }                                        
                }

                ko.bindingHandlers.text.update(element, function () { return textContent; });
            }
        };

        ko.bindingHandlers.swDateFromSeconds = {
            update: function (element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
                var valueUnwrapped = ko.utils.unwrapObservable(valueAccessor());

                var textContent = '';
                var d = Number(valueUnwrapped);

                var seconds = d % 60;
                var minutes = Math.floor(d / 60);

                textContent = pad(minutes, 2) + ':' + pad(seconds, 2);
                
                ko.bindingHandlers.text.update(element, function () { return textContent; });
            }
        };

        ko.bindingHandlers.minutesPart = {
            update: function (element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
                var valueUnwrapped = ko.utils.unwrapObservable(valueAccessor());

                $(element).val(pad(Math.floor(valueUnwrapped / 60), 2));
            }
        };

        ko.bindingHandlers.secondsPart = {
            update: function (element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
                var valueUnwrapped = ko.utils.unwrapObservable(valueAccessor());

                $(element).val(pad(valueUnwrapped % 60, 2));
            }
        };

        ko.bindingHandlers.swRenderInstagram = {
            init: function (element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
                var valueUnwrapped = ko.utils.unwrapObservable(valueAccessor());

                $(element).html(valueUnwrapped);
            }
        };

        // Returns formated byte64string date
        ko.bindingHandlers.swGetFormatedBase64String = {
            update: function (element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
                var valueUnwrapped = ko.utils.unwrapObservable(valueAccessor());

                var textContent;

                if (valueUnwrapped.PictureMiniBase64 !== null) {
                    textContent = "data:image/jpeg;base64," + valueUnwrapped.PictureMiniBase64;
                }
                else {
                    //Hack to return smallest image when PictureMiniBase64 is unavailable
                    //If not used the design will break in the implementation with two
                    //images on top of each other since the later doesn't take up space.
                    textContent = swimagehelper.getPictureURLWithSize(valueUnwrapped, 0.001);
                }

                $(element).attr('src', textContent);
            }
        };

        ko.bindingHandlers.swGameScore = {
            update: function (element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
                var valueUnwrapped = ko.utils.unwrapObservable(valueAccessor());
                var textContent = '';

                if (moment.utc(Date.now()).format("YYYY-MM-DD HH:mm:ss") > moment.utc(valueUnwrapped.GameTime).format("YYYY-MM-DD HH:mm:ss")) {
                    textContent = "VS";
                }
                else {
                    textContent = moment(valueUnwrapped.GameTime).format("HH:mm");
                }
                
                ko.bindingHandlers.text.update(element, function () { return textContent; });
            }
        };

        ko.bindingHandlers.swGameTime = {
            update: function (element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
                var valueUnwrapped = ko.utils.unwrapObservable(valueAccessor());
                var textContent = '';

                if (valueUnwrapped.GameStatusID > 1) {
                    textContent = moment(valueUnwrapped.GameTime).format("HH:mm");
                } else if (moment.utc(Date.now()).format("YYYY-MM-DD HH:mm:ss") > moment.utc(valueUnwrapped.GameTime).format("YYYY-MM-DD HH:mm:ss")) {
                    textContent = moment(valueUnwrapped.GameTime).format("HH:mm");
                }

                ko.bindingHandlers.text.update(element, function () { return textContent; });
            }
        };

        ko.bindingHandlers.EREventIcon = {
            update: function (element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
                var valueUnwrapped = ko.utils.unwrapObservable(valueAccessor());
                //var textContent = "../Content/images/" + swiconhelper.getFootballEREventIcon(valueUnwrapped, false);
                $(element).text(swiconhelper.getEREventIcon(valueUnwrapped));
            }
        };

        var clickAndHrefInitFunc = function (element, valueAccessor, allBindings, viewModel, bindingContext) {
            var valueUnwrapped = ko.utils.unwrapObservable(valueAccessor());

            if (typeof valueUnwrapped === "function") {
                valueUnwrapped = valueUnwrapped();
            }

            ko.bindingHandlers.click.init(element, function () { return valueUnwrapped.toClick; }, allBindings, viewModel, bindingContext);
            $(element).attr('href', valueUnwrapped.getHrefString());
        };

        var clickAndHrefUpdateFunc = function (element, valueAccessor, allBindings, viewModel, bindingContext) {
            var valueUnwrapped = ko.utils.unwrapObservable(valueAccessor());

            if (typeof valueUnwrapped === "function") {
                valueUnwrapped = valueUnwrapped();
            }

            //TODO: Should unbind current click event and update with new one?
            //ko.bindingHandlers.click.init(element, function () { console.log(valueUnwrapped.getHrefString()); return valueUnwrapped.toClick; }, allBindings, viewModel, bindingContext);
            $(element).attr('href', valueUnwrapped.getHrefString());
        };

        ko.bindingHandlers.clickAndHref = {
            // NOTE: Both init and update are called when binding, don't know if this is desired...
            init: clickAndHrefInitFunc,
            update: clickAndHrefUpdateFunc            
        };

        ko.bindingHandlers.sportIcon = {
            update: function (element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
                var valueUnwrapped = ko.utils.unwrapObservable(valueAccessor());
                $(element).text(swiconhelper.getIconForSportID(valueUnwrapped));
            }
        };

        ko.bindingHandlers.reportedItemIcon = {
            update: function (element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
                var valueUnwrapped = ko.utils.unwrapObservable(valueAccessor());

                $(element).text(swiconhelper.getIconForReportedItem(valueUnwrapped));
                var itemTitle;

                switch (valueUnwrapped) {
                    case 1: { itemTitle = "Matchhändelse"; break; }
                    case 2: { itemTitle = "Bild"; break; }
                    case 4: { itemTitle = "Matchkommentar"; break; }
                    case 5: { itemTitle = "Video"; break; }
                    case 6: { itemTitle = "Matchrapport"; break; }
                    case 8: { itemTitle = "Kommentar"; break; }
                    default: { itemTitle = "Okänd"; break; }
                }

                $(element).prop('title', itemTitle);
            }
        };

        ko.bindingHandlers.sportBackground = {
            update: function (element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
                var valueUnwrapped = ko.utils.unwrapObservable(valueAccessor());

                switch (valueUnwrapped) {
                    case 1:
                        $(element).addClass('football-background');
                        break;
                    case 2:
                        $(element).addClass('floorball-background');
                        break;
                    case 3:
                        $(element).addClass('icehockey-background');
                        break;
                    case 4:
                        $(element).addClass('handball-background');
                        break;
                    case 5:
                        $(element).addClass('volleyball-background');
                        break;
                    case 6:
                        $(element).addClass('futsal-background');
                        break;
                }
            }
        };

        ko.bindingHandlers.authorUrlCSS = {
            update: function (element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
                var valueUnwrapped = ko.utils.unwrapObservable(valueAccessor());
                var textContent;

                if (valueUnwrapped.ReporterThumbnailUrl && valueUnwrapped.ReporterThumbnailUrl !== undefined)
                    textContent = valueUnwrapped.ReporterThumbnailUrl;
                else if (valueUnwrapped.ReporterThumbnailURL && valueUnwrapped.ReporterThumbnailURL !== undefined)
                    textContent = valueUnwrapped.ReporterThumbnailURL;
                else if (valueUnwrapped.MemberThumbnailUrl && valueUnwrapped.MemberThumbnailUrl !== undefined)
                    textContent = valueUnwrapped.MemberThumbnailUrl;
                else
                    textContent = "https://sportswik.blob.core.windows.net/memberpictures/defaultplayeravatar.png";

                $(element).css({
                    backgroundImage: 'url(' + textContent + ')'
                });
            }
        };

        ko.bindingHandlers.authorName = {
            update: function (element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
                var valueUnwrapped = ko.utils.unwrapObservable(valueAccessor());
                var textContent;

                if (valueUnwrapped.ReporterName !== undefined)
                    textContent = valueUnwrapped.ReporterName;
                else if (valueUnwrapped.MemberName !== undefined)
                    textContent = valueUnwrapped.MemberName;
                else
                    textContent = "Unknown Sportswik Member";

                $(element).html(textContent);
            }
        };

        ko.bindingHandlers.disabled = {
            update: function (element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
                var valueUnwrapped = ko.utils.unwrapObservable(valueAccessor());

                if (valueUnwrapped) {
                    $(element).addClass('disabled-control');
                    $(element).prop('readonly', true);
                }
            }
        };

        ko.bindingHandlers.setMenuAccess = {
            update: function (element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
                var valueUnwrapped = ko.utils.unwrapObservable(valueAccessor());

                switch (valueUnwrapped.State) {
                    case 0: // Enabled
                    case 1: // Enabled (forbidden)
                        break;
                    case 2: // Disabled
                        $(element).addClass('disabled');
                        break;
                    case 3: // Hidden
                        $(element).hide();
                        break;
                }
            }
        };

        ko.bindingHandlers.disabledDropDown = {
            update: function (element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
                var valueUnwrapped = ko.utils.unwrapObservable(valueAccessor());

                if (valueUnwrapped) {
                    $(element).addClass('disabled-control');
                    $(element).prop('disabled', true);
                }
            }
        };

        ko.bindingHandlers.pictureURL = {
            update: function (element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
                var windowWidth = $(window).width();
                var pictureWidth = element.clientWidth;

                if (windowWidth < pictureWidth) //This should never happen, but it does :(
                    pictureWidth = windowWidth;

                var valueUnwrapped = ko.utils.unwrapObservable(valueAccessor());
                var bestFitURL = swimagehelper.pickCorrectURLFromPictureObject(pictureWidth, valueUnwrapped);

                if (bestFitURL !== null) {
                    $(element).css({
                        backgroundImage: 'url(' + bestFitURL + ')'
                    });
                }
            }
        };

        ko.bindingHandlers.backgroundPictureURL = {
            update: function (element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
                var valueUnwrapped = ko.utils.unwrapObservable(valueAccessor());

                if (valueUnwrapped && valueUnwrapped.length > 0) {
                    $(element).css({
                        backgroundImage: 'url(' + valueUnwrapped + ')'
                    });
                }                
            }
        };

        ko.bindingHandlers.backgroundColor = {
            update: function (element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
                var valueUnwrapped = ko.utils.unwrapObservable(valueAccessor());

                if (valueUnwrapped && valueUnwrapped.length > 0) {
                    $(element).css({
                        'background-color': valueUnwrapped
                    });
                }
            }
        };

        ko.bindingHandlers.placeholder = {
            init: function (element, valueAccessor, allBindingsAccessor) {
                var valueUnwrapped = valueAccessor();
                ko.applyBindingsToNode(element, { attr: { placeholder: valueUnwrapped } });
            }
        };

        ko.bindingHandlers.pictureURLforimg = {            
            update: function (element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {        
                var windowWidth = $(window).width();
                var pictureWidth = element.clientWidth;

                if (windowWidth < pictureWidth) //This should never happen, but it does :(
                    pictureWidth = windowWidth;

                var valueUnwrapped = ko.utils.unwrapObservable(valueAccessor());
                var bestFitURL = swimagehelper.pickCorrectURLFromPictureObject(pictureWidth, valueUnwrapped);

                if (bestFitURL !== null) {

                    $(element).attr({
                        'src': bestFitURL
                    });

                    // Add the class portrait to all images where the height is larger than the width
                    $(element).removeClass('portrait');
                    $(element).one('load', function () {
                        if ($(this).height() >= $(this).width()) {
                            $(this).addClass('portrait');
                        }
                    }).each(function () {
                        if (this.complete) $(this).load();
                    });
                }
            }
        };

        ko.bindingHandlers.thumbnailURL = {
            update: function (element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
                var windowWidth = $(window).width();
                var pictureWidth = element.clientWidth;

                if (windowWidth < pictureWidth) //This should never happen, but it does :(
                    pictureWidth = windowWidth;

                var valueUnwrapped = ko.utils.unwrapObservable(valueAccessor());

                $(element).attr({
                    'src': valueUnwrapped.ThumbnailURL
                });

                // Add the class portrait to all images where the height is larger than the width
                $(element).removeClass('portrait');
                $(element).one('load', function () {
                    if ($(this).height() >= $(this).width()) {
                        $(this).addClass('portrait');
                    }
                }).each(function () {
                    if (this.complete) $(this).load();
                });
                
            }
        };

        ko.bindingHandlers.emoji = {
            update: function (element, valueAccessor, allBindings, viewModel, bindingContext) {
                var params = valueAccessor();

                switch (params) {
                    case 1: //ClappingHands
                        $(element).attr({ 'src': "/Content/images/emoji_clapping.png" });
                        break;
                    case 2: //RedHeart
                        $(element).attr({ 'src': "/Content/images/emoji_redheart.png" });
                        break;
                    case 3: //HappyFace
                        $(element).attr({ 'src': "/Content/images/emoji_happy.png" });
                        break;
                    case 4: //WorriedFace
                        $(element).attr({ 'src': "/Content/images/emoji_worried.png" });
                        break;
                    case 5: //LaughingCrying
                        $(element).attr({ 'src': "/Content/images/emoji_laughing.png" });
                        break;
                    default:
                        $(element).attr({ 'src': "/Content/images/emoji_clapping.png" });
                        break;
                }
            }
        };

        ko.bindingHandlers.emojiUrl = {
            update: function (element, valueAccessor, allBindings, viewModel, bindingContext) {
                var valueUnwrapped = ko.utils.unwrapObservable(valueAccessor());

                switch (valueUnwrapped.type()) {
                    case 1: //ClappingHands
                        $(element).attr({ 'src': "/Content/images/emoji_clapping.png" });
                        break;
                    case 2: //RedHeart
                        $(element).attr({ 'src': "/Content/images/emoji_redheart.png" });
                        break;
                    case 3: //HappyFace
                        $(element).attr({ 'src': "/Content/images/emoji_happy.png" });
                        break;
                    case 4: //WorriedFace
                        $(element).attr({ 'src': "/Content/images/emoji_worried.png" });
                        break;
                    case 5: //LaughingCrying
                        $(element).attr({ 'src': "/Content/images/emoji_laughing.png" });
                        break;
                    default:
                        $(element).attr({ 'src': "/Content/images/emoji_clapping.png" });
                        break;
                }
            }
        };

        ko.bindingHandlers.fairPlayCardUrl = {
            update: function (element, valueAccessor, allBindings, viewModel, bindingContext) {
                var params = valueAccessor();

                switch (params.CountryID) {
                    case 1: {
                        switch (params.Page) {
                            case 1:
                                $(element).attr({ 'src': "/Content/images/fairplaycard-screen-1.png" });
                                $(element).attr({ 'srcset': "/Content/images/fairplaycard-screen-1@2x.png 2x, /Content/images/fairplaycard-screen-1@3x.png 3x" });
                                break;
                            case 2:
                                $(element).attr({ 'src': "/Content/images/fairplaycard-screen-2.png" });
                                $(element).attr({ 'srcset': "/Content/images/fairplaycard-screen-2@2x.png 2x, /Content/images/fairplaycard-screen-2@3x.png 3x" });
                                break;
                            case 3:
                                $(element).attr({ 'src': "/Content/images/fairplaycard-screen-3.png" });
                                $(element).attr({ 'srcset': "/Content/images/fairplaycard-screen-3@2x.png 2x, /Content/images/fairplaycard-screen-3@3x.png 3x" });
                                break;
                        }
                        break;
                    }
                    default:
                        switch (params.Page) {
                            case 1:
                                $(element).attr({ 'src': "/Content/images/fairplaycard-screen-1-UK.png" });
                                $(element).attr({ 'srcset': "/Content/images/fairplaycard-screen-1-UK@2x.png 2x, /Content/images/fairplaycard-screen-1-UK@3x.png 3x" });
                                break;
                            case 2:
                                $(element).attr({ 'src': "/Content/images/fairplaycard-screen-2-UK.png" });
                                $(element).attr({ 'srcset': "/Content/images/fairplaycard-screen-2-UK@2x.png 2x, /Content/images/fairplaycard-screen-2-UK@3x.png 3x" });
                                break;
                            case 3:
                                $(element).attr({ 'src': "/Content/images/fairplaycard-screen-3-UK.png" });
                                $(element).attr({ 'srcset': "/Content/images/fairplaycard-screen-3-UK@2x.png 2x, /Content/images/fairplaycard-screen-3-UK@3x.png 3x" });
                                break;
                        }
                        break;
                }
            }
        };

        ko.bindingHandlers.followYourTeamUrl = {
            update: function (element, valueAccessor, allBindings, viewModel, bindingContext) {
                var params = valueAccessor();

                switch (params.CountryID) {
                    case 1: {
                        switch (params.Page) {
                            case 1:
                                $(element).attr({ 'src': "/Content/images/download_the_app_sv.png" });
                                $(element).attr({ 'srcset': "/Content/images/download_the_app_sv@2x.png 2x, /Content/images/download_the_app_sv@3x.png 3x" });
                                break;
                            case 2:
                                $(element).attr({ 'src': "/Content/images/follow_your_team_sv.png" });
                                $(element).attr({ 'srcset': "/Content/images/follow_your_team_sv@2x.png 2x, /Content/images/follow_your_team_sv@3x.png 3x" });
                                break;
                            case 3:
                                $(element).attr({ 'src': "/Content/images/contribute_sv.png" });
                                $(element).attr({ 'srcset': "/Content/images/contribute_sv@2x.png 2x, /Content/images/contribute_sv@3x.png 3x" });
                                break;
                        }
                        break;
                    }
                    default:
                        switch (params.Page) {
                            case 1:
                                $(element).attr({ 'src': "/Content/images/download_the_app_uk.png" });
                                $(element).attr({ 'srcset': "/Content/images/download_the_app_uk@2x.png 2x, /Content/images/download_the_app_uk@3x.png 3x" });
                                break;
                            case 2:
                                $(element).attr({ 'src': "/Content/images/follow_your_team_uk.png" });
                                $(element).attr({ 'srcset': "/Content/images/follow_your_team_uk@2x.png 2x, /Content/images/follow_your_team_uk@3x.png 3x" });
                                break;
                            case 3:
                                $(element).attr({ 'src': "/Content/images/contribute_uk.png" });
                                $(element).attr({ 'srcset': "/Content/images/contribute_uk@2x.png 2x, /Content/images/contribute_uk@3x.png 3x" });
                                break;
                        }
                        break;
                }
            }
        };

        ko.bindingHandlers.videoURL = {
            init: function (element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
                var valueUnwrapped = ko.utils.unwrapObservable(valueAccessor());                

                // Since HTML5-player can't handle adaptive streaming we use the dash-player in that case
                if (valueUnwrapped.VideoURL.endsWith("manifest")) {
                    var url = valueUnwrapped.VideoURL + '(format=mpd-time-csf)';
                    var player = dashjs.MediaPlayer().create();
                    player.initialize(element, url, true);                    
                }
                else {
                    $('<source src="' + valueUnwrapped.VideoURL + '" type="video/mp4">').appendTo(element);
                }

                if (valueUnwrapped.SocialEntityID && valueUnwrapped.SocialEntityID > 0) {
                    element.addEventListener("play", function () {
                        datamanager.insertSocialEntityView(valueUnwrapped.SocialEntityID);
                    });
                }
            }
        };

        ko.bindingHandlers.HighlightVideo = {
            init: function (element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
                var valueUnwrapped = ko.utils.unwrapObservable(valueAccessor());
                var overlay = $(element).find('.overlay-container');
                var vplayer = $(element).find('.video-player'); 
                var playerShown = false;
                                
                if (valueUnwrapped.ThumbnailURL.length > 0)
                    $(vplayer).attr("poster", valueUnwrapped.ThumbnailURL);

                if (valueUnwrapped.VideoURL.endsWith("manifest")) { // Dash                    
                    var url = valueUnwrapped.VideoURL + '(format=mpd-time-csf)';
                    var player = dashjs.MediaPlayer().create();
                    player.initialize(vplayer.get(0), url, true);

                    element.addEventListener('click', function () {
                        if (!playerShown) {
                            playerShown = true;
                            overlay.hide();
                            vplayer.show();

                            player.play();    

                            if (valueUnwrapped.SocialEntityID && valueUnwrapped.SocialEntityID > 0) {
                                datamanager.insertSocialEntityView(valueUnwrapped.SocialEntityID);                                
                            }
                        }

                        event.preventDefault();
                        event.stopPropagation();
                    });
                }
                else {
                    $('<source src="' + valueUnwrapped.VideoURL + '" type="video/mp4">').appendTo(vplayer);

                    element.addEventListener('click', function (e) {
                        if (!playerShown) {
                            playerShown = true;
                            overlay.hide();
                            vplayer.show();
                            vplayer.get(0).play();

                            if (valueUnwrapped.SocialEntityID && valueUnwrapped.SocialEntityID > 0) {
                                datamanager.insertSocialEntityView(valueUnwrapped.SocialEntityID);                                
                            }

                            event.preventDefault();
                            event.stopPropagation();
                        }
                    });
                }                        
            }
        };

        ko.bindingHandlers.videoPlayURL = {
            init: function (element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
                var valueUnwrapped = ko.utils.unwrapObservable(valueAccessor());

                $(element).addClass("video-js vjs-16-9");

                var videoJSPlayer;                

                // Since HTML5-player can't handle adaptive streaming we use the video-js-player in that case
                if (valueUnwrapped.VideoURL.endsWith("manifest")) {
                    // DASH-support
                    videoJSPlayer = videojs(element, {
                        //techOrder: ['chromecast'],
                        //plugins: {
                        //    chromecast: {}
                        //},
                        controlBar: {
                            playToggle: {
                                replay: false
                            }, // Hides the replay button for VOD
                            pictureInPictureToggle: false // Hides the PiP button
                        }
                    });

                    videoJSPlayer.ready(function () {
                        videoJSPlayer.src({
                            src: valueUnwrapped.VideoURL + '(format=mpd-time-csf)',
                            type: 'application/dash+xml'
                        });
                    });                
                } else if (valueUnwrapped.VideoURL.includes("m3u8")) {
                    if (valueUnwrapped.LiveStreamProviderID === 8) {
                        // Amazon-IVS
                        registerIVSTech(videojs);
                        registerIVSQualityPlugin(videojs); 

                        videoJSPlayer = videojs(element, {
                            controls: true,                                                        
                            plugins: {
                                chromecast: {
                                    receiverAppID: swconstants.chromeCastReceiverAppID
                                }
                                //},
                                //airPlay: {
                                //}
                            },
                            liveui: true,
                            controlBar: {
                                playToggle: {
                                    replay: false
                                }, 
                                pictureInPictureToggle: false
                            },
                            /*techOrder: ['chromecast', 'html5'],*/
                            techOrder: ['chromecast', 'AmazonIVS', 'html5']
                        });

                        videoJSPlayer.ready(function () {
                            videoJSPlayer.enableIVSQualityPlugin();
                            videoJSPlayer.src(valueUnwrapped.VideoURL);
                            //videoJSPlayer.qualityLevels();
                            //videoJSPlayer.hlsQualitySelector();
                        });
                    } else {
                        // Wowza
                        videoJSPlayer = videojs(element, {
                            liveui: true,
                            controlBar: {
                                playToggle: {
                                    replay: false
                                }, // Hides the replay button for VOD
                                pictureInPictureToggle: false // Hides the PiP button
                            }
                        });

                        videoJSPlayer.ready(function () {
                            videoJSPlayer.src(valueUnwrapped.VideoURL);
                        });
                    }
                }
                else {                    
                    videoJSPlayer = videojs(element, {
                        controlBar: {
                            playToggle: {
                                replay: false
                            }, // Hides the replay button for VOD
                            pictureInPictureToggle: false // Hides the PiP button
                        }
                    });

                    videoJSPlayer.ready(function () {
                        videoJSPlayer.src(valueUnwrapped.VideoURL);
                    });
                }

                if (valueUnwrapped.GameMediaItemTypeID) {
                    videoJSPlayer.on('fullscreenchange', function () {
                        // Since Chrome is retarded we need to manually update the height 
                        // of the swiper when exiting fullscreen

                        if (videoJSPlayer.isFullscreen() === false) {
                            try {
                                var swiper = $('#livestream-slider').get(0).swiper;

                                swiper.updateAutoHeight(100);
                            }
                            catch {
                                // Do nothing
                            }
                        }
                    });
                }                    

                videoJSPlayer.on('play', function () {
                    if (valueUnwrapped.SocialEntityID && valueUnwrapped.SocialEntityID > 0)
                        datamanager.insertSocialEntityView(valueUnwrapped.SocialEntityID);
                });                
            }
        };

        ko.bindingHandlers.trackableVideoURL = {
            init: function (element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
                var valueUnwrapped = ko.utils.unwrapObservable(valueAccessor());

                $(element).addClass("video-js vjs-16-9");

                var lastStart = null;
                var timedUpdate = null;
                var videoUrl = valueUnwrapped.VideoURL;
                var videoType = '';   
                /*var elapsedTime = 0;*/

                // Dash videos have a different format of the videourl
                if (valueUnwrapped.VideoURL.endsWith("manifest")) {
                    videoUrl = videoUrl + '(format=mpd-time-csf)';
                    videoType = 'application/dash+xml';
                }

                var videoJSPlayer = videojs(element, {
                    controls: true,
                    plugins: {
                        chromecast: {
                            receiverAppID: swconstants.chromeCastReceiverAppID
                        },
                        airPlay: {
                        }
                    },
                    liveui: true,
                    controlBar: {
                        playToggle: {
                            replay: false
                        },
                        pictureInPictureToggle: false
                    },
                    techOrder: ['chromecast', 'html5'],
                });

                videoJSPlayer.ready(function () {
                    if (videoType.length > 0) {
                        // DASH
                        videoJSPlayer.src({
                            src: videoUrl,
                            type: 'application/dash+xml'
                        });
                    }
                    else
                        videoJSPlayer.src(videoUrl);

                    //videoJSPlayer.qualityLevels();
                    //videoJSPlayer.hlsQualitySelector();
                });

                if (valueUnwrapped.GameMediaItemTypeID) {
                    videoJSPlayer.on('fullscreenchange', function () {
                        // Since Chrome is retarded we need to manually update the height
                        // of the swiper when exiting fullscreen, this is a special case only
                        // applicable for the swiper in the top of the game

                        if (videoJSPlayer.isFullscreen() === false) {
                            try {
                                var swiper = $('#livestream-slider').get(0).swiper;

                                swiper.updateAutoHeight(100);
                            }
                            catch {
                                // Do nothing
                            }
                        }
                    });
                }

                videoJSPlayer.on('play', function () {
                    console.log('Play...');

                    // TODO: When chromecasting, VideoJS sends three play-events for some reason...
                });

                videoJSPlayer.on('playing', function () {
                    // If the player is playing, we insert a VideoEnd-event
                    if (videoJSPlayer.paused() === true) {
                        return;
                    }

                    console.log('Playing...');
                    
                    lastStart = moment.utc().toDate();
                    timedUpdate = moment.utc().toDate();

                    shell.insertVideoEvent(valueUnwrapped);

                    if (valueUnwrapped.SocialEntityID && valueUnwrapped.SocialEntityID > 0)
                        datamanager.insertSocialEntityView(valueUnwrapped.SocialEntityID);
                });

                videoJSPlayer.on('pause', function () {
                    console.log('Video paused');
                    // Called when the player is paused/ended
                    shell.updateVideoEvent(lastStart, valueUnwrapped, true);
                });

                videoJSPlayer.on('dispose', function () {
                    if (videoJSPlayer) {
                        // If the player is playing, we insert a VideoEnd-event
                        var isPlaying = !videoJSPlayer.paused();

                        if (isPlaying)
                            shell.updateVideoEvent(lastStart, valueUnwrapped, true);
                    }
                });

                videoJSPlayer.on('timeupdate', function () {
                    if (videoJSPlayer) {
                        var isPlaying = !videoJSPlayer.paused();

                        if (isPlaying) {
                            var t = Math.abs(moment.utc().toDate().getTime() - timedUpdate.getTime()) / 1000;

                            if (t > 10) {
                                timedUpdate = moment.utc().toDate();

                                console.log('Time update, ' + t + ' seconds');

                                shell.updateVideoEvent(lastStart, valueUnwrapped, false);
                            }
                        }                            
                    }
                });

                videoJSPlayer.on('ended', function () {
                    // If we get a video-end from when we are casting, we dont get a pause so we have to 'end' the view
                    shell.updateVideoEvent(lastStart, valueUnwrapped, true);

                    console.log('Video ended');
                    // Do we ever need to check for 'ended'? Pause should always be called
                });

                videoJSPlayer.on('chromecastConnected', function () {
                    // Called when we connect to the Chromecast
                    console.log('chromecastConnected!');

                    // When we cast, terminate the current 'view'
                    if (videoJSPlayer.paused() === false) {
                        console.log('Update video event!');

                        shell.updateVideoEvent(lastStart, valueUnwrapped, true);
                    }

                    // Create chromecast connect event
                    shell.insertChromecastConnectedEvent(valueUnwrapped);
                });

                videoJSPlayer.on('chromecastDisconnected', function () {
                    // Called when we disconnect from the Chromecast
                    console.log('chromecastDisconnected!');

                    // We get one disconnect per player on the page, somehow ignore the ones that arent casting


                    // Create chromecast connect event
                    shell.insertChromecastDisconnectedEvent(valueUnwrapped);

                    // If we disconnect while the player is playing we don't seem to get a pause                    
                });
            }
        };

        ko.bindingHandlers.PartnerVideoURL = {
            init: function (element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {                
                var valueUnwrapped = ko.utils.unwrapObservable(valueAccessor());

                if (valueUnwrapped.VideoURL.length === 0)
                    return;

                if (valueUnwrapped.VideoURL.endsWith("manifest")) { // Dash
                    var url = valueUnwrapped.VideoURL + '(format=mpd-time-csf)';
                    var player = dashjs.MediaPlayer().create();
                    player.initialize(element, url, true);

                    element.addEventListener('click', function () {
                        if ($(element).hasClass('no-unmute') === false) {
                            player.setMute(!player.isMuted());

                            if (player.isPaused()) {
                                player.play();
                                player.setMute(false);
                            }
                        }
                    });
                }
                else { // MP4
                    $('<source src="' + valueUnwrapped.VideoURL + '" type="video/mp4">').appendTo(element);

                    // poster="placeholder.png" to bind a thumbnail
                    // adding preload="metadata" to video-tag should result in first frame as thumbnail

                    element.addEventListener('click', function () {
                        if ($(element).hasClass('no-unmute') === false) {
                            element.muted = !element.muted;

                            if (element.paused) {
                                element.play();
                                element.muted = false;
                            }
                        }
                        
                    });
                }                
            }
        };

        ko.bindingHandlers.Base64String = {
            init: function (element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
                var valueUnwrapped = ko.utils.unwrapObservable(valueAccessor());

                $(element).attr("src", 'data:image/jpg;base64,' + valueUnwrapped);
            }
        };

        ko.bindingHandlers.templateWithContext = {
            init: ko.bindingHandlers.template.init,
            update: function (element, valueAccessor, allBindings, data, context) {
                var options = ko.utils.unwrapObservable(valueAccessor());

                ko.utils.extend(context, options.context);

                return ko.bindingHandlers.template.update.apply(this, arguments);
            }
        };

        ko.bindingHandlers.timer = {
            update: function (element, valueAccessor) {
                var valueUnwrapped = ko.utils.unwrapObservable(valueAccessor());

                var timer = setInterval(function () {
                    var t1 = new Date();
                    var t2 = new Date(moment(valueUnwrapped));

                    var seconds = Math.floor(((t2 - t1) / 1000) % 60);
                    var minutes = Math.floor(((t2 - t1) / 1000 / 60) % 60);
                    var hours = Math.floor(((t2 - t1) / (1000 * 60 * 60)) % 24);
                    var days = Math.floor((t2 - t1) / (1000 * 60 * 60 * 24));

                    var returnString = pad(minutes, 2) + ':' + pad(seconds, 2);

                    if (hours > 0 || days > 0)
                        returnString = pad(hours, 2) + ':' + returnString;

                    if (days > 0) {
                        returnString = pad(days, 2) + ':' + returnString;
                    }

                    if ((t2 - t1) < 1) {
                        clearInterval(timer);

                        $(element).hide();
                        var x = $(element).next('h4');
                        x.hide();
                        x.next(".btn").removeClass('hidden');
                    }

                    ko.bindingHandlers.text.update(element, function () {
                        return returnString;
                    });
                }, 1000);
            }
        };

        ko.bindingHandlers.trackPartnerFeatureView = {
            init: function (element, valueAccessor, allBindings, viewModel, bindingContext) {
                var params = valueAccessor();                

                if (params.PartnerFeatureID > 0) 
                {                    
                    element.setAttribute("PartnerFeatureID", params.PartnerFeatureID);
                    element.setAttribute("PartnerFeaturePlacementID", params.PartnerFeaturePlacementID);

                    if (params.ExtraTrackingProperty)
                        element.setAttribute("ExtraTrackingProperty", params.ExtraTrackingProperty);
                    else
                        element.setAttribute("ExtraTrackingProperty", 0);

                    if (params.PartnerFeatureEntityID)
                        element.setAttribute("PartnerFeatureEntityID", params.PartnerFeatureEntityID);
                    else
                        element.setAttribute("PartnerFeatureEntityID", 0);

                    //todo: check if we send options from blurb
                    let observerOptions = {
                        root: null,
                        rootMargin: "0px",
                        threshold: [0.5]
                    };

                    //todo: check if we can use global observer instead of creating new for each blurb
                    adObserver = new IntersectionObserver(intersectionCallback,
                        observerOptions);

                    adObserver.observe(element);
                } 
            }
        };

        ko.bindingHandlers.trackPartnerFeatureClick = {
            init: function (element, valueAccessor, allBindings, viewModel, bindingContext) {
                var params = valueAccessor();

                if (params.PartnerFeatureID > 0) {                    
                    element.addEventListener("click", function (event) {
                        var websiteUrl = $(this).attr("href");

                        datamanager.trackPartnerFeatureClick(params.PartnerFeatureID, params.PartnerFeaturePlacementID, 2)
                            .then(function (json) {
                            })
                            .fail(function (error) { });
                        window.open(websiteUrl, '_blank');


                        event.preventDefault();
                    });
                } 
            }
        };

        // Team cards, central function to handle click on expand-icon
        ko.bindingHandlers.toggleExpand = {
            init: function (element, valueAccessor, allBindings, viewModel, bindingContext) {
                element.addEventListener("click", function (event) {                    
                    $(element).closest('.dividerContainer').toggleClass("expanded");

                    event.stopPropagation();
                });
            }
        };

        ko.bindingHandlers.toggleExpandLeagues = {
            init: function (element, valueAccessor, allBindings, viewModel, bindingContext) {
                element.addEventListener("click", function (event) {
                    $(event.target).closest('.team-card-league-container').toggleClass("expanded");

                    event.stopPropagation();
                });
            }
        };

        ko.bindingHandlers.toggleExpandTeamStaff = {
            init: function (element, valueAccessor, allBindings, viewModel, bindingContext) {
                element.addEventListener("click", function (event) {
                    $(event.target).closest('.team-card-staff-container').toggleClass("expanded");

                    event.stopPropagation();
                });
            }
        };

        ko.bindingHandlers.onLike = {
            init: function (element, valueAccessor, allBindings, viewModel, bindingContext) {
                var valueUnwrapped = ko.utils.unwrapObservable(valueAccessor());

                element.addEventListener("click", function (event) {
                    socialentityhelper.likeCommand(valueUnwrapped, element);

                    event.preventDefault();
                    event.stopPropagation();
                });
            }
        };

        ko.bindingHandlers.onLikesClicked = {
            init: function (element, valueAccessor, allBindings, viewModel, bindingContext) {
                var valueUnwrapped = ko.utils.unwrapObservable(valueAccessor());

                element.addEventListener("click", function (event) {
                    socialentitylikes.activate(valueUnwrapped);

                    event.preventDefault();
                    event.stopPropagation();
                });
            }
        };

        ko.bindingHandlers.onViewsClicked = {
            init: function (element, valueAccessor, allBindings, viewModel, bindingContext) {
                var valueUnwrapped = ko.utils.unwrapObservable(valueAccessor());

                element.addEventListener("click", function (event) {                    
                    socialentityviews.activate(valueUnwrapped);

                    event.preventDefault();
                    event.stopPropagation();
                });
            }
        };

        ko.bindingHandlers.onCommentsClicked = {
            init: function (element, valueAccessor, allBindings, viewModel, bindingContext) {
                var valueUnwrapped = ko.utils.unwrapObservable(valueAccessor());

                element.addEventListener("click", function (event) {
                    socialentitycomments.activate(valueUnwrapped);

                    event.preventDefault();
                    event.stopPropagation();
                });
            }
        };

        ko.bindingHandlers.onlyAllowNumeric = {
            init: function (element, valueAccessor, allBindings, viewModel, bindingContext) {
                $(element).on("keydown", function (event) {
                    if (event.keyCode === 46 || event.keyCode === 8 || event.keyCode === 9 || event.keyCode === 27 || event.keyCode === 13 ||
                        // Allow: Ctrl+V
                        (event.ctrlKey === true && (event.which === 118 || event.which === 86)) ||
                        // Allow: Ctrl+c
                        (event.ctrlKey === true && (event.which === 99 || event.which === 67)) ||
                        // Allow: Ctrl+A
                        (event.keyCode === 65 && event.ctrlKey === true) ||
                        // Allow: home, end, left, right
                        (event.keyCode >= 35 && event.keyCode <= 39)) {
                        // let it happen, don't do anything
                        return;
                    }
                    else {
                        // Ensure that it is a number and stop the keypress
                        if (event.shiftKey || (event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105)) {
                            event.preventDefault();
                        }
                    }
                });

                $(element).on("paste", function (event) {
                    if (event.originalEvent.clipboardData.getData('Text').match(/[^\d]/)) {
                        event.preventDefault();
                    }
                });                
            }
        };

        ko.bindingHandlers.onlyAllowNumericAndSpace = {
            init: function (element, valueAccessor, allBindings, viewModel, bindingContext) {
                $(element).on("keydown", function (event) {
                    if (event.keyCode === 46 || event.keyCode === 8 || event.keyCode === 9 || event.keyCode === 27 || event.keyCode === 13 || event.keyCode === 32 ||
                        // Allow: Ctrl+V
                        (event.ctrlKey === true && (event.which === 118 || event.which === 86)) ||
                        // Allow: Ctrl+c
                        (event.ctrlKey === true && (event.which === 99 || event.which === 67)) ||
                        // Allow: Ctrl+A
                        (event.keyCode === 65 && event.ctrlKey === true) ||
                        // Allow: home, end, left, right
                        (event.keyCode >= 35 && event.keyCode <= 39)) {
                        // let it happen, don't do anything
                        return;
                    }
                    else {
                        // Ensure that it is a number and stop the keypress
                        if (event.shiftKey || (event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105)) {
                            event.preventDefault();
                        }
                    }
                });

                $(element).on("paste", function (event) {
                    if (event.originalEvent.clipboardData.getData('Text').match(/[^\d]/)) {
                        event.preventDefault();
                    }
                });
            }
        };


        ko.bindingHandlers.deepLinkClick = {
            init: function (element, valueAccessor, allBindings, viewModel, bindingContext) {
                var valueUnwrapped = ko.utils.unwrapObservable(valueAccessor());
                
                element.addEventListener("click", function (event) {                    
                    switch (valueUnwrapped.DeepLinkTypeID) {
                        case 18: // League organizer
                            router.navigateTo(config.hashes.leagueorganizersite + '/' + valueUnwrapped.DeepLinkItemID);
                            break;
                        case 21:
                            router.navigateTo(config.hashes.magazinegameview + '/' + valueUnwrapped.DeepLinkItemID);
                            break;
                        case 48: // Club-teams
                            router.navigateTo(config.hashes.club + '/' + valueUnwrapped.DeepLinkItemID + '/teams');
                            break;
                        case 53: // Club
                            router.navigateTo(config.hashes.club + '/' + valueUnwrapped.DeepLinkItemID);
                            break;
                        case 69: // Team page
                            router.navigateTo(config.hashes.team + '/' + valueUnwrapped.DeepLinkItemID);
                            break;
                    }

                    event.preventDefault();
                    event.stopPropagation();
                });
            }
        };

        intersectionCallback = function (entries, observer) {
            entries.forEach(function (entry) {
                let adBox = entry.target;

                const partnerFeatureID = entry.target.getAttribute("PartnerFeatureID");
                const partnerFeaturePlacementID = entry.target.getAttribute("PartnerFeaturePlacementID");
                const ExtraTrackingProperty = entry.target.getAttribute("ExtraTrackingProperty");
                const EntityID = entry.target.getAttribute("PartnerFeatureEntityID");

                if (entry.isIntersecting) {
                    adBox.dataset.lastViewStarted = entry.time;

                    // stop observe element after send trackinginformation
                    observer.unobserve(entry.target);                                        

                    shell.trackPartner(partnerFeatureID, partnerFeaturePlacementID, ExtraTrackingProperty, EntityID);
                }
            });
        };

        ko.bindingHandlers.trackSocialEntityView = {
            init: function (element, valueAccessor, allBindings, viewModel, bindingContext) {
                var params = valueAccessor();

                if (params.SocialEntityID > 0) {
                    element.setAttribute("SocialEntityID", params.SocialEntityID);                    

                    //todo: check if we send options from blurb
                    let observerOptions = {
                        root: null,
                        rootMargin: "0px",
                        threshold: [0.5]
                    };
                    
                    adObserver = new IntersectionObserver(intersectionSocialEntityCallback,
                        observerOptions);

                    adObserver.observe(element);
                }
            }
        };

        ko.bindingHandlers.trackInfoItemView = {
            init: function (element, valueAccessor, allBindings, viewModel, bindingContext) {
                var params = valueAccessor();

                if (params.ViewedByMember === false) {
                    if (params.SocialEntityID > 0) {
                        element.setAttribute("SocialEntityID", params.SocialEntityID);

                        let observerOptions = {
                            root: null,
                            rootMargin: "0px",
                            threshold: [0.5]
                        };

                        adObserver = new IntersectionObserver(intersectionInfoItemCallback,
                            observerOptions);

                        adObserver.observe(element);
                    }
                } 
            }
        };

        intersectionInfoItemCallback = function (entries, observer) {
            entries.forEach(function (entry) {
                let adBox = entry.target;

                const socialEntityID = entry.target.getAttribute("SocialEntityID");

                if (entry.isIntersecting) {
                    adBox.dataset.lastViewStarted = entry.time;

                    //console.log('SOCIAL ENTITY DEBUG: Tracking id: ' + socialEntityID);
                    // stop observe element after send trackinginformation
                    observer.unobserve(entry.target);

                    datamanager.insertSocialEntityView(socialEntityID, {
                        success: function (model) {

                        },
                        error: function (response, xhr) {
                        }
                    });
                }
            });
        };

        intersectionSocialEntityCallback = function (entries, observer) {
            entries.forEach(function (entry) {
                let adBox = entry.target;

                const socialEntityID = entry.target.getAttribute("SocialEntityID");

                if (entry.isIntersecting) {
                    adBox.dataset.lastViewStarted = entry.time;                    

                    //console.log('SOCIAL ENTITY DEBUG: Tracking id: ' + socialEntityID);
                    // stop observe element after send trackinginformation
                    observer.unobserve(entry.target);

                    datamanager.insertSocialEntityView(socialEntityID, {
                        success: function (model) {
                            
                        },
                        error: function (response, xhr) {
                        }
                    });
                }
            });
        };

        ko.bindingHandlers.toggleMute = {
            init: function (element, valueAccessor, allBindings, viewModel, bindingContext) {
                element.addEventListener("click", function (event) {
                    var v = $(element).closest('.blurbWrapper').find('video').get(0); //.get(0);

                    if ($(element).hasClass('feather-volume-2')) {
                        $(element).removeClass('feather-volume-2');
                        $(element).addClass('feather-volume-x');
                        v.muted = true;
                    } else {
                        $(element).addClass('feather-volume-2');
                        $(element).removeClass('feather-volume-x');                        
                        v.muted = false;
                    }
                });
            }
        };

        ko.bindingHandlers.videoAutoPlay = {
            init: function (element, valueAccessor, allBindings, viewModel, bindingContext) {
                let observerOptions = {
                    root: null,
                    rootMargin: "0px",
                    threshold: [0.5]
                };

                adObserver = new IntersectionObserver(videoEntityCallback,
                    observerOptions);

                adObserver.observe(element);
                
            }
        };

        ko.bindingHandlers.bindAnimation = {
            init: function (element, valueAccessor, allBindings, viewModel, bindingContext) {
                var animationElement = $(element).parent().get(0);
                var params = valueAccessor();

                if (params.partner.PartnerFeature !== null && params.partner.PartnerFeature.UseLightAnimation && params.index() === 0) {
                    // TODO: Check if item already is visible, then run animation right away
                    //let observerOptions = {
                    //    root: null,
                    //    rootMargin: "0px",
                    //    threshold: [0.1]
                    //};

                    //var lineUpObserver = new IntersectionObserver(lineUpCallback,
                    //    observerOptions);

                    //lineUpObserver.observe(animationElement);

                    setTimeout(function () {
                        bodymovin.loadAnimation({
                            container: animationElement,
                            path: '/content/lottie/lineup-lightning.json',
                            renderer: 'svg/canvas/html',
                            loop: false,
                            autoplay: true,
                        });
                    }, 0);
                }                
            }
        };      

        lineUpCallback = function (entries, observer) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    bodymovin.loadAnimation({
                        container: entry.target,
                        path: '/content/lottie/lineup-lightning.json',
                        renderer: 'svg/canvas/html',
                        loop: false,
                        autoplay: true,

                    });

                    observer.unobserve(entry.target);
                }
            });
        };

        ko.bindingHandlers.lineUpSwiper = {
            init: function (element, valueAccessor, allBindings, viewModel, bindingContext) {
                var params = valueAccessor();

                if (params.GameLineUpLines.length > 1) {
                    var elem = $(element).parent();
                    var swiperElement = elem.get(0);

                    // Find the closest .pager
                    var x = elem.parent().find('.swiper-pagination-blurb').get(0);

                    new Swiper(swiperElement, {
                        autoHeight: true,
                        spaceBetween: 0,
                        slidesPerView: 'auto',
                        observer: true,
                        observeParents: true,
                        observeSlideChildren: true,
                        pagination: {
                            el: x,
                            type: 'bullets',
                            dynamicBullets: true,
                            dynamicMainBullets: 5,
                            clickable: true
                        }
                    });
                }
            }
        };

        ko.bindingHandlers.createPartnerSwiper = {
            init: function (element, valueAccessor, allBindings, viewModel, bindingContext) {
                var swiperElement = $(element).parent().get(0);

                var swiper = new Swiper(swiperElement, {
                    autoHeight: true,
                    spaceBetween: 20,
                    slidesPerView: 'auto',
                    observer: true,
                    observeParents: true,
                    observeSlideChildren: true,                        

                    autoplay: {
                        delay: 5000,
                    },
                });
            }
        };   

        ko.bindingHandlers.createGallerySwiper = {
            init: function (element, valueAccessor, allBindings, viewModel, bindingContext) {
                var swiperElement = $(element).parent().get(0);

                new Swiper(swiperElement, {
                    spaceBetween: 0,
                    slidesPerView: 'auto'
                });
            }
        };   

        ko.bindingHandlers.createFairPlaySwiper = {
            init: function (element, valueAccessor, allBindings, viewModel, bindingContext) {
                var elem = $(element).parent();
                var swiperElement = elem.get(0);

                // Find the closest .pager
                var x = elem.parent().find('.swiper-pagination').get(0);

                var swiper = new Swiper(swiperElement, {
                    autoHeight: true,
                    spaceBetween: 0,
                    slidesPerView: 'auto',
                    observer: true,
                    observeParents: true,
                    observeSlideChildren: true,
                    pagination: {
                        el: x,
                        type: 'bullets',
                        dynamicBullets: true,
                        dynamicMainBullets: 5,
                        clickable: true
                    }
                });
            }
        };          

        ko.bindingHandlers.createPartnerSwiperNoMargin = {
            init: function (element, valueAccessor, allBindings, viewModel, bindingContext) {
                var elem = $(element).parent();
                var swiperElement = elem.get(0);

                // Find the closest .pager
                var x = elem.parent().find('.swiper-pagination-blurb').get(0);


                var liveStreamSlider = new Swiper(swiperElement, {
                    autoHeight: true,
                    spaceBetween: 0,
                    slidesPerView: 'auto',                    
                    observer: true,
                    observeParents: true,
                    observeSlideChildren: true,
                    pagination: {
                        el: x,
                        type: 'bullets',
                        dynamicBullets: true,
                        dynamicMainBullets: 5,
                        clickable: true
                    }
                });
            }
        };
        
        ko.bindingHandlers.clubPartnerSwiper = {
            init: function (element, valueAccessor, allBindings, viewModel, bindingContext) {
                var params = valueAccessor();

                if (params.Partners.length > 1) {
                    var elem = $(element).parent();
                    var swiperElement = elem.get(0);
                    var pager = elem.parent().find('.swiper-pagination-container').get(0);

                    // Without the timeout, the autoplay simply refuses to work
                    setTimeout(function () {
                        new Swiper(swiperElement, {
                            autoHeight: true,
                            spaceBetween: 5,
                            slidesPerView: 1,
                            centerInsufficientSlides: true,
                            breakpoints: {
                                400: {
                                    slidesPerView: 2,
                                    slidesPerGroup: 2
                                },
                                600: {
                                    slidesPerView: 3,
                                    slidesPerGroup: 3
                                },
                                800: {
                                    slidesPerView: 4,
                                    slidesPerGroup: 2
                                }
                            },
                            loop: true,
                            observer: true,
                            observeParents: true,
                            observeSlideChildren: true,

                            autoplay: {
                                delay: 5000,
                                disableOnInteraction: false
                            },
                            pagination: {
                                el: pager,
                                type: 'bullets',
                                dynamicBullets: true,
                                dynamicMainBullets: 5,
                                clickable: true
                            }
                        });
                    }, 0);
                }                
            }
        };

        ko.bindingHandlers.clubMainPartnerSwiper = {
            init: function (element, valueAccessor, allBindings, viewModel, bindingContext) {
                var params = valueAccessor();

                if (params.MainPartners.length > 1) {
                    var elem = $(element).parent();
                    var swiperElement = elem.get(0);
                    
                    var pager = elem.parent().find('.swiper-pagination-container').get(0);

                    // Without the timeout, the autoplay simply refuses to work
                    setTimeout(function () {
                        new Swiper(swiperElement, {
                            autoHeight: true,
                            spaceBetween: 5,
                            slidesPerView: 1,
                            centerInsufficientSlides: true,
                            loop: true,
                            observer: true,
                            observeParents: true,
                            observeSlideChildren: true,

                            autoplay: {
                                delay: 5000,
                                disableOnInteraction: false
                            },
                            pagination: {
                                el: pager,
                                type: 'bullets',
                                dynamicBullets: true,
                                dynamicMainBullets: 5,
                                clickable: true
                            }
                        });
                    }, 0);                    
                }
            }
        };

        ko.bindingHandlers.draggablePlayer = {
            update: function (element, valueAccessor, allBindings, viewModel, bindingContext) {
                var params = valueAccessor();

                if (params.Draggable) {
                    $(element).draggable({ containment: ".lineup-mask", scroll: false });
                }                

                $(element).css('left', 'calc(' + params.OffsetX * 100 + '% - 28px)');
                $(element).css('top', 'calc(' + params.OffsetY * 100 + '% - 28px)');

                if (params.LastName)
                    $(element).prop('title', params.LastName);                
            }
        };

        ko.bindingHandlers.bindColorPicker = {
            update: function (element, valueAccessor, allBindings, viewModel, bindingContext) {
                // Hack with timeout, otherwise the colorpicker dissapears the second time it loads
                setTimeout(function () {
                    $(element).spectrum({
                        type: "component",
                        preferredFormat: "hex",
                        showInput: true,
                        showInitial: true,
                        showAlpha: false,
                        allowEmpty: false,
                        hideAfterPaletteSelect: true
                    });
                }, 0);
            }
        };

        videoEntityCallback = function (entries, observer) {
            entries.forEach(function (entry) {
                //let adBox = entry.target;

                if (entry.isIntersecting) {
                    entry.target.play();
                } else {
                    entry.target.pause();                    
                }
            });
        };

        ko.bindingHandlers.ettanSpecial = {
            update: function (element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
                if (window.location.href.indexOf("ettanplay") == -1)
                    $(element).addClass('topbarmargin');
            }
        };

        ko.bindingHandlers.ettanSpecialBrandingTopBar = {
            update: function (element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
                var valueUnwrapped = ko.utils.unwrapObservable(valueAccessor());
                
                if (valueUnwrapped.BrandingColor === '' || window.location.href.indexOf("ettanplay") >= 0)
                    $(element).hide();
            }
        };

        ko.bindingHandlers.dividerClass = {
            update: function (element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
                var valueUnwrapped = ko.utils.unwrapObservable(valueAccessor());

                switch (valueUnwrapped) {
                    case 1: { $(element).addClass('Promoted'); break;  }
                    case 2: { $(element).addClass('QualifyPromotion'); break; }
                    case 3: { $(element).addClass('QualifyRelegation'); break; }
                    case 4: { $(element).addClass('Relegated'); break; }
                }
            }
        };

        ko.bindingHandlers.eventTypeName = {
            update: function (element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
                var valueUnwrapped = ko.utils.unwrapObservable(valueAccessor());
                var textContent = '';

                if (valueUnwrapped.SaveTextHeadline() && valueUnwrapped.SaveTextHeadline().length > 0) {
                    textContent = valueUnwrapped.SaveTextHeadline();
                }
                else {
                    if (valueUnwrapped.SportID() === 1) {
                        switch (valueUnwrapped.FootballEREventTypeID()) {
                            case 1: { textContent = eventReportingTexts.Goal; break; } // Goal
                            case 3: { textContent = eventReportingTexts.Chance; break; } // Chance
                            case 4: { textContent = eventReportingTexts.Substitution; break; } // Substitution
                            case 6: { textContent = eventReportingTexts.YellowCard; break; } // Yellow card
                            case 7: { textContent = eventReportingTexts.RedCard; break; } // Red card
                            case 8: { textContent = eventReportingTexts.CommentTheGame; break; } // Comment
                        }
                    } else if (valueUnwrapped.SportID() === 2) {
                        switch (valueUnwrapped.FloorballEREventTypeID()) {
                            case 1: { textContent = eventReportingTexts.Goal; break; } // Goal
                            case 2: { textContent = eventReportingTexts.Penalty; break; } // Penalty
                            case 3: { textContent = eventReportingTexts.Chance; break; } // Chance
                            case 4: { textContent = eventReportingTexts.CommentTheGame; break; } // Comment
                            case 12: { textContent = eventReportingTexts.OvertimeEnded; break; } // End second half
                            case 14: { textContent = eventReportingTexts.GameStatusEndGame; break; } // Final whistle
                            case 15: { textContent = eventReportingTexts.Timeout; break; } // Comment     
                            case 16: { textContent = eventReportingTexts.GoalkeeperIn; break; } // Goalkeeper in
                            case 17: { textContent = eventReportingTexts.PlayerOfTheGame; break; } // Player of the game                        
                            case 21: { textContent = eventReportingTexts.GoalkeeperOut; break; } // Goalkeeper out
                        }
                    } else if (valueUnwrapped.SportID() === 6) {
                        switch (valueUnwrapped.FutsalEREventTypeID()) {
                            case 1: { textContent = eventReportingTexts.Goal; break; } // Goal
                            case 3: { textContent = eventReportingTexts.Chance; break; } // Chance
                            case 4: { textContent = eventReportingTexts.Substitution; break; } // Substitution 
                            case 6: { textContent = eventReportingTexts.YellowCard; break; } // Yellow card
                            case 7: { textContent = eventReportingTexts.RedCard; break; } // Red card
                            case 8: { textContent = eventReportingTexts.CommentTheGame; break; } // Comment
                        }
                    }
                }

                ko.bindingHandlers.text.update(element, function () { return textContent; });
            }
        };

        ko.bindingHandlers.saveEventText = {
            update: function (element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
                var valueUnwrapped = ko.utils.unwrapObservable(valueAccessor());
                var textContent = '';

                var clubAndTeamName = '';

                if (valueUnwrapped.ClubAndTeamName())
                    clubAndTeamName = valueUnwrapped.ClubAndTeamName();

                if (valueUnwrapped.SportID() === 1) {
                    switch (valueUnwrapped.FootballEREventTypeID()) {
                        case 1: { textContent = eventReportingTexts.Goal + ' ' + clubAndTeamName; break; } // Goal
                        case 3: { textContent = eventReportingTexts.Chance + ' ' + clubAndTeamName; break; } // Chance
                        case 4: { textContent = eventReportingTexts.Substitution + ' ' + clubAndTeamName; break; } // Substitution 
                        case 6: {
                            if (clubAndTeamName.length === 0)
                                textContent = eventReportingTexts.Card;
                            else
                                textContent = eventReportingTexts.YellowCard + ' ' + clubAndTeamName;

                            break;
                        } // Yellow card
                        case 7: {
                            if (clubAndTeamName.length === 0)
                                textContent = eventReportingTexts.Card;
                            else
                                textContent = eventReportingTexts.RedCard + ' ' + clubAndTeamName;

                            break;
                        } // Red card
                        case 8: { textContent = eventReportingTexts.CommentTheGame; break; } // Comment
                    }
                } else if (valueUnwrapped.SportID() === 2) {
                    switch (valueUnwrapped.FloorballEREventTypeID()) {
                        case 1: { textContent = eventReportingTexts.Goal + ' ' + clubAndTeamName; break; } // Goal
                        case 2: { textContent = eventReportingTexts.Penalty + ' ' + clubAndTeamName; break; } // Penalty
                        case 3: { textContent = eventReportingTexts.Chance + ' ' + clubAndTeamName; break; } // Chance
                        case 4: { textContent = eventReportingTexts.CommentTheGame; break; } // Comment
                        case 15: { textContent = eventReportingTexts.Timeout + ' ' + clubAndTeamName; break; } // Timeout
                    }
                } else if (valueUnwrapped.SportID() === 6) {
                    switch (valueUnwrapped.FutsalEREventTypeID()) {
                        case 1: { textContent = eventReportingTexts.Goal + ' ' + clubAndTeamName; break; } // Goal
                        case 3: { textContent = eventReportingTexts.Chance + ' ' + clubAndTeamName; break; } // Chance
                        case 4: { textContent = eventReportingTexts.Substitution + ' ' + clubAndTeamName; break; } // Substitution 
                        case 6: {
                            if (clubAndTeamName.length === 0)
                                textContent = eventReportingTexts.Card;
                            else
                                textContent = eventReportingTexts.YellowCard + ' ' + clubAndTeamName;

                            break;
                        } // Yellow card
                        case 7: {
                            if (clubAndTeamName.length === 0)
                                textContent = eventReportingTexts.Card;
                            else
                                textContent = eventReportingTexts.RedCard + ' ' + clubAndTeamName;

                            break;
                        } // Red card
                        case 8: { textContent = eventReportingTexts.CommentTheGame; break; } // Comment
                    }
                }

                ko.bindingHandlers.text.update(element, function () { return textContent; });
            }
        };

        ko.bindingHandlers.eventReportingPlaceHolderHint = {
            update: function (element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
                var valueUnwrapped = ko.utils.unwrapObservable(valueAccessor());
                var textContent = '';

                if (valueUnwrapped.SportID() === 1) {
                    switch (valueUnwrapped.FootballEREventTypeID()) {
                        case 1: { textContent = eventReportingTexts.DescribeTheGoal; break; } // Goal
                        case 3: { textContent = eventReportingTexts.WhatHappened; break; } // Chance
                        case 4: { textContent = eventReportingTexts.DescribeTheSubstitution; break; } // Substitution 
                        case 6: { textContent = eventReportingTexts.WhatHappened; break; } // Yellow card
                        case 7: { textContent = eventReportingTexts.WhatHappened; break; } // Red card
                        case 8: { textContent = eventReportingTexts.WriteAComment; break; } // Comment
                        case 10: { textContent = eventReportingTexts.DescribeTheHalf; break; } // End first half
                        case 12: { textContent = eventReportingTexts.DescribeTheHalf; break; } // End second half
                        case 14: { textContent = eventReportingTexts.DescribeTheOvertime; break; } // End overtime
                        case 16: { textContent = eventReportingTexts.DescribeTheGame; break; } // Final whistle
                        case 18: { textContent = eventReportingTexts.DescribeThePeriod; break; } // End third half
                    }
                } else if (valueUnwrapped.SportID() === 2) {
                    switch (valueUnwrapped.FloorballEREventTypeID()) {
                        case 1: { textContent = eventReportingTexts.DescribeTheGoal; break; } // Goal
                        case 2: { textContent = eventReportingTexts.DescribeThePenalty; break; } // Penalty
                        case 3: { textContent = eventReportingTexts.WhatHappened; break; } // Chance
                        case 4: { textContent = eventReportingTexts.WriteAComment; break; } // Comment
                        case 6: { textContent = eventReportingTexts.DescribeThePeriod; break; } // End first period
                        case 8: { textContent = eventReportingTexts.DescribeThePeriod; break; } // End second period
                        case 10: { textContent = eventReportingTexts.DescribeThePeriod; break; } // End third period
                        case 12: { textContent = eventReportingTexts.DescribeTheOvertime; break; } // End overtime
                        case 14: { textContent = eventReportingTexts.DescribeTheGame; break; } // Final whistle
                        case 15: { textContent = eventReportingTexts.DescribeTheTimeout; break; } // Timeout
                        case 17: { textContent = eventReportingTexts.WriteAMotivation; break; } // Player of the game
                    }
                } else if (valueUnwrapped.SportID() === 6) {
                    switch (valueUnwrapped.FutsalEREventTypeID()) {
                        case 1: { textContent = eventReportingTexts.DescribeTheGoal; break; } // Goal
                        case 3: { textContent = eventReportingTexts.WhatHappened; break; } // Chance
                        case 4: { textContent = eventReportingTexts.DescribeTheSubstitution; break; } // Substitution 
                        case 6: { textContent = eventReportingTexts.WhatHappened; break; } // Yellow card
                        case 7: { textContent = eventReportingTexts.WhatHappened; break; } // Red card
                        case 8: { textContent = eventReportingTexts.WriteAComment; break; } // Comment
                        case 10: { textContent = eventReportingTexts.DescribeTheHalf; break; } // End first half
                        case 12: { textContent = eventReportingTexts.DescribeTheHalf; break; } // End second half
                        case 14: { textContent = eventReportingTexts.DescribeTheOvertime; break; } // End overtime
                        case 16: { textContent = eventReportingTexts.DescribeTheGame; break; } // Final whistle
                        case 18: { textContent = eventReportingTexts.DescribeThePeriod; break; } // End third half
                        case 20: { textContent = eventReportingTexts.DescribeThePeriod; break; } // End fourth half
                    }
                }

                ko.applyBindingsToNode(element, { attr: { placeholder: textContent } });
            }
        };

        ko.bindingHandlers.eventText = {
            update: function (element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
                var valueUnwrapped = ko.utils.unwrapObservable(valueAccessor());

                var textContent = '';

                switch (valueUnwrapped.SportID) {
                    case 1:
                        switch (valueUnwrapped.TypeID) {
                            case 1: { textContent = FootballEREventTexts.FootballEREventTypeGoal; break; }
                            case 2: { textContent = FootballEREventTexts.FootballEREventTypeCorner; break; }
                            case 3: { textContent = FootballEREventTexts.FootballEREventTypeChance; break; }
                            case 4: { textContent = FootballEREventTexts.FootballEREventTypeSubstitution; break; }
                            case 5: { textContent = FootballEREventTexts.FootballEREventTypePenaltyKick; break; }
                            case 6: { textContent = FootballEREventTexts.FootballEREventTypeYellowCard; break; }
                            case 7: { textContent = FootballEREventTexts.FootballEREventTypeRedCard; break; }
                            case 8: { textContent = FootballEREventTexts.FootballEREventTypeComment; break; }
                            case 9: { textContent = FootballEREventTexts.FootballEREventTypeFirstHalfStart; break; }
                            case 10: { textContent = FootballEREventTexts.FootballEREventTypeFirstHalfEnd; break; }
                            case 11: { textContent = FootballEREventTexts.FootballEREventTypeSecondHalfStart; break; }
                            case 12: { textContent = FootballEREventTexts.FootballEREventTypeSecondHalfEnd; break; }
                            case 13: { textContent = FootballEREventTexts.FootballEREventTypeOvertimeStart; break; }
                            case 14: { textContent = FootballEREventTexts.FootballEREventTypeOvertimeEnd; break; }
                            case 15: { textContent = FootballEREventTexts.FootballEREventTypePenaltiesStart; break; }
                            case 16: { textContent = FootballEREventTexts.FootballEREventTypeFinalWhistle; break; }
                            case 17: { textContent = FootballEREventTexts.FootballEREventTypeThirdHalfStart; break; }
                            case 18: { textContent = FootballEREventTexts.FootballEREventTypeThirdHalfEnd; break; }
                        }
                        
                        break;
                    case 2:
                        switch (valueUnwrapped.TypeID) {
                            case 1: { textContent = FloorballEREventTexts.FloorballEREventTypeGoal; break; }
                            case 2: { textContent = FloorballEREventTexts.FloorballEREventTypePenalty; break; }
                            case 3: { textContent = FloorballEREventTexts.FloorballEREventTypeChance; break; }
                            case 4: { textContent = FloorballEREventTexts.FloorballEREventTypeComment; break; }
                            case 5: { textContent = FloorballEREventTexts.FloorballEREventTypeFirstPeriodStart; break; }
                            case 6: { textContent = FloorballEREventTexts.FloorballEREventTypeFirstPeriodEnd; break; }
                            case 7: { textContent = FloorballEREventTexts.FloorballEREventTypeSecondPeriodStart; break; }
                            case 8: { textContent = FloorballEREventTexts.FloorballEREventTypeSecondPeriodEnd; break; }
                            case 9: { textContent = FloorballEREventTexts.FloorballEREventTypeThirdPeriodStart; break; }
                            case 10: { textContent = FloorballEREventTexts.FloorballEREventTypeThirdPeriodEnd; break; }
                            case 11: { textContent = FloorballEREventTexts.FloorballEREventTypeOvertimeStart; break; }
                            case 12: { textContent = FloorballEREventTexts.FloorballEREventTypeOvertimeEnd; break; }
                            case 13: { textContent = FloorballEREventTexts.FloorballEREventTypePenaltiesStart; break; }
                            case 14: { textContent = FloorballEREventTexts.FloorballEREventTypeFinalWhistle; break; }
                            case 15: { textContent = FloorballEREventTexts.FloorballEREventTypeTimeout; break; }
                            case 16: { textContent = valueUnwrapped.ShortText; break; }
                            case 17: { textContent = FloorballEREventTexts.FloorballEREventTypePlayerOfTheGame; break; }
                            case 18: { textContent = FloorballEREventTexts.FloorballEREventTypePenaltyOver; break; }
                            case 19: { textContent = FloorballEREventTexts.FloorballEREventTypeMissedPenaltyShot; break; }
                            case 20: { textContent = FloorballEREventTexts.FloorballEREventTypeMadePenaltyShot; break; }
                            case 21: { textContent = FloorballEREventTexts.FloorballEREventTypeGoalKeeperOut; break; }
                                
                        }
                        break;
                    case 6:
                        switch (valueUnwrapped.TypeID) {
                            case 1: { textContent = FutsalEREventTexts.FutsalEREventTypeGoal; break; }
                            case 2: { textContent = FutsalEREventTexts.FutsalEREventTypeCorner; break; }
                            case 3: { textContent = FutsalEREventTexts.FutsalEREventTypeChance; break; }
                            case 4: { textContent = FutsalEREventTexts.FutsalEREventTypeSubstitution; break; }
                            case 5: { textContent = FutsalEREventTexts.FutsalEREventTypePenaltyKick; break; }
                            case 6: { textContent = FutsalEREventTexts.FutsalEREventTypeYellowCard; break; }
                            case 7: { textContent = FutsalEREventTexts.FutsalEREventTypeRedCard; break; }
                            case 8: { textContent = FutsalEREventTexts.FutsalEREventTypeComment; break; }
                            case 9: { textContent = FutsalEREventTexts.FutsalEREventTypeFirstHalfStart; break; }
                            case 10: { textContent = FutsalEREventTexts.FutsalEREventTypeFirstHalfEnd; break; }
                            case 11: { textContent = FutsalEREventTexts.FutsalEREventTypeSecondHalfStart; break; }
                            case 12: { textContent = FutsalEREventTexts.FutsalEREventTypeSecondHalfEnd; break; }
                            case 13: { textContent = FutsalEREventTexts.FutsalEREventTypeOvertimeStart; break; }
                            case 14: { textContent = FutsalEREventTexts.FutsalEREventTypeOvertimeEnd; break; }
                            case 15: { textContent = FutsalEREventTexts.FutsalEREventTypePenaltiesStart; break; }
                            case 16: { textContent = FutsalEREventTexts.FutsalEREventTypeFinalWhistle; break; }
                            case 17: { textContent = FutsalEREventTexts.FutsalEREventTypeThirdHalfStart; break; }
                            case 18: { textContent = FutsalEREventTexts.FutsalEREventTypeThirdHalfEnd; break; }
                            case 19: { textContent = FutsalEREventTexts.FutsalERGameStatusFourthHalf; break; }
                            case 20: { textContent = FutsalEREventTexts.FutsalERGameStatusFourthHalfEnd; break; }
                        }
                        break;

                }

                /*var textContent = valueUnwrapped.SportID + ' ' + valueUnwrapped.TypeID;*/

                ko.bindingHandlers.text.update(element, function () { return textContent; });
            }
        };

        ko.bindingHandlers.eventTypeSelectTeamDescription = {
            update: function (element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
                var valueUnwrapped = ko.utils.unwrapObservable(valueAccessor());
                var textContent = '';

                if (valueUnwrapped.SportID() === 1) {
                    switch (valueUnwrapped.FootballEREventTypeID()) {
                        case 1: { textContent = eventReportingTexts.WhatTeamScored; break; } // Goal
                        case 3: { textContent = eventReportingTexts.WhatTeamGotAChance; break; } // Chance
                        case 4: { textContent = eventReportingTexts.WhatTeamMadeASubstitution; break; } // Substitution 
                        case 6: { textContent = eventReportingTexts.WhatTeamGotTheYellowCard; break; } // Yellow card
                        case 7: { textContent = eventReportingTexts.WhatTeamGotTheRedCard; break; } // Red card
                    }
                } else if (valueUnwrapped.SportID() === 2) {
                    switch (valueUnwrapped.FloorballEREventTypeID()) {
                        case 1: { textContent = eventReportingTexts.WhatTeamScored; break; } // Goal                            
                        case 2: { textContent = eventReportingTexts.WhatTeamGotAPenalty; break; } // Penalty                            
                        case 3: { textContent = eventReportingTexts.WhatTeamGotAChance; break; } // Chance                            
                        case 15: { textContent = eventReportingTexts.WhatTeamTookATimeout; break; } // Comment
                        case 16: { textContent = eventReportingTexts.WhatTeam; break; } // Goalie in
                        case 17: { textContent = eventReportingTexts.WhatTeam; break; } // Player of the game                        
                        case 21: { textContent = eventReportingTexts.WhatTeam; break; } // Goalie out
                    }
                } else if (valueUnwrapped.SportID() === 6) {
                    switch (valueUnwrapped.FutsalEREventTypeID()) {
                        case 1: { textContent = eventReportingTexts.WhatTeamScored; break; } // Goal
                        case 3: { textContent = eventReportingTexts.WhatTeamGotAChance; break; } // Chance                            
                        case 4: { textContent = eventReportingTexts.WhatTeamMadeASubstitution; break; } // Substitution                            
                        case 6: { textContent = eventReportingTexts.WhatTeamGotTheYellowCard; break; } // Yellow card
                        case 7: { textContent = eventReportingTexts.WhatTeamGotTheRedCard; break; } // Red card
                    }
                }

                ko.bindingHandlers.text.update(element, function () { return textContent; });
            }
        };

        ko.bindingHandlers.eventDetailsText = {
            update: function (element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
                var valueUnwrapped = ko.utils.unwrapObservable(valueAccessor());

                var textContent = valueUnwrapped.DetailsText;

                switch (valueUnwrapped.SportID) {
                    case 2:
                        switch (valueUnwrapped.TypeID) {
                            case 1: {
                                switch (valueUnwrapped.SubTypeID) {
                                    case 1: { textContent += ' - ' + FloorballEREventTexts.FloorballGoalTypePowerPlay; break; }
                                    case 2: { textContent += ' - ' + FloorballEREventTexts.FloorballGoalTypeShortHanded; break; }
                                    case 3: { textContent += ' - ' + FloorballEREventTexts.FloorballGoalTypeEmptyNet; break; }
                                    case 4: { textContent += ' - ' + FloorballEREventTexts.FloorballGoalTypeEquallyShortHanded; break; }
                                    case 5: { textContent += ' - ' + FloorballEREventTexts.FloorballGoalTypeDelayedPenalty; break; }
                                    case 6: { textContent += ' - ' + FloorballEREventTexts.FloorballGoalTypeWithoutGoalkeeper; break; }
                                    case 7: { textContent += ' - ' + FloorballEREventTexts.FloorballGoalTypeSuddenDeath; break; }
                                    case 8: { textContent += ' - ' + FloorballEREventTexts.FloorballGoalTypeExtraTime; break; }
                                    case 9: { textContent += ' - ' + FloorballEREventTexts.FloorballGoalTypeShortHandedDelayedPenalty; break; }
                                    case 10: { textContent += ' - ' + FloorballEREventTexts.FloorballGoalTypeEquallyShortHandedDelayedPenalty; break; }
                                    case 11: { textContent += ' - ' + FloorballEREventTexts.FloorballGoalTypePowerPlayEmptyNet; break; }
                                    case 12: { textContent += ' - ' + FloorballEREventTexts.FloorballGoalTypeShortHandedEmptyNet; break; }
                                    case 13: { textContent += ' - ' + FloorballEREventTexts.FloorballGoalTypeEquallyShortHandedEmptyNet; break; }
                                    case 14: { textContent += ' - ' + FloorballEREventTexts.FloorballGoalTypeDelayedPenaltyEmptyNet; break; }
                                    case 15: { textContent += ' - ' + FloorballEREventTexts.FloorballGoalTypePenaltyShot; break; }
                                    case 16: { textContent += ' - ' + FloorballEREventTexts.FloorballGoalTypePowerPlayDelayedPenalty; break; }
                                }

                                break;
                            }
                            case 2: {
                                // textContent = FloorballEREventTexts.FloorballEREventTypePenalty;
                                break;
                            }
                            case 3: {
                                // textContent = FloorballEREventTexts.FloorballEREventTypeChance;
                                break;
                            }
                        }
                        break;
                }

                ko.bindingHandlers.text.update(element, function () { return textContent; });
            }
        };

        function pad(num, size) {
            var s = num + "";

            if (s.length < 2) {
                while (s.length < size) s = "0" + s;
                return s;
            }
            else {
                return s;
            }
        };
    });;
define('ko.debug.helpers',
['ko'],
function (ko) {

    //track the number of re-evaluations for a computed observable
    ko.observableArray.fn.trackReevaluations = function () {
        var self = this;
        self.reevaluationCount = ko.observable(0);
        self.subscribe(function () {
            this.reevaluationCount(this.reevaluationCount() + 1);
        }, self);
        return self;
    };

    ko.utils.debugInfo = function (items) {
        return ko.computed(function () {
            //new in KO 2.1. it used to be JSON.stringify(ko.toJS(timeslots), null, 2)
            return ko.toJSON(items, null, 2);
        });
    };

});;
define('messenger',
['amplify', 'config'],
    function (amplify, config) {
        var
            priority = 1,
            
            publish = function (topic, options) {
                amplify.publish(topic, options);
            },

            subscribe = function (options) {
                amplify.subscribe(
                    options.topic,
                    options.context,
                    options.callback,
                    priority);
            };

        publish.viewModelActivated = function(options) {
            amplify.publish(config.messages.viewModelActivated, options);
        };

        return {
            publish: publish,
            subscribe: subscribe
        };
    });
;
define('navigation',
    ['jquery', 'underscore', 'router', 'viewmodels/vm.magazinegameview', 'config'],
    function ($, _, router, magazinegameview, config) {

        var x = 10,

            navigateToDeepLink = function (data) {
                /*console.log(data);*/

                switch (data.DeepLinkTypeID) {
                    case 21: // Game
                        router.navigateTo(config.hashes.magazinegameview + '/' + data.DeepLinkItemID);
                        break;
                    case 81: // LeagueOrganizer-infoitems
                        router.navigateTo(config.hashes.leagueorganizersite + '/' + data.DeepLinkItemID + '/posts');
                        break;
                    case 95: // LeagueOrganizer-pictures
                        router.navigateTo(config.hashes.leagueorganizersite + '/' + data.DeepLinkItemID + '/pictures');
                        break;
                    case 96: // LeagueOrganizer-videos
                        router.navigateTo(config.hashes.leagueorganizersite + '/' + data.DeepLinkItemID + '/videos');
                        break;
                    case 97: // LeagueOrganizer-highlights
                        router.navigateTo(config.hashes.leagueorganizersite + '/' + data.DeepLinkItemID + '/highlights');
                        break;
                    case 98: // LeagueOrganizer-replays
                        router.navigateTo(config.hashes.leagueorganizersite + '/' + data.DeepLinkItemID + '/replays');
                        break;
                    case 99: // LeagueOrganizer-planned games
                        router.navigateTo(config.hashes.leagueorganizersite + '/' + data.DeepLinkItemID + '/planned');
                        break;
                    case 100: // Live right now
                        router.navigateTo(config.hashes.leagueorganizersite + '/' + data.DeepLinkItemID + '/live');
                        break;
                    case 101: // Picture-detail
                        if (isLoggedIn) {
                            router.navigateTo(config.hashes.livedetails + '/' + data.GameID + '/' + data.DeepLinkItemID + '/2');
                        } else {
                            alert(MemberTexts.SignUpRequired);
                        }
                        break;
                    case 102: // Video-detail
                        if (isLoggedIn) {
                            router.navigateTo(config.hashes.livedetails + '/' + data.GameID + '/' + data.DeepLinkItemID + '/5');
                        } else {
                            alert(MemberTexts.SignUpRequired);
                        }
                        break;
                    case 103: // League-pictures
                        router.navigateTo(config.hashes.leaguesite + '/' + data.DeepLinkItemID + '/pictures');
                        break;
                    case 104: // League-videos
                        router.navigateTo(config.hashes.leaguesite + '/' + data.DeepLinkItemID + '/videos');
                        break;
                    case 105: // League-highlights
                        router.navigateTo(config.hashes.leaguesite + '/' + data.DeepLinkItemID + '/highlights');
                        break;
                    case 106: // League-replays
                        router.navigateTo(config.hashes.leaguesite + '/' + data.DeepLinkItemID + '/replays');
                        break;
                    case 107: // League-coming livegames
                        router.navigateTo(config.hashes.leaguesite + '/' + data.DeepLinkItemID + '/planned');
                        break;
                    case 108: // League-live
                        router.navigateTo(config.hashes.leaguesite + '/' + data.DeepLinkItemID + '/live');
                        break;
                    case 109: // Info-item 
                        router.navigateTo(config.hashes.infoitemdetails + '/' + data.DeepLinkItemID);
                        break;
                    case 110: // Game Page Replay      
                        router.navigateTo(config.hashes.magazinegameview + '/' + data.DeepLinkItemID + '/3');
                        break;
                    case 111: // Game Page Highlights reel   
                        router.navigateTo(config.hashes.magazinegameview + '/' + data.DeepLinkItemID + '/2');
                        break;
                    case 112: // Club-pictures
                        router.navigateTo(config.hashes.club + '/' + data.DeepLinkItemID + '/pictures');
                        break;
                    case 113: // Club-videos
                        router.navigateTo(config.hashes.club + '/' + data.DeepLinkItemID + '/videos');
                        break;
                    case 114: // Club-highlights
                        router.navigateTo(config.hashes.club + '/' + data.DeepLinkItemID + '/highlights');
                        break;
                    case 115: // Club-replays
                        router.navigateTo(config.hashes.club + '/' + data.DeepLinkItemID + '/replays');
                        break;
                    case 116: // Club-coming livegames
                        router.navigateTo(config.hashes.club + '/' + data.DeepLinkItemID + '/planned');
                        break;
                    case 117: // Club-live
                        router.navigateTo(config.hashes.club + '/' + data.DeepLinkItemID + '/live');
                        break;
                    case 118: // Team-pictures
                        router.navigateTo(config.hashes.team + '/' + data.DeepLinkItemID + '/pictures');
                        break;
                    case 119: // Team-videos
                        router.navigateTo(config.hashes.team + '/' + data.DeepLinkItemID + '/videos');
                        break;
                    case 120: // Team-highlights
                        router.navigateTo(config.hashes.team + '/' + data.DeepLinkItemID + '/highlights');
                        break;
                    case 121: // Team-replays
                        router.navigateTo(config.hashes.team + '/' + data.DeepLinkItemID + '/replays');
                        break;
                    case 122: // Team-coming livegames
                        router.navigateTo(config.hashes.team + '/' + data.DeepLinkItemID + '/planned');
                        break;
                    case 123: // Team-live
                        router.navigateTo(config.hashes.team + '/' + data.DeepLinkItemID + '/live');
                        break;
                }
            },

            isLoggedIn = function () {
                return _.isObject(shell.currentMember);
            };

        return {
            navigateToDeepLink: navigateToDeepLink
        };
    });;
define('presenter',
    ['jquery'],
    function ($) {
        var
            transitionOptions = {
                ease: 'swing',
                fadeOut: 100,
                floatIn: 500
            },

            showSaveIndicator = function (text) {
                $("#loading").fadeIn();
                $("#loadingspinner").text(text);
                var opts = {
                    lines: 12, // The number of lines to draw
                    length: 7, // The length of each line
                    width: 4, // The line thickness
                    radius: 10, // The radius of the inner circle
                    color: '#000', // #rgb or #rrggbb
                    speed: 1, // Rounds per second
                    trail: 60, // Afterglow percentage
                    shadow: false, // Whether to render a shadow
                    hwaccel: false // Whether to use hardware acceleration
                };
                var target = document.getElementById('loading');
                var spinner = new Spinner(opts).spin(target);
            },

                items = $('#sideMenu, .mainWrapper, .main'),
            content = $('.main'),

            entranceThemeTransition = function ($view) {
                $view.css({
                    display: 'block',
                    visibility: 'visible',
                    opacity: 1
                }).addClass('view-active');
                /*.animate({
                    marginRight: 0,
                    marginLeft: 0,
                    opacity: 1
                },transitionOptions.floatIn, transitionOptions.ease);*/
            },

            highlightActiveView = function (route, group) {
                // Reset top level nav links
                // Find all NAV links by CSS classname 
                var $group = $(group);
                if ($group) {
                    $(group + '.route-active').removeClass('route-active');
                    if (route) {
                        var match = route[0] === '/' ? route.substring(1) : route;
                        // Highlight the selected nav that matches the route
                        $group.has('a[href="' + match + '"]').addClass('route-active');
                    }
                }
            },

            resetViews = function () {
                $('.view').css({
                    marginLeft: transitionOptions.offsetLeft,
                    marginRight: transitionOptions.offsetRight,
                    opacity: 0
                });
             },

            toggleActivity = function (show) {
                $('#busyindicator').toggle(show);
                $('#reloaderButton').toggle(!show);
            },

            toggleSaveActivity = function (show, text) {
                if (show) {
                    showSaveIndicator(text);
                }
                else {
                    $("#loading").fadeOut();
                }
            },

            //TODO: Add transform-fallback
            toggleSideMenu = function ()
            {
                if (content.hasClass('open')) 
                {
                    closeSideMenu();
                }
                else 
                {
                    openSideMenu();
                }
            },

            openSideMenu = function() 
            {
                $(items).removeClass('closed').addClass('open');
                $('#sideMenu').show();
            },

            closeSideMenu = function() 
            { 
                $(items).removeClass('open').addClass('closed');
                if(!Modernizr.csstransforms3d)
                {
                    $('#sideMenu').hide();
                }
            },

            transitionTo = function ($view, route, group, title) {
                var $activeViews = $('.view-active');

                $('#reload').hide();
                $('#overviewPicker').hide();
                $('#timelinePicker').hide();

                if ($activeViews.length) {
                    $activeViews.fadeOut(transitionOptions.fadeOut, function () {
                        resetViews();
                        entranceThemeTransition($view);
                    });
                    $('.view').removeClass('view-active');
                } else {
                    resetViews();
                    entranceThemeTransition($view);
                }

                highlightActiveView(route, group);

                //$('#mainHeader').text(title);
                
                toggleActivity(false);
            };


        return {
            toggleActivity: toggleActivity,
            toggleSaveActivity: toggleSaveActivity,
            transitionOptions: transitionOptions,
            transitionTo: transitionTo,
            toggleSideMenu: toggleSideMenu,
            closeSideMenu: closeSideMenu
        };
    });
;
define('register',
    ['jquery', 'helpers/sw.uihelper'],
    function ($, uihelper) {

        var displayErrors = function (form, errors) {
                var errorSummary = uihelper.getValidationSummaryErrors(form)
                    .removeClass('validation-summary-valid')
                    .addClass('validation-summary-errors');

                var items = $.map(errors, function (error) {
                    return '<li>' + error + '</li>';
                }).join('');

                var oops = '<h2>' + signInTexts.SomethingWentWrong + '</h2>';

                $('#createAccountHeader').hide();
                window.scrollTo(0, 0);
                errorSummary.find('ul').empty().append(items);
                errorSummary.find('h2').remove();
                errorSummary.prepend(oops);
            },

            // This method runs when we post a login
            loginFormSubmitHandler = function (e) {
                var $form = $(this);

                // We check if jQuery.validator exists on the form
                if (!$form.valid || $form.valid()) {
                    //uihelper.displayLoadingIndicator(signInTexts.LoggingIn);

                    $.post($form.attr('action'), $form.serializeArray())
                        .done(function (json) {
                            json = json || {};
                            
                            // In case of success, we redirect to the provided URL or the same page.
                            if (json.success) {                                                                
                                if (json.requiresRoleSelect) {
                                    console.log(json.inviteGuid);
                                    $.redirect('/account/selectrole', {
                                        'UserToken': json.userToken, 'MemberID': json.memberId, 'MemberInviteGuid': json.inviteGuid });
                                }                                
                                else if (json.hasExistingTeamRoles) {
                                    // If the member had existing team roles, reroute to that page
                                    window.location = '/Account/Connections';
                                } else {
                                    window.location = json.redirect || location.href;

                                    if (location.href.indexOf("#") > 0)
                                        location.reload();
                                }
                            } else if (json.errors) {
                                $("#loading").fadeOut();
                                uihelper.displayErrors($form, json.errors);
                            }
                        })
                        .error(function () {
                            uihelper.displayErrors($form, ['An unknown error happened.']);
                            $("#loading").fadeOut();
                        });
                }

                // Prevent the normal behavior since we opened the dialog
                e.preventDefault();
            },

            registerFormSubmitHandler = function (e) {
                var $form = $(this);
                // Show spinner for with login information
                // We check if jQuery.validator exists on the form
                if (!$form.valid || $form.valid()) {
                    uihelper.displayLoadingIndicator(signInTexts.RegisteringMember);
                    $.post($form.attr('action'), $form.serializeArray())
                        .done(function (json) {
                            json = json || {};

                            // Holds the redirectValue if ConnectToPerson is showed
                            registerReturnUrl = json.redirect;
                            uihelper.hideLoadingIndicator();

                            // In case of success, we redirect to the provided URL or the same page.
                            if (json.success) {
                                if (json.connectToPerson === true) {
                                    window.location = "/Account/ConnectMemberToPerson";
                                }
                                else {
                                    window.location = json.redirect || "";
                                }
                            } else if (json.errors) {
                                displayErrors($form, json.errors);
                            }
                        })
                        .error(function () {
                            displayErrors($form, ['An unknown error happened.']);
                            $("#loading").fadeOut();
                        });
                }

                // Prevent the normal behavior since we opened the dialog
                e.preventDefault();
            },

            connectToPlayerFormSubmitHandler = function (e) {
                var $form = $(this);
                // We check if jQuery.validator exists on the form
                if (!$form.valid || $form.valid()) {
                    $.post($form.attr('action'), $form.serializeArray())
                        .done(function (json) {
                            json = json || {};
                            uihelper.hideLoadingIndicator();
                            if (json.success) {
                                // Member Is Connected to Player or TeamStaff and should be routed to startpage
                                window.location = "/";
                            } else if (json.errors) {
                                uihelper.hideLoadingIndicator();
                                displayErrors($form, json.errors);
                            }
                        })
                        .error(function () {
                            displayErrors($form, ['An unknown error happened.']);
                            uihelper.hideLoadingIndicator();
                        });
                }
                // Prevent the normal behavior since we opened the dialog
                e.preventDefault();
            },

            submitRegisterFromFacebook = function (credentials) {
                // TODO: perhaps we should show a new view with the information we got from facebook
                // In order for the user to confirm that they are creating an account with the correct information.

                uihelper.displayLoadingIndicator(signInTexts.RegisteringMember);
                $.ajax({
                    url: "/account/facebookregister",
                    type: "POST",
                    data: credentials,
                    error: function () {
                        uihelper.hideLoadingIndicator();
                        alert(signInTexts.ErrorLoggingInToFacebook);
                    },
                    success: function (json) {
                        uihelper.hideLoadingIndicator();
                        if (json.success) {
                            if (json.connectToPerson === true) {
                                window.location = "/Account/ConnectMemberToPerson?returnUrl=" + json.redirect;
                            } else {
                                window.location = json.redirect || "";
                            }
                        } else if (json.errors) {
                            displayErrors($form, json.errors);
                        }
                    }
                });
            },

            submitLoginFromFacebook = function (credentials) {
                var $form = $(this);

                uihelper.displayLoadingIndicator(signInTexts.LoggingIn);

                $.ajax({
                    url: "/account/facebookloginweb",
                    type: "POST",
                    data: credentials,
                    error: function () {
                        $("#loading").fadeOut();
                        alert(signInTexts.ErrorLoggingInToFacebook);
                    },
                    success: function (json) {
                        $("#loading").fadeOut();
                        if (json.success === true)
                            window.location.href = loginReturnUrl || location.href;
                        else {
                            alert(json.errors);
                        }
                    }
                });
            },

            registerLoginFormSubmitHandler = function (e) {
                var $form = $(this);
                // We check if jQuery.validator exists on the form
                if (!$form.valid || $form.valid()) {
                    uihelper.displayLoadingIndicator(signInTexts.LoggingIn);
                    $.post($form.attr('action'), $form.serializeArray())
                        .done(function (json) {                        
                            json = json || {};
                            uihelper.hideLoadingIndicator();
                            // In case of success, we redirect to the provided URL or the same page.
                            if (json.success) {
                                window.location = json.redirect || ""; // location.href;
                            }
                            else if (json.errors) {
                                displayErrors($form, json.errors);
                            }
                        })
                        .error(function () {
                            displayErrors($form, ['An unknown error happened.']);
                            $("#loading").fadeOut();
                        });
                }

                // Prevent the normal behavior since we opened the dialog
                e.preventDefault();
            },

            init = function () {                
                var path = window.location.pathname;
                var vars = path.split("/");

                if (vars[1] === "Home" && vars[2] === "Register" && vars[3] !== null) {
                    $("#loginPanel").show();
                }

                $("#registerForm").submit(registerFormSubmitHandler);
                $("#registerLoginForm").submit(registerLoginFormSubmitHandler);                

                //Login
                $('#loginButtonActivate').click(function () {
                    $("#createAccountHeader").hide();                
                    $('#loginPanel').slideDown(function () {
                        $('html, body').animate({
                            //scrollTop: $("#loginPanel").offset().top
                        }, 200);
                    });
                });

                $('.showLoginAgain').click(function () {
                    $('#resetPasswordPanel').slideUp(function () {
                        $('#loginPanel').slideDown();
                    });

                });

                $("#showResetPasswordPanel").click(function () {
                    $("#loginPanel").slideUp(function () {
                        $("#resetPasswordPanel").slideDown(function () {
                            $("#UserName").focus();
                        });
                    });
                });

                $("#loginForm").submit(loginFormSubmitHandler);                

            };

        init();

    return {
        registerFormSubmitHandler: registerFormSubmitHandler,
        registerLoginFormSubmitHandler: registerLoginFormSubmitHandler
    };
});;
define('responsivejavascript',
    ['jquery'],
    function ($) {

        var sWikCurrentScreenSize = $(window).width(),
        
        getCurrentScreenWidth = function (size) {
            return sWikCurrentScreenSize;
        },

        setCurrentScreenWidth = function (size) {
            sWikCurrentScreenSize = size;
        };

        return {
            getCurrentScreenWidth: getCurrentScreenWidth,
            setCurrentScreenWidth: setCurrentScreenWidth
        };

    });;
define('route-config',
    ['config', 'router', 'vm'],
    function (config, router, vm) {
        var
            logger = config.logger,

            register = function () {

                var routeData = [
                    // Magazine routes
                    {
                        view: config.viewIds.magazine,
                        routes: [
                            {
                                isDefault: true,
                                route: config.hashes.magazine,
                                title: 'Sportswik',
                                callback: vm.magazine.activate,
                                group: '.route-top',
                                cleanupCallback: vm.magazine.cleanup,
                                keepScrollPosition: true
                            },
                            {
                                view: config.viewIds.magazine,
                                route: config.hashes.magazine + '/:isFromReg',
                                title: 'Sportswik',
                                callback: vm.magazine.activate,
                                cleanupCallback: vm.magazine.cleanup
                            },
                            {
                                view: config.viewIds.magazine,
                                route: config.hashes.magazine + '/:isFromReg' + '/:teamId',
                                title: 'Sportswik',
                                callback: vm.magazine.activate,
                                cleanupCallback: vm.magazine.cleanup
                            }
                            //{
                            //    view: config.viewIds.magazine,
                            //    route: config.hashes.magazine + '/:feedId' + '/:pageId' + '/:teamId',
                            //    title: 'Sportswik',
                            //    callback: vm.magazine.activate,
                            //    cleanupCallback: vm.magazine.cleanup
                            //}
                        ]
                    },
                    // Arena routes
                    {
                        view: config.viewIds.arena,
                        routes: [
                            {
                                isDefault: false,
                                route: config.hashes.arena + '/:arenaId',
                                title: 'Sportswik',
                                callback: vm.arena.activate,
                                group: '.route-top',
                                cleanupCallback: vm.arena.cleanup
                            }
                        ]
                    },
                    // Magazine gamview routes
                    {
                        view: config.viewIds.magazinegameview,
                        routes: [
                            {
                                isDefault: false,
                                route: config.hashes.magazinegameview + '/:gameId',
                                title: 'Sportswik',
                                callback: vm.magazinegameview.activate,
                                group: '.route-top',
                                cleanupCallback: vm.magazinegameview.cleanup,
                                keepScrollPosition: true
                            },
                            {
                                isDefault: false,
                                route: config.hashes.magazinegameview + '/:gameId' + '/:section',
                                title: 'Sportswik',
                                callback: vm.magazinegameview.activate,
                                group: '.route-top',
                                cleanupCallback: vm.magazinegameview.cleanup,
                                keepScrollPosition: true
                            }

                        ]
                    },
                    // Magazine gamview details routes
                    {
                        view: config.viewIds.magazinegameviewdetails,
                        routes: [
                            {
                                isDefault: false,
                                route: config.hashes.magazinegameviewdetails + '/:gameId' + '/:section',
                                title: 'Sportswik',
                                callback: vm.magazinegameviewdetails.activate,
                                group: '.route-top',
                                cleanupCallback: vm.magazinegameviewdetails.cleanup
                            }
                        ]
                    },    
                    {
                        view: config.viewIds.blurbtest,
                        routes: [
                            {
                                isDefault: false,
                                route: config.hashes.blurbtest + '/:blurbTypeId' + '/:gameId',
                                title: 'Sportswik',
                                callback: vm.blurbtest.activate,
                                group: '.route-top',
                                cleanupCallback: vm.blurbtest.cleanup                                
                            }
                        ]
                    },
                    {
                        view: config.viewIds.myteams,
                        routes: [
                            {
                                isDefault: false,
                                route: config.hashes.myteams,
                                title: 'Sportswik',
                                callback: vm.myteams.activate,
                                group: '.route-top',
                                cleanupCallback: vm.myteams.cleanup
                            }
                        ]
                    },
                    {
                        view: config.viewIds.districts,
                        routes: [
                            {
                                isDefault: false,
                                route: config.hashes.districts,
                                title: 'Sportswik',
                                callback: vm.districts.activate,
                                group: '.route-top',
                                cleanupCallback: vm.districts.cleanup
                            }
                        ]
                    },
                    {
                        view: config.viewIds.member,
                        routes: [
                            {
                                isDefault: false,
                                route: config.hashes.member,
                                title: 'Sportswik',
                                callback: vm.member.activate,
                                group: '.route-top',
                                cleanupCallback: vm.member.cleanup
                            },
                            {
                                isDefault: false,
                                route: config.hashes.member + '/:subview',
                                title: 'Sportswik',
                                callback: vm.member.activatesubview,
                                group: '.route-top',
                                cleanupCallback: vm.member.cleanup
                            },
                            {
                                isDefault: false,
                                route: config.hashes.member + '/:subview' + '/:teamId',
                                title: 'Sportswik',
                                callback: vm.member.activatesubview,
                                group: '.route-top',
                                cleanupCallback: vm.member.cleanup
                            }
                        ]
                    },
                    {
                        view: config.viewIds.mygames,
                        routes: [
                            {
                                isDefault: false,
                                route: config.hashes.mygames,
                                title: 'Sportswik',
                                callback: vm.mygames.activate,
                                group: '.route-top',
                                cleanupCallback: vm.mygames.cleanup
                            }
                        ]
                    },
                    {
                        view: config.viewIds.memberdetails,
                        routes: [
                            {
                                isDefault: false,
                                route: config.hashes.memberdetails + '/:memberId',
                                title: 'Sportswik',
                                callback: vm.memberdetails.activate,
                                group: '.route-top'
                            }
                        ]
                    },

                    // Memberrequest view
                    {
                        view: config.viewIds.memberrequest,
                        routes: [
                            {
                                isDefault: false,
                                route: config.hashes.memberrequest,
                                title: 'Sportswik',
                                callback: vm.memberrequest.activate,
                                group: '.route-top'
                            }
                        ]
                    },

                    {
                        view: config.viewIds.partneradmin,
                        routes: [
                            {
                                isDefault: false,
                                route: config.hashes.partneradmin,
                                title: 'Sportswik',
                                callback: vm.partneradmin.activate,
                                group: '.route-top'
                            },
                            {
                                isDefault: false,
                                route: config.hashes.partneradmin + "/:subview",
                                title: 'Sportswik',
                                callback: vm.partneradmin.activatesubview,
                                group: '.route-top',
                                cleanupCallback: vm.partneradmin.cleanup
                            },
                            {
                                isDefault: false,
                                route: config.hashes.partneradmin + "/:subview/:Id",
                                title: 'Sportswik',
                                callback: vm.partneradmin.activatesubview,
                                group: '.route-top',
                                cleanupCallback: vm.partneradmin.cleanup
                            }
                        ]
                    },

                    {
                        view: config.viewIds.partnerfeature,
                        routes: [
                            {
                                isDefault: false,
                                route: config.hashes.partnerfeature + "/:Id",
                                title: 'Sportswik',
                                callback: vm.partnerfeature.activate,
                                group: '.route-top',
                                cleanupCallback: vm.partnerfeature.cleanup
                            },
                            {
                                isDefault: false,
                                route: config.hashes.partnerfeature + "/:Id/:subview",
                                title: 'Sportswik',
                                callback: vm.partnerfeature.activatesubview,
                                group: '.route-top',
                                cleanupCallback: vm.partnerfeature.cleanup
                            }
                        ]
                    },

                    {
                        view: config.viewIds.stream,
                        routes: [
                            {
                                isDefault: false,
                                route: config.hashes.stream,
                                title: 'Sportswik',
                                callback: vm.stream.activate,
                                group: '.route-top',
                                cleanupCallback: vm.stream.cleanup
                            },
                            {
                                isDefault: false,
                                route: config.hashes.stream + "/:section",
                                title: 'Sportswik',
                                callback: vm.stream.activate,
                                group: '.route-top',
                                cleanupCallback: vm.stream.cleanup
                            },
                            {
                                isDefault: false,
                                route: config.hashes.stream + "/:section/:entityId",
                                title: 'Sportswik',
                                callback: vm.stream.activate,
                                group: '.route-top',
                                cleanupCallback: vm.stream.cleanup
                            },
                            {
                                isDefault: false,
                                route: config.hashes.stream + "/:section/:entityId/:teamId",
                                title: 'Sportswik',
                                callback: vm.stream.activate,
                                group: '.route-top',
                                cleanupCallback: vm.stream.cleanup
                            },

                        ]
                    },

                    {
                        view: config.viewIds.teamsubscription,
                        routes: [
                            {
                                isDefault: false,
                                route: config.hashes.teamsubscription + "/:Id",
                                title: 'Sportswik',
                                callback: vm.teamsubscription.activate,
                                group: '.route-top',
                                cleanupCallback: vm.teamsubscription.cleanup
                            }
                        ]
                    },
                    {
                        view: config.viewIds.gameteamrequest,
                        routes: [
                            {
                                isDefault: false,
                                route: config.hashes.gameteamrequest + "/:Id",
                                title: 'Sportswik',
                                callback: vm.gameteamrequest.activate,
                                group: '.route-top',
                                cleanupCallback: vm.gameteamrequest.cleanup
                            }
                        ]
                    },
                    {
                        view: config.viewIds.membernotifications,
                        routes: [
                            {
                                isDefault: false,
                                route: config.hashes.membernotifications,
                                title: 'Sportswik',
                                callback: vm.membernotifications.activate,
                                group: '.route-top',
                                cleanupCallback: vm.membernotifications.cleanup
                            }
                        ]
                    },
                    {
                        view: config.viewIds.game,
                        routes: [
                            {
                                isDefault: false,
                                route: config.hashes.game + "/:Id" + "/:subview",
                                title: 'Sportswik',
                                callback: vm.game.activate,
                                group: '.route-top',
                                cleanupCallback: vm.game.cleanup,
                                keepScrollPosition: true
                            },
                            {
                                isDefault: false,
                                route: config.hashes.game + "/:Id" + "/:subview" + "/:subId",
                                title: 'Sportswik',
                                callback: vm.game.activate,
                                group: '.route-top',
                                cleanupCallback: vm.game.cleanup,
                                keepScrollPosition: true
                            }
                        ]
                    },
                    {
                        view: config.viewIds.lineup,
                        routes: [
                            {
                                isDefault: false,
                                route: config.hashes.lineup + "/:gameId/:teamId",
                                title: 'Sportswik',
                                callback: vm.lineup.activate,
                                group: '.route-top',
                                cleanupCallback: vm.lineup.cleanup,
                                keepScrollPosition: true
                            },
                            {
                                isDefault: false,
                                route: config.hashes.lineup + "/:gameId/:teamId/:subview",
                                title: 'Sportswik',
                                callback: vm.lineup.activatesubview,
                                group: '.route-top',
                                cleanupCallback: vm.lineup.cleanup,
                                keepScrollPosition: true
                            }
                        ]
                    },
                    {
                        view: config.viewIds.gameteamroster,
                        routes: [
                            {
                                isDefault: false,
                                route: config.hashes.gameteamroster + "/:Id",
                                title: 'Sportswik',
                                callback: vm.gameteamroster.activate,
                                group: '.route-top',
                                cleanupCallback: vm.gameteamroster.cleanup,
                                keepScrollPosition: true
                            },
                            {
                                isDefault: false,
                                route: config.hashes.gameteamroster + "/:Id/:subview",
                                title: 'Sportswik',
                                callback: vm.gameteamroster.activatesubview,
                                group: '.route-top',
                                cleanupCallback: vm.gameteamroster.cleanup,
                                keepScrollPosition: true
                            },
                            {
                                isDefault: false,
                                route: config.hashes.gameteamroster + "/:Id/:subview/:subId",
                                title: 'Sportswik',
                                callback: vm.gameteamroster.activatesubview,
                                group: '.route-top',
                                cleanupCallback: vm.gameteamroster.cleanup,
                                keepScrollPosition: true
                            }
                        ]
                    },
                    {
                        view: config.viewIds.livestream,
                        routes: [
                            {
                                isDefault: false,
                                route: config.hashes.livestream + "/:Id",
                                title: 'Sportswik',
                                callback: vm.livestream.activate,
                                group: '.route-top',
                                cleanupCallback: vm.livestream.cleanup,
                                keepScrollPosition: true
                            }
                        ]
                    },
                    {
                        view: config.viewIds.livestreamsubscription,
                        routes: [
                            {
                                isDefault: false,
                                route: config.hashes.livestreamsubscription + "/:type",
                                title: 'Sportswik',
                                callback: vm.livestreamsubscription.activate,
                                group: '.route-top',
                                cleanupCallback: vm.livestreamsubscription.cleanup,
                                keepScrollPosition: true
                            },
                            {
                                isDefault: false,
                                route: config.hashes.livestreamsubscription + "/:type/:Id",
                                title: 'Sportswik',
                                callback: vm.livestreamsubscription.activate,
                                group: '.route-top',
                                cleanupCallback: vm.livestreamsubscription.cleanup,
                                keepScrollPosition: true
                            }
                        ]
                    },
                    {
                        view: config.viewIds.teamadmin,
                        routes: [
                            {
                                isDefault: false,
                                route: config.hashes.teamadmin + "/:Id",
                                title: 'Sportswik',
                                callback: vm.teamadmin.activate,
                                group: '.route-top',
                                cleanupCallback: vm.teamadmin.cleanup,
                                keepScrollPosition: true
                            },
                            {
                                isDefault: false,
                                route: config.hashes.teamadmin + '/:Id/:subview',
                                title: 'Sportswik',
                                callback: vm.teamadmin.activatesubview,
                                group: '.route-top',
                                cleanupCallback: vm.teamadmin.cleanup,
                                keepScrollPosition: true
                            },
                            {
                                isDefault: false,
                                route: config.hashes.teamadmin + '/:Id/:subview/:itemId',
                                title: 'Sportswik',
                                callback: vm.teamadmin.activatesubview,
                                group: '.route-top',
                                cleanupCallback: vm.teamadmin.cleanup,
                                keepScrollPosition: true
                            }
                        ]
                    },

                    {
                        view: config.viewIds.clubadmin,
                        routes: [
                            {
                                isDefault: false,
                                route: config.hashes.clubadmin + "/:Id",
                                title: 'Sportswik',
                                callback: vm.clubadmin.activate,
                                group: '.route-top',
                                cleanupCallback: vm.clubadmin.cleanup,
                                keepScrollPosition: true
                            },
                            {
                                isDefault: false,
                                route: config.hashes.clubadmin + '/:Id/:subview',
                                title: 'Sportswik',
                                callback: vm.clubadmin.activatesubview,
                                group: '.route-top',
                                cleanupCallback: vm.clubadmin.cleanup,
                                keepScrollPosition: true
                            },
                            {
                                isDefault: false,
                                route: config.hashes.clubadmin + '/:Id/:subview/:itemId',
                                title: 'Sportswik',
                                callback: vm.clubadmin.activatesubview,
                                group: '.route-top',
                                cleanupCallback: vm.clubadmin.cleanup,
                                keepScrollPosition: true
                            }

                        ]
                    },

                    // live detail routes
                    {
                        view: config.viewIds.livedetails,
                        routes: [
                            {
                                isDefault: false,
                                route: config.hashes.livedetails + "/:gameId" + '/:liveTimeItemID' + '/:liveTimelineItemTypeID',
                                title: 'Sportswik',
                                callback: vm.livedetails.activate,
                                group: '.route-top',
                                cleanupCallback: vm.livedetails.cleanup
                                //hasSmallScreenToolbar: true
                            }
                        ]
                    },

                    // teamfeed detail routes
                    {
                        view: config.viewIds.teamfeeddetails,
                        routes: [
                            {
                                isDefault: false,
                                route: config.hashes.teamfeeddetails + "/:teamId" + '/:TeamFeedItemID' + '/:TeamFeedItemTypeID',
                                title: 'Sportswik',
                                callback: vm.teamfeeddetails.activate,
                                group: '.route-top',
                                cleanupCallback: vm.teamfeeddetails.cleanup
                            },
                            {
                                isDefault: false,
                                route: config.hashes.teamfeeddetails + "/:teamId" + '/:TeamFeedItemID' + '/:TeamFeedItemTypeID' + '/:CommentClicked',
                                title: 'Sportswik',
                                callback: vm.teamfeeddetails.activate,
                                group: '.route-top',
                                cleanupCallback: vm.teamfeeddetails.cleanup
                            }

                        ]
                    },

                    // teamfeed detail routes
                    {
                        view: config.viewIds.teamfeeddetailsinfo,
                        routes: [
                            {
                                isDefault: false,
                                route: config.hashes.teamfeeddetailsinfo + "/:socialEntityID",
                                title: 'Sportswik',
                                callback: vm.teamfeeddetailsinfo.activate,
                                group: '.route-top',
                                cleanupCallback: vm.teamfeeddetailsinfo.cleanup
                            }
                        ]
                    },

                    // game report routes
                    {
                        view: config.viewIds.gamereport,
                        routes: [
                            {
                                isDefault: false,
                                route: config.hashes.gamereport + "/:gameId" + "/:typeId",
                                title: 'Sportswik',
                                callback: vm.gamereport.activate,
                                group: '.route-top'
                            },
                            {
                                isDefault: false,
                                route: config.hashes.gamereport + "/:gameId" + "/:typeId" + "/:Id",
                                title: 'Sportswik',
                                callback: vm.gamereport.activate,
                                group: '.route-top'
                            }
                        ]
                    },

                    {
                        view: config.viewIds.gamevideo,
                        routes: [
                            {
                                isDefault: false,
                                route: config.hashes.gamevideo + "/:gameId" + "/:typeId",
                                title: 'Sportswik',
                                callback: vm.gamevideo.activate,
                                group: '.route-top',
                                cleanupCallback: vm.gamevideo.cleanup
                            },
                            {
                                isDefault: false,
                                route: config.hashes.gamevideo + "/:gameId" + "/:typeId" + "/:Id",
                                title: 'Sportswik',
                                callback: vm.gamevideo.activate,
                                group: '.route-top',
                                cleanupCallback: vm.gamevideo.cleanup
                            }
                        ]
                    },

                    {
                        view: config.viewIds.infoitemdetails,
                        routes: [
                            {
                                isDefault: false,
                                route: config.hashes.infoitemdetails + "/:Id",
                                title: 'Sportswik',
                                callback: vm.infoitemdetails.activate,
                                group: '.route-top',
                                cleanupCallback: vm.infoitemdetails.cleanup
                            }                            
                        ]
                    },
                    
                    // game comment routes
                    {
                        view: config.viewIds.gamecomment,
                        routes: [
                            {
                                isDefault: false,
                                route: config.hashes.gamecomment + "/:gameId",
                                title: 'Sportswik',
                                callback: vm.gamecomment.activate,
                                group: '.route-top'
                            },
                            {
                                isDefault: false,
                                route: config.hashes.gamecomment + "/:gameId" + '/:Id',
                                title: 'Sportswik',
                                callback: vm.gamecomment.activate,
                                group: '.route-top'
                            }
                        ]
                    },
                    {
                        view: config.viewIds.gamehighlights,
                        routes: [
                            {
                                isDefault: false,
                                route: config.hashes.gamehighlights + "/:gameId",
                                title: 'Sportswik',
                                callback: vm.gamehighlights.activate,
                                group: '.route-top',
                                cleanupCallback: vm.gamehighlights.cleanup
                            },
                            {
                                isDefault: false,
                                route: config.hashes.gamehighlights + '/:gameId' + '/:Id',
                                title: 'Sportswik',
                                callback: vm.gamehighlights.activate,
                                group: '.route-top',
                                cleanupCallback: vm.gamehighlights.cleanup
                            }
                        ]
                    },

                    {
                        view: config.viewIds.gamemediaitem,
                        routes: [
                            {
                                isDefault: false,
                                route: config.hashes.gamemediaitem,
                                title: 'Sportswik',
                                callback: vm.gamemediaitem.activate,
                                group: '.route-top',
                                cleanupCallback: vm.gamemediaitem.cleanup
                            }
                        ]
                    },

                    {
                        view: config.viewIds.picturedetails,
                        routes: [
                            {
                                isDefault: false,
                                route: config.hashes.picturedetails + "/:Id",
                                title: 'Sportswik',
                                callback: vm.picturedetails.activate,
                                group: '.route-top'
                            }
                        ]
                    },

                    {
                        view: config.viewIds.videodetails,
                        routes: [
                            {
                                isDefault: false,
                                route: config.hashes.videodetails + "/:Id",
                                title: 'Sportswik',
                                callback: vm.videodetails.activate,
                                group: '.route-top'
                            }
                        ]
                    },

                    {
                        view: config.viewIds.discussionpostdetails,
                        routes: [
                            {
                                isDefault: false,
                                route: config.hashes.discussionpostdetails + "/:Id",
                                title: 'Sportswik',
                                callback: vm.discussionpostdetails.activate,
                                group: '.route-top'
                            }
                        ]
                    },

                    {
                        view: config.viewIds.calendar,
                        routes: [
                            {
                                isDefault: false,
                                route: config.hashes.calendar,
                                title: 'Sportswik',
                                callback: vm.calendar.activate,
                                group: '.route-top',
                                cleanupCallback: vm.calendar.cleanup
                            }
                        ]
                    },
                    {
                        view: config.viewIds.competitions,
                        routes: [
                            {
                                isDefault: false,
                                route: config.hashes.competitions,
                                title: 'Sportswik',
                                callback: vm.competitions.activate,
                                group: '.route-top',
                                cleanupCallback: vm.competitions.cleanup
                            },
                            {
                                isDefault: false,
                                route: config.hashes.competitions + '/:subview',
                                title: 'Sportswik',
                                callback: vm.competitions.activatesubview,
                                group: '.route-top',
                                cleanupCallback: vm.competitions.cleanup
                            }
                        ]
                    },

                    // widget routes
                    {
                        view: config.viewIds.widget,
                        routes: [
                            {
                                isDefault: false,
                                route: config.hashes.widget + "/:Id",
                                title: 'Sportswik',
                                callback: vm.widget.activate,
                                group: '.route-top',
                                cleanupCallback: vm.widget.cleanup
                            }
                        ]
                    },

                    // asset info routes
                    {
                        view: config.viewIds.assetinfo,
                        routes: [
                            {
                                // route for picture or video upload
                                isDefault: false,
                                route: config.hashes.assetinfo + '/:type' + '/:gameId',
                                title: 'Sportswik',
                                callback: vm.assetinfo.activate,
                                group: '.route-top'
                            },
                            {
                                // route for edit picture or video info
                                isDefault: false,
                                route: config.hashes.assetinfo + '/:gameId' + '/:liveTimeItemID' + '/:liveTimelineItemTypeID',
                                title: 'Sportswik',
                                callback: vm.assetinfo.activate,
                                group: '.route-top',
                                cleanupCallback: vm.assetinfo.cleanup
                            },
                            {
                                // route for edit picture or video info
                                isDefault: false,
                                route: config.hashes.assetinfo + "/:type" + '/:typeId' + '/:itemId' + '/:itemTypeId',
                                title: 'Sportswik',
                                callback: vm.assetinfo.activate,
                                group: '.route-top',
                                cleanupCallback: vm.assetinfo.cleanup
                            },


                        ]
                    },                                        
                    {
                        view: config.viewIds.team,
                        routes: [
                            {
                                isDefault: false,
                                route: config.hashes.team + '/:teamID',
                                title: 'Sportswik',
                                callback: vm.team.activate,
                                group: '.route-top',
                                cleanupCallback: vm.team.cleanup,
                                keepScrollPosition: true
                            },
                            {
                                isDefault: false,
                                route: config.hashes.team + '/:teamID/:subview',
                                title: 'Sportswik',
                                callback: vm.team.activatesubview,
                                group: '.route-top',
                                cleanupCallback: vm.team.cleanup,
                                keepScrollPosition: true
                            },
                        ]
                    },

                    {
                        view: config.viewIds.teaminvite,
                        routes: [
                            {
                                isDefault: false,
                                route: config.hashes.teaminvite + '/:teamID',
                                title: 'Sportswik',
                                callback: vm.teaminvite.activate,
                                group: '.route-top',
                                cleanupCallback: vm.teaminvite.cleanup,
                                keepScrollPosition: true
                            }
                        ]
                    },
                    {
                        view: config.viewIds.player,
                        routes: [
                            {
                                isDefault: false,
                                route: config.hashes.player + "/:Id",
                                title: 'Sportswik',
                                callback: vm.player.activate,
                                group: '.route-top',
                                cleanupCallback: vm.player.cleanup,
                                keepScrollPosition: true
                            },
                            {
                                isDefault: false,
                                route: config.hashes.player + "/:Id/:subview",
                                title: 'Sportswik',
                                callback: vm.player.activatesubview,
                                group: '.route-top',
                                cleanupCallback: vm.player.cleanup,
                                keepScrollPosition: true
                            }
                        ]
                    },
                    {
                        view: config.viewIds.teamplayer,
                        routes: [
                            {
                                isDefault: false,
                                route: config.hashes.teamplayer + "/:teamPlayerId/:gamePlayerId",
                                title: 'Sportswik',
                                callback: vm.teamplayer.activate,
                                group: '.route-top',
                                cleanupCallback: vm.teamplayer.cleanup,
                                keepScrollPosition: true
                            },
                            {
                                isDefault: false,
                                route: config.hashes.teamplayer + "/:teamPlayerId/:gamePlayerId/:subview",
                                title: 'Sportswik',
                                callback: vm.teamplayer.activatesubview,
                                group: '.route-top',
                                cleanupCallback: vm.teamplayer.cleanup,
                                keepScrollPosition: true
                            }
                        ]
                    },
                    {
                        view: config.viewIds.playerguardian,
                        routes: [
                            {
                                isDefault: false,
                                route: config.hashes.playerguardian + "/:playerGuardianId",
                                title: 'Sportswik',
                                callback: vm.playerguardian.activate,
                                group: '.route-top',
                                cleanupCallback: vm.playerguardian.cleanup
                            }
                        ]
                    },
                    {
                        view: config.viewIds.guardian,
                        routes: [
                            {
                                isDefault: false,
                                route: config.hashes.guardian,
                                title: 'Sportswik',
                                callback: vm.guardian.activate,
                                group: '.route-top',
                                cleanupCallback: vm.guardian.cleanup
                            },
                            {
                                isDefault: false,
                                route: config.hashes.guardian + "/:guardianId",
                                title: 'Sportswik',
                                callback: vm.guardian.activate,
                                group: '.route-top',
                                cleanupCallback: vm.guardian.cleanup
                            }
                        ]
                    },
                    {
                        view: config.viewIds.staff,
                        routes: [
                            {
                                isDefault: false,
                                route: config.hashes.staff + "/:staffId",
                                title: 'Sportswik',
                                callback: vm.staff.activate,
                                group: '.route-top',
                                cleanupCallback: vm.staff.cleanup
                            }
                        ]
                    },

                    {
                        view: config.viewIds.leaguesite,
                        routes: [
                            {
                                isDefault: false,
                                route: config.hashes.leaguesite + "/:Id",
                                title: 'Sportswik',
                                callback: vm.leaguesite.activate,
                                group: '.route-top',
                                cleanupCallback: vm.leaguesite.cleanup,
                                keepScrollPosition: true
                            },
                            {
                                isDefault: false,
                                route: config.hashes.leaguesite + '/:Id/:subview',
                                title: 'Sportswik',
                                callback: vm.leaguesite.activatesubview,
                                group: '.route-top',
                                cleanupCallback: vm.leaguesite.cleanup,
                                keepScrollPosition: true
                            },
                            {
                                isDefault: false,
                                route: config.hashes.leaguesite + '/:Id/:subview/:subId',
                                title: 'Sportswik',
                                callback: vm.leaguesite.activatesubview,
                                group: '.route-top',
                                cleanupCallback: vm.leaguesite.cleanup,
                                keepScrollPosition: true
                            }
                        ]
                    },

                    {
                        view: config.viewIds.leagueorganizersite,
                        routes: [
                            {
                                isDefault: false,
                                route: config.hashes.leagueorganizersite + "/:Id",
                                title: 'Sportswik',
                                callback: vm.leagueorganizersite.activate,
                                group: '.route-top',
                                cleanupCallback: vm.leagueorganizersite.cleanup,
                                keepScrollPosition: true
                            },
                            {
                                isDefault: false,
                                route: config.hashes.leagueorganizersite + '/:Id/:subview',
                                title: 'Sportswik',
                                callback: vm.leagueorganizersite.activatesubview,
                                group: '.route-top',
                                cleanupCallback: vm.leagueorganizersite.cleanup,
                                keepScrollPosition: true
                            }
                        ]
                    },

                    {
                        view: config.viewIds.highlights,
                        routes: [
                            {
                                isDefault: false,
                                route: config.hashes.highlights,
                                title: 'Sportswik',
                                callback: vm.highlights.activate,
                                group: '.route-top',
                                cleanupCallback: vm.highlights.cleanup,
                                keepScrollPosition: true
                            }
                        ]
                    },

                    {
                        view: config.viewIds.tips,
                        routes: [
                            {
                                isDefault: false,
                                route: config.hashes.tips,
                                title: 'Sportswik',
                                callback: vm.tips.activate,
                                group: '.route-top',
                                cleanupCallback: vm.tips.cleanup,
                                keepScrollPosition: true
                            }
                        ]
                    },


                    {
                        view: config.viewIds.events,
                        routes: [
                            {
                                isDefault: false,
                                route: config.hashes.events,
                                title: 'Sportswik',
                                callback: vm.events.activate,
                                group: '.route-top',
                                cleanupCallback: vm.events.cleanup,
                                keepScrollPosition: true
                            }
                        ]
                    },

                    {
                        view: config.viewIds.leagueorganizeradmin,
                        routes: [
                            {
                                isDefault: false,
                                route: config.hashes.leagueorganizeradmin + "/:Id",
                                title: 'Sportswik',
                                callback: vm.leagueorganizeradmin.activate,
                                group: '.route-top',
                                cleanupCallback: vm.leagueorganizeradmin.cleanup,
                                keepScrollPosition: true
                            },
                            {
                                isDefault: false,
                                route: config.hashes.leagueorganizeradmin + '/:Id/:subview',
                                title: 'Sportswik',
                                callback: vm.leagueorganizeradmin.activatesubview,
                                group: '.route-top',
                                cleanupCallback: vm.leagueorganizeradmin.cleanup,
                                keepScrollPosition: true
                            },
                            {
                                isDefault: false,
                                route: config.hashes.leagueorganizeradmin + '/:Id/:subview/:itemId',
                                title: 'Sportswik',
                                callback: vm.leagueorganizeradmin.activatesubview,
                                group: '.route-top',
                                cleanupCallback: vm.leagueorganizeradmin.cleanup,
                                keepScrollPosition: true
                            }
                        ]
                    },
                    {
                        view: config.viewIds.competition,
                        routes: [
                            {
                                isDefault: false,
                                route: config.hashes.competition + "/:Id",
                                title: 'Sportswik',
                                callback: vm.competition.activate,
                                group: '.route-top',
                                cleanupCallback: vm.competition.cleanup,
                                keepScrollPosition: true
                            },
                            {
                                isDefault: false,
                                route: config.hashes.competition + '/:Id/:subview',
                                title: 'Sportswik',
                                callback: vm.competition.activatesubview,
                                group: '.route-top',
                                cleanupCallback: vm.competition.cleanup,
                                keepScrollPosition: true
                            }
                        ]
                    },
                    {
                        view: config.viewIds.club,
                        routes: [
                            {
                                isDefault: false,
                                route: config.hashes.club + "/:Id",
                                title: 'Sportswik',
                                callback: vm.club.activate,
                                group: '.route-top',
                                cleanupCallback: vm.club.cleanup,
                                keepScrollPosition: true
                            },
                            {
                                isDefault: false,
                                route: config.hashes.club + '/:Id/:subview',
                                title: 'Sportswik',
                                callback: vm.club.activatesubview,
                                group: '.route-top',
                                cleanupCallback: vm.club.cleanup,
                                keepScrollPosition: true
                            }
                        ]
                    },

                    {
                        view: config.viewIds.teamconnect,
                        routes: [
                            {
                                isDefault: false,
                                route: config.hashes.teamconnect + "/:teamId",
                                title: 'Sportswik',
                                callback: vm.teamconnect.activate,
                                group: '.route-top',
                                cleanupCallback: vm.teamconnect.cleanup
                            },
                            {
                                isDefault: false,
                                route: config.hashes.teamconnect + "/:teamId/:subview",
                                title: 'Sportswik',
                                callback: vm.teamconnect.activatesubview,
                                group: '.route-top',
                                cleanupCallback: vm.teamconnect.cleanup
                            }
                        ]
                    },
                    {
                        view: config.viewIds.gameheadernavigation,
                        routes: [
                            {
                                isDefault: false,
                                route: config.hashes.gameheadernavigation + "/:gameId",
                                title: 'Sportswik',
                                callback: vm.gameheadernavigation.activate,
                                group: '.route-top',
                                cleanupCallback: vm.gameheadernavigation.cleanup
                            }
                        ]
                    },

                    {
                        view: config.viewIds.interviewadmin,
                        routes: [
                            {
                                isDefault: false,
                                route: config.hashes.interviewadmin,
                                title: 'Sportswik',
                                callback: vm.interviewadmin.activate,
                                group: '.route-top',
                                cleanupCallback: vm.interviewadmin.cleanup
                            },
                            {
                                isDefault: false,
                                route: config.hashes.interviewadmin + "/:subview",
                                title: 'Sportswik',
                                callback: vm.interviewadmin.activatesubview,
                                group: '.route-top',
                                cleanupCallback: vm.interviewadmin.cleanup
                            }
                        ]
                    },

                    {
                        view: config.viewIds.discover,
                        routes: [
                            {
                                isDefault: false,
                                route: config.hashes.discover,
                                title: 'Sportswik',
                                callback: vm.discover.activate,
                                group: '.route-top',
                                cleanupCallback: vm.discover.cleanup
                            }
                        ]
                    },

                    // Allow all /club/* routes (case insensitive)
                    {
                        view: '',
                        routes: [                            
                            {
                                route: /\/arena\/(.*)/i,
                                callback: function () {
                                }
                            },
                            {
                                route: /\/club\/(.*)/i,
                                callback: function () {
                                }
                            },
                            {
                                route: /\/player\/(.*)/i,
                                callback: function () {
                                }
                            },
                            {
                                route: /\/playerguardian\/(.*)/i,
                                callback: function () {
                                }
                            },
                            {
                                route: /\/teamstaff\/(.*)/i,
                                callback: function () {
                                }
                            },
                            {
                                route: /\/team\/(.*)/i,
                                callback: function () {
                                }
                            },
                            {
                                route: /\/game\/(.*)/i,
                                callback: function () {
                                }
                            },
                            {
                                route: /\/leagueteamgame\/(.*)/i,
                                callback: function () {
                                }
                            },
                            {
                                route: /\/leagueorganizer\/(.*)/i,
                                callback: function () {
                                }
                            },
                            {
                                route: /\/partner\/(.*)/i,
                                callback: function () {
                                }
                            },
                            {
                                route: /\/fairplaycardsetting\/(.*)/i,
                                callback: function () {
                                }
                            },
                            {
                                route: /\/widget\/(.*)/i,
                                callback: function () {
                                }
                            },
                            {
                                route: /\/memberverification\/(.*)/i,
                                callback: function () {
                                }
                            },
                            {
                                route: /\/stream\/(.*)/i,
                                callback: function () {
                                }
                            }
                        ]
                    },

                    // Invalid routes
                    {
                        view: '',
                        route: /.*/,
                        title: '',
                        callback: function () {
                            logger.error(config.toasts.invalidRoute);
                        }
                    }
                ];

                for (var i = 0; i < routeData.length; i++) {
                    router.register(routeData[i]);
                }

                // Crank up the router
                router.run();
            },

            registerAdmin = function () {
                var routeData = [
                    {
                        view: config.viewIds.adminreporteditems,
                        routes: [
                            {
                                isDefault: false,
                                route: config.hashes.adminreporteditems,
                                title: 'Sportswik',
                                callback: vm.adminreporteditems.activate,
                                group: '.route-top',
                                cleanupCallback: vm.adminreporteditems.cleanup
                            },
                            {
                                isDefault: false,
                                route: config.hashes.adminreporteditems + '/:subview',
                                title: 'Sportswik',
                                callback: vm.adminreporteditems.activatesubview,
                                group: '.route-top',
                                cleanupCallback: vm.adminreporteditems.cleanup
                            },
                            {
                                isDefault: false,
                                route: config.hashes.adminreporteditems + '/:subview/:subId',
                                title: 'Sportswik',
                                callback: vm.adminreporteditems.activatesubview,
                                group: '.route-top',
                                cleanupCallback: vm.adminreporteditems.cleanup
                            }
                        ]
                    },
                    {
                        view: config.viewIds.adminpayouts,
                        routes: [
                            {
                                isDefault: false,
                                route: config.hashes.adminpayouts,
                                title: 'Sportswik',
                                callback: vm.adminpayouts.activate,
                                group: '.route-top',
                                cleanupCallback: vm.adminpayouts.cleanup
                            },
                            {
                                isDefault: false,
                                route: config.hashes.adminpayouts + '/:subview',
                                title: 'Sportswik',
                                callback: vm.adminpayouts.activatesubview,
                                group: '.route-top',
                                cleanupCallback: vm.adminpayouts.cleanup
                            },
                            {
                                isDefault: false,
                                route: config.hashes.adminpayouts + '/:subview' + '/:Id',
                                title: 'Sportswik',
                                callback: vm.adminpayouts.activatesubview,
                                group: '.route-top',
                                cleanupCallback: vm.adminpayouts.cleanup
                            }
                        ]
                    },
                    {
                        view: config.viewIds.adminmember,
                        routes: [                            
                            {
                                isDefault: false,
                                route: config.hashes.adminmember + "/:Id",
                                title: 'Sportswik',
                                callback: vm.adminmember.activate,
                                group: '.route-top',
                                cleanupCallback: vm.adminmember.cleanup,
                                keepScrollPosition: true
                            },
                            {
                                isDefault: false,
                                route: config.hashes.adminmember + '/:Id/:subview',
                                title: 'Sportswik',
                                callback: vm.adminmember.activatesubview,
                                group: '.route-top',
                                cleanupCallback: vm.adminmember.cleanup,
                                keepScrollPosition: true
                            }
                        ]
                    },
                    {
                        view: config.viewIds.adminmembers,
                        routes: [
                            {
                                isDefault: true,
                                route: config.hashes.adminmembers,
                                title: 'Sportswik',
                                callback: vm.adminmembers.activate,
                                group: '.route-top',
                                cleanupCallback: vm.adminmembers.cleanup
                            }                            
                        ]
                    },
                    {
                        view: config.viewIds.systemadministrators,
                        routes: [
                            {
                                isDefault: false,
                                route: config.hashes.systemadministrators,
                                title: 'Sportswik',
                                callback: vm.systemadministrators.activate,
                                group: '.route-top',
                                cleanupCallback: vm.systemadministrators.cleanup
                            }
                        ]
                    },
                    {
                        view: '',
                        routes: [
                            {
                                route: /\/admin\/(.*)/i,
                                callback: function () {
                                }
                            }
                        ]
                    },
                    // Invalid routes
                    {
                        view: '',
                        route: /.*/,
                        title: '',
                        callback: function () {
                            logger.error(config.toasts.invalidRoute);
                        }
                    }
                ];

                for (var i = 0; i < routeData.length; i++) {
                    router.register(routeData[i]);
                }

                // Crank up the router
                router.run();
            };                       

        return {
            register: register,
            registerAdmin: registerAdmin
        };
    });;
define('route-mediator',
['messenger', 'config'],
    function (messenger, config) {
        var
            canleaveCallback,
            self = this,

            viewModelActivated = function (options) {
                canleaveCallback = options && options.canleaveCallback;
            },

            canLeave = function () {
                // Check the active view model to see if we can leave it
                var
                    val = canleaveCallback ? canleaveCallback() : true,
                    response = { val: val, message: config.toasts.changesPending };
                return response;
            },

            subscribeToViewModelActivations = function () {
                var context = self;
                messenger.subscribe({
                    topic: config.messages.viewModelActivated, 
                    context: context, 
                    callback: viewModelActivated
                    });
            },

            init = function () {
                subscribeToViewModelActivations();
            };

        init();

        return {
            canLeave: canLeave
        };
    });
;
define('router',
    ['jquery', 'underscore', 'sammy', 'presenter', 'config', 'route-mediator', 'store'],
    function ($, _, Sammy, presenter, config, routeMediator, store) {
        var
            currentHash = '',
            defaultRoute = '',
            isRedirecting = false,
            logger = config.logger,
            window = config.window,

            sammy = new Sammy.Application(function (s) {
                if (Sammy.Title) {
                    this.use(Sammy.Title);
                    this.setTitle(config.title);
                }

                // registers a custom form submission check that only runs the default checker if the form action starts with #                
                // see https://groups.google.com/d/msg/sammyjs/EYW-2Ygk3z8/TmGWGdBMuKkJ for more info
                this.defaultCheckFormSubmission = this._checkFormSubmission; 
                this._checkFormSubmission = function (form) { 
                    var $form, path, verb; 
                    $form = $(form); 
                    path = $form.attr('action') || '';
                    verb = this._getFormVerb($form); 
                    if (verb === 'get' && !(path.indexOf('#') === 0)) {
                        // return false for ajax forms
                        return false; 
                    } 
                    else { 
                        return this.defaultCheckFormSubmission(form); 
                    } 
                }; 

                this.disable_push_state = true;

            }),

            refreshView = function () {
                sammy.refresh();
            },

            navigateBack = function () {
                window.history.back();


                if (swconstants.isProductionServer === 'true') {
                    window.dataLayer.push({
                        'event': 'virtualPageview',
                        'pageUrl': 'used back button',
                        'pageTitle': 'back'
                    });
                }
            },

            navigateTo = function (url) {
                sammy.setLocation(url);

                if (swconstants.isProductionServer === 'true')
                {
                    var title = url;

                    // Parse title from url
                    if (url.indexOf('#/') > -1) {
                        title = url.substring(url.indexOf('#/') + 2);
                    }

                    window.dataLayer.push({
                        'event': 'virtualPageview',
                        'pageUrl': url,
                        'pageTitle': title
                    });
                }
            },
            
            getCurrentView = function () {
                return sammy.getLocation();
            },

            register = function (options) {
                var routerSelf = this;

                if (options.routes) {
                    // Register a list of routes
                    _.each(options.routes, function (route) {
                        registerRoute(routerSelf,
                        {
                            route: route.route,
                            title: route.title,
                            callback: route.callback,
                            cleanupCallback: route.cleanupCallback,
                            view: options.view,
                            group: route.group,
                            hasSmallScreenToolbar: route.hasSmallScreenToolbar,
                            keepScrollPosition: !!route.keepScrollPosition,
                            isDefault: !!route.isDefault
                        });
                    });
                    return;
                }

                // Register 1 route
                registerRoute(routerSelf, options);
            },

            registerBeforeLeaving = function () {
                sammy.before(/.*/, function () {
                    var
                        context = this,
                        response = routeMediator.canLeave();

                    if (!isRedirecting && !response.val) {
                        isRedirecting = true;
                        logger.warning(response.message);
                        // Keep hash url the same in address bar
                        context.app.setLocation(currentHash);
                    }
                    else {
                        isRedirecting = false;
                        currentHash = context.app.getLocation();
                    }
                    // Cancel the route if this returns false
                    return response.val;
                });
            },

            registerRoute = function (routerSelf, options) {
                if (!options.callback) {
                    throw Error('callback must be specified.');
                }

                if (options.isDefault) {
                    defaultRoute = options.route;
                    setupGet(routerSelf, options, '/');
                }

                setupGet(routerSelf, options);
            },
            
            setupGet = function (routerSelf, options, routeOverride) {
                var route = routeOverride || options.route;

                var scopeKeeper = function (fn, thisRouter) {
                    return function (context) {
                        return fn(thisRouter, context);
                    };
                };

                var sammyCb = function (router, context) { //context is 'this'
                    if (typeof router.nextCleanupCallback !== 'undefined') {
                        router.nextCleanupCallback();
                        router.nextCleanupCallback = undefined;
                    }
                    //store.save(config.stateKeys.lastView, context.path);
                    //options.callback(context.params); // Activate the viewmodel
                    $('.view').hide();
                    /*$('.view').css({
                        visibility: 'hidden',
                        opacity:0
                    });*/

                    presenter.transitionTo(
                        $(options.view),
                        options.route, //context.path, // We want to find the route we defined in the config
                        options.group,
                        options.title
                    );
                    options.callback(context.params); // Activate the viewmodel
                    router.nextCleanupCallback = options.cleanupCallback;

                    if (this.title) {
                        this.title(options.title);
                    }

                    if (options.keepScrollPosition !== true) {
                        window.scrollTo(0, 0);
                    } 
                    
                    $('.mailSuggestion').empty();

                };


                sammy.get(route, scopeKeeper(sammyCb, routerSelf));
            },
            
            getUsableRoute = function (value) {
                return value && value.indexOf('/#') !== -1 ? value : null;
            },

            run = function () {
                var url = store.fetch(config.stateKeys.lastView);

                // 1) if i browse to a location, use it
                // 2) otherwise use the url i grabbed from storage
                // 3) otherwise use the default route
                var addressBarUrl = sammy.getLocation();
                startupUrl = getUsableRoute(addressBarUrl) || getUsableRoute(url) || defaultRoute;
                
                sammy.run();
                registerBeforeLeaving();
                //navigateTo(startupUrl);
            };

        return {
            navigateBack: navigateBack,
            getCurrentView: getCurrentView,
            navigateTo: navigateTo,
            refreshView: refreshView,
            register: register,
            run: run
        };
    });;
define('store',
    ['jquery', 'amplify', 'config'],
    function ($, amplify, config) {
        var
            expires = { expires: config.storeExpirationMs },
            
            clear = function (key) {
                return amplify.store(key, null);
            },

            fetch = function (key) {
                return amplify.store(key);
            },
            
            save = function (key, value) {
                amplify.store(key, value, expires);
            };

        return {
            clear: clear,
            fetch: fetch,
            save: save
        };
    });;
define('vm',
[
    'viewmodels/vm.arena',
    'viewmodels/vm.assetinfo',
    'viewmodels/vm.blurbtest',
    'viewmodels/vm.districts',
    'viewmodels/vm.header',    
    'viewmodels/vm.gamereport',
    'viewmodels/vm.gamecomment',
    'viewmodels/vm.gamehighlights',
    'viewmodels/vm.gamemediaitem',
    'viewmodels/vm.livedetails',    
    'viewmodels/vm.magazine',
    'viewmodels/vm.magazinegameview',
    'viewmodels/vm.magazinegameviewdetails',
    'viewmodels/vm.member',
    'viewmodels/vm.myteams',
    'viewmodels/vm.memberrequest',
    'viewmodels/vm.membernotifications',
    'viewmodels/vm.shell',    
    'viewmodels/vm.sockethelper',
    'viewmodels/vm.eventreporting',
    'viewmodels/vm.targetfilter',        
    'viewmodels/vm.teamfeeddetails',
    'viewmodels/vm.teamfeeddetailsinfo',
    'viewmodels/vm.calendar',    
    'viewmodels/vm.game',
    'viewmodels/vm.memberdetails',
    'viewmodels/vm.team',
    'viewmodels/vm.teaminvite',    
    'viewmodels/vm.player',
    'viewmodels/vm.teamplayer',
    'viewmodels/vm.playerguardian',
    'viewmodels/vm.guardian',    
    'viewmodels/vm.staff',
    'viewmodels/vm.leaguesite',
    'viewmodels/vm.leagueorganizersite',
    'viewmodels/vm.leagueorganizeradmin',
    'viewmodels/vm.club',    
    'viewmodels/vm.gameheadernavigation',
    'viewmodels/vm.widget',
    'viewmodels/vm.teamconnect',    
    'viewmodels/vm.picturedetails',
    'viewmodels/vm.videodetails',
    'viewmodels/vm.discussionpostdetails',
    'viewmodels/vm.competitions',
    'viewmodels/vm.interviewadmin',
    'viewmodels/vm.discover',
    'viewmodels/vm.teamadmin',
    'viewmodels/vm.clubadmin',
    'viewmodels/vm.infoitem',
    'viewmodels/vm.audience',
    'viewmodels/vm.clubselect',
    'viewmodels/vm.imagecropper',
    'viewmodels/vm.reportitem',
    'viewmodels/vm.socialentityviews',
    'viewmodels/vm.socialentitylikes',
    'viewmodels/vm.socialentitycomments',
    'viewmodels/vm.livestream',
    'viewmodels/vm.livestreamsubscription',
    'viewmodels/vm.partneradmin',
    'viewmodels/vm.partnerfeature',
    'viewmodels/vm.stream',
    'viewmodels/vm.adminheader',
    'viewmodels/vm.adminreporteditems',
    'viewmodels/vm.adminpayouts',
    'viewmodels/vm.adminmember',
    'viewmodels/vm.adminmembers',
    'viewmodels/vm.systemadministrators',
    'viewmodels/vm.gamevideo',
    'viewmodels/vm.infoitemdetails',
    'viewmodels/vm.teamsubscription',
    'viewmodels/vm.gameteamrequest',
    'viewmodels/vm.lineup',
    'viewmodels/vm.gameteamroster',
    'viewmodels/vm.mygames',
    'viewmodels/vm.highlights',
    'viewmodels/vm.competition',
    'viewmodels/vm.tips',
    'viewmodels/vm.events'

],
    function (
        arena,
        assetinfo,
        blurbtest,
        districts,
        header,        
        gamereport,
        gamecomment,
        gamehighlights,
        gamemediaitem,
        livedetails,        
        magazine,
        magazinegameview,
        magazinegameviewdetails,
        member,
        myteams,
        memberrequest,
        membernotifications,
        shell,        
        sockethelper,
        eventreporting,
        targetfilter,        
        teamfeeddetails,
        teamfeeddetailsinfo,
        calendar,
        game,
        memberdetails,
        team,
        teaminvite,        
        player,
        teamplayer,
        playerguardian,
        guardian,        
        staff,
        leaguesite,
        leagueorganizersite,
        leagueorganizeradmin,
        club,        
        gameheadernavigation,
        widget,
        teamconnect,
        picturedetails,
        videodetails,
        discussionpostdetails,
        competitions,
        interviewadmin,
        discover,
        teamadmin,
        clubadmin,
        infoitem,
        audience,
        clubselect,
        imagecropper,
        reportitem,
        socialentityviews,
        socialentitylikes,
        socialentitycomments,
        livestream,
        livestreamsubscription,
        partneradmin,
        partnerfeature,
        stream,
        adminheader,
        adminreporteditems,
        adminpayouts,
        adminmember,
        adminmembers,
        systemadministrators,
        gamevideo,
        infoitemdetails,
        teamsubscription,
        gameteamrequest,
        lineup,
        gameteamroster,
        mygames,
        highlights,
        competition,
        tips,
        events
        ) {
        return {
            arena: arena,
            assetinfo: assetinfo,
            blurbtest: blurbtest,
            districts: districts,
            header: header,            
            gamereport: gamereport,
            gamecomment: gamecomment,
            gamehighlights: gamehighlights,
            gamemediaitem: gamemediaitem,
            livedetails: livedetails,
            magazine: magazine,
            magazinegameview: magazinegameview,
            magazinegameviewdetails: magazinegameviewdetails,
            member: member,
            myteams: myteams,
            memberrequest: memberrequest,
            membernotifications: membernotifications,
            shell: shell,
            sockethelper: sockethelper,
            eventreporting: eventreporting,
            targetfilter: targetfilter,                        
            teamfeeddetails: teamfeeddetails,
            teamfeeddetailsinfo: teamfeeddetailsinfo,
            calendar: calendar,
            game: game,
            memberdetails: memberdetails,
            team: team,
            teaminvite: teaminvite,            
            player: player,
            teamplayer: teamplayer,
            playerguardian: playerguardian,
            guardian: guardian,            
            staff: staff,
            leaguesite: leaguesite,
            leagueorganizersite: leagueorganizersite,
            leagueorganizeradmin: leagueorganizeradmin,
            club: club,            
            gameheadernavigation: gameheadernavigation,
            widget: widget,
            teamconnect: teamconnect,            
            picturedetails: picturedetails,
            videodetails: videodetails,
            discussionpostdetails: discussionpostdetails,
            competitions: competitions,
            interviewadmin: interviewadmin,
            discover: discover,
            teamadmin: teamadmin,
            clubadmin: clubadmin,
            infoitem: infoitem,
            imagecropper: imagecropper,
            reportitem: reportitem,
            audience: audience,
            clubselect: clubselect,
            socialentityviews: socialentityviews,
            socialentitylikes: socialentitylikes,
            socialentitycomments: socialentitycomments,
            livestream: livestream,
            livestreamsubscription: livestreamsubscription,
            partneradmin: partneradmin,
            partnerfeature: partnerfeature,
            stream: stream,
            adminheader: adminheader,
            adminreporteditems: adminreporteditems,
            adminpayouts: adminpayouts,
            adminmember: adminmember,
            adminmembers: adminmembers,
            systemadministrators: systemadministrators,
            gamevideo: gamevideo,
            infoitemdetails: infoitemdetails,
            teamsubscription: teamsubscription,
            gameteamrequest: gameteamrequest,
            lineup: lineup,
            gameteamroster: gameteamroster,
            mygames: mygames,
            highlights: highlights,
            competition: competition,
            tips: tips,
            events: events
    };
});;

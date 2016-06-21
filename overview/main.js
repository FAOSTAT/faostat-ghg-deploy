
var CDN = 'http://fenixrepo.fao.org/cdn/';
var projectRoot = "http://fenixrepo.fao.org/cdn/projects/ghg/1.0.0/overview/";


require.config({

    config: {
        text: {
            useXhr: function (url, protocol, hostname, port) {
                return true;
            }
        }
    },

    waitSeconds: 20,

    paths: {

        'domReady': CDN + '/js/requirejs/plugins/domready/2.0.1/domReady',
        'i18n':  CDN + '/js/requirejs/plugins/i18n/2.0.4/i18n',
        'text':  CDN + '/js/requirejs/plugins/text/2.0.12/text',

        'jquery':  CDN + 'js/jquery/1.10.2/jquery-1.10.2.min',
        'highcharts': CDN + 'js/highcharts/4.0.4/js/highcharts',
        'highcharts-exporting' : CDN + 'js/highcharts/4.0.4/js/modules/exporting',
        'handlebars': CDN + 'js/handlebars/2.0.0/handlebars',
        'chosen': CDN + 'js/chosen/1.2.0/chosen.jquery.min',
        'jshashtable': CDN + 'js/jshashtable/0.0.1/jshashtable',
        'bootstrap': CDN + 'js/bootstrap/3.2/js/bootstrap.min',
        'sweetAlert': CDN + 'js/sweet-alert/0.4.2/sweet-alert',

        'f3-ghg-chart': projectRoot + 'submodules/faostat-ui-ghg-overview/libs/f3-ghg-chart',
        'wide-table': projectRoot + 'submodules/faostat-ui-ghg-overview/libs/wide-table',

        'FAOSTAT_UI_GHG_OVERVIEW': projectRoot + 'submodules/faostat-ui-ghg-overview/src/js/ghg-overview',
        'faostat_ui_ghg_overview': projectRoot + 'submodules/faostat-ui-ghg-overview',

        FileSaver: CDN + '/js/FileSaver/1.1.2/FileSaver.min',
        Blob: CDN + '/js/blob/1.0/Blob'

    },

    shim: {

        'highcharts': ['jquery'],
        'highcharts-exporting': ['highcharts'],
        'f3-ghg-chart': ['highcharts'],
        'chosen': ['jquery'],
        'handlebars': ['jquery'],
        'FAOSTAT_UI_COMMONS': ['jquery'],
        'bootstrap': ['jquery'],
        "FileSaver": {
            deps: ["jquery", 'Blob']
        }

    }
});

var placeholder = "fs-module",
    locale = document.getElementById(placeholder).getAttribute('data-lang'); //en, fr, es

switch(locale) {
    case 'en': locale = 'E'; break;
    case 'fr': locale = 'F'; break;
    case 'es': locale = 'S'; break;
    default: locale = 'E';
}

require.config({'locale': locale});

/* Bootstrap the application. */
require([
    'FAOSTAT_UI_GHG_OVERVIEW',
    'domReady!'
], function (MODULE) {

    var m = new MODULE();
    m.init({
        lang: locale,
        placeholder: '#' + placeholder,
        datasource: 'FAOSTAT-GHG',
        url_wds: 'http://www.fao.org/fenixrepo/external/fenixapps2/wds_ghg/rest'
    });
});
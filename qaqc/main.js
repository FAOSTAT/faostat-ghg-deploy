
var CDN = 'http://fenixrepo.fao.org/cdn/';
var projectRoot = "http://fenixrepo.fao.org/cdn/projects/ghg/1.0.0/qaqc/";

require.config({

    waitSeconds: 20,

    config: {
        text: {
            useXhr: function (url, protocol, hostname, port) {
                return true;
            }
        }
    },

    paths: {

        'domReady': CDN + '/js/requirejs/plugins/domready/2.0.1/domReady',
        'i18n':  CDN + '/js/requirejs/plugins/i18n/2.0.4/i18n',
        'text':  CDN + '/js/requirejs/plugins/text/2.0.12/text',
        'jquery':  CDN + 'js/jquery/1.10.2/jquery-1.10.2.min',
        'highcharts': CDN + 'js/highcharts/4.0.4/js/highcharts',
        'highcharts-exporting': CDN + 'js/highcharts/4.0.4/js/modules/exporting',
        'handlebars': CDN + 'js/handlebars/2.0.0/handlebars',
        'chosen': CDN + 'js/chosen/1.2.0/chosen.jquery.min',
        'amplify': CDN + '/js/amplify/1.1.2/amplify.min',
        'underscore': CDN + "/js/underscore/1.7.0/underscore.min",
        'bootstrap': CDN + 'js/bootstrap/3.2/js/bootstrap.min',
        'sweetAlert': CDN + 'js/sweet-alert/0.4.2/sweet-alert',

        FAOSTAT_UI_COMMONS: projectRoot + 'submodules/faostat-ui-commons/js/faostat-ui-commons',
        faostat_ui_commons : projectRoot + 'submodules/faostat-ui-commons',
        FAOSTAT_UI_WIDE_TABLES: projectRoot + 'submodules/faostat-ui-wide-tables/js/faostat-ui-wide-tables',
        faostat_ui_wide_tables: projectRoot + 'submodules/faostat-ui-wide-tables',
        FAOSTAT_UI_ANALYSIS_GHG_QA_QC: projectRoot + 'submodules/faostat-ui-analysis-ghg-qaqc/js/faostat-ui-analysis-ghg-qaqc',
        faostat_ui_analysis_ghg_qa_qc: projectRoot + 'submodules/faostat-ui-analysis-ghg-qaqc',
        FAOSTAT_UI_ANALYSIS_GHG_QAQC_PDF: projectRoot + 'submodules/faostat-ui-analysis-ghg-qaqc/pdf/'

    },

    shim: {

        'highcharts': ['jquery'],
        'highcharts-exporting': ['highcharts'],
        'chosen': ['jquery'],
        'handlebars': ['jquery'],
        'amplify': ['jquery'],
        'bootstrap': ['jquery']

    }

});

var placeholder = "fs-module",
    locale = document.getElementById(placeholder).getAttribute('data-lang'); //en, fr, es

require.config({'locale': locale});

/* Bootstrap the application. */
require([
    'FAOSTAT_UI_ANALYSIS_GHG_QA_QC',
    'domReady!'
], function (MODULE) {

    var module = new MODULE();

    module.init({
        placeholder_id: placeholder,
        lang: locale,
        url_wds: 'http://www.fao.org/fenixrepo/external/fenixapps2/wds_ghg/rest',
        datasource: 'faostatdata'
    })

});
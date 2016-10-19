var Snowstorm;
(function (Snowstorm) {
    "use strict";
    var DataRepository = (function () {
        function DataRepository() {
        }
        return DataRepository;
    }());
    DataRepository.getPromoImages = function (works) {
        var paths = [];
        for (var i = 0; i < 3; i++) {
            var work = works[i];
            paths.push(work.imageUrl);
        }
        return paths;
    };
    DataRepository.getArinaShabanovaWorks = function () {
        return [
            { id: 1, title: "", imageUrl: "assets/images/portfolio/arina_shabanova/arina_shabanova_1.jpeg", description: "" },
            { id: 2, title: "", imageUrl: "assets/images/portfolio/arina_shabanova/arina_shabanova_2.jpeg", description: "" },
            { id: 3, title: "", imageUrl: "assets/images/portfolio/arina_shabanova/arina_shabanova_3.jpeg", description: "" },
            { id: 4, title: "", imageUrl: "assets/images/portfolio/arina_shabanova/arina_shabanova_4.jpeg", description: "" },
            { id: 5, title: "", imageUrl: "assets/images/portfolio/arina_shabanova/arina_shabanova_5.jpeg", description: "" },
            { id: 6, title: "", imageUrl: "assets/images/portfolio/arina_shabanova/arina_shabanova_6.jpeg", description: "" },
            { id: 7, title: "", imageUrl: "assets/images/portfolio/arina_shabanova/arina_shabanova_7.jpeg", description: "" },
            { id: 8, title: "", imageUrl: "assets/images/portfolio/arina_shabanova/arina_shabanova_8.jpeg", description: "" },
            { id: 9, title: "", imageUrl: "assets/images/portfolio/arina_shabanova/arina_shabanova_9.jpg", description: "" },
            { id: 10, title: "", imageUrl: "assets/images/portfolio/arina_shabanova/arina_shabanova_10.jpeg", description: "" },
            { id: 11, title: "", imageUrl: "assets/images/portfolio/arina_shabanova/arina_shabanova_11.jpeg", description: "" },
            { id: 12, title: "", imageUrl: "assets/images/portfolio/arina_shabanova/arina_shabanova_12.jpeg", description: "" },
            { id: 13, title: "", imageUrl: "assets/images/portfolio/arina_shabanova/arina_shabanova_13.jpeg", description: "" },
            { id: 14, title: "", imageUrl: "assets/images/portfolio/arina_shabanova/arina_shabanova_14.jpeg", description: "" },
            { id: 15, title: "", imageUrl: "assets/images/portfolio/arina_shabanova/arina_shabanova_15.jpeg", description: "" },
            { id: 16, title: "", imageUrl: "assets/images/portfolio/arina_shabanova/arina_shabanova_16.jpeg", description: "" },
            { id: 17, title: "", imageUrl: "assets/images/portfolio/arina_shabanova/arina_shabanova_17.jpeg", description: "" },
            { id: 18, title: "", imageUrl: "assets/images/portfolio/arina_shabanova/arina_shabanova_18.jpeg", description: "" },
            { id: 19, title: "", imageUrl: "assets/images/portfolio/arina_shabanova/arina_shabanova_19.jpeg", description: "" },
            { id: 20, title: "", imageUrl: "assets/images/portfolio/arina_shabanova/arina_shabanova_20.jpeg", description: "" },
            { id: 21, title: "", imageUrl: "assets/images/portfolio/arina_shabanova/arina_shabanova_21.jpeg", description: "" },
            { id: 22, title: "", imageUrl: "assets/images/portfolio/arina_shabanova/arina_shabanova_22.jpeg", description: "" },
            { id: 23, title: "", imageUrl: "assets/images/portfolio/arina_shabanova/arina_shabanova_23.jpeg", description: "" },
            { id: 24, title: "", imageUrl: "assets/images/portfolio/arina_shabanova/arina_shabanova_24.jpeg", description: "" },
            { id: 25, title: "", imageUrl: "assets/images/portfolio/arina_shabanova/arina_shabanova_25.jpeg", description: "" },
            { id: 26, title: "", imageUrl: "assets/images/portfolio/arina_shabanova/arina_shabanova_26.jpeg", description: "" },
            { id: 27, title: "", imageUrl: "assets/images/portfolio/arina_shabanova/arina_shabanova_27.jpeg", description: "" },
            { id: 28, title: "", imageUrl: "assets/images/portfolio/arina_shabanova/arina_shabanova_28.jpeg", description: "" },
            { id: 29, title: "", imageUrl: "assets/images/portfolio/arina_shabanova/arina_shabanova_29.jpeg", description: "" },
            { id: 30, title: "", imageUrl: "assets/images/portfolio/arina_shabanova/arina_shabanova_30.jpeg", description: "" },
            { id: 31, title: "", imageUrl: "assets/images/portfolio/arina_shabanova/arina_shabanova_31.jpeg", description: "" },
            { id: 32, title: "", imageUrl: "assets/images/portfolio/arina_shabanova/arina_shabanova_32.jpeg", description: "" },
            { id: 33, title: "", imageUrl: "assets/images/portfolio/arina_shabanova/arina_shabanova_33.jpeg", description: "" },
            { id: 34, title: "", imageUrl: "assets/images/portfolio/arina_shabanova/arina_shabanova_34.jpeg", description: "" },
            { id: 35, title: "", imageUrl: "assets/images/portfolio/arina_shabanova/arina_shabanova_35.gif", description: "" },
            { id: 36, title: "", imageUrl: "assets/images/portfolio/arina_shabanova/arina_shabanova_36.gif", description: "" },
            { id: 37, title: "", imageUrl: "assets/images/portfolio/arina_shabanova/arina_shabanova_37.gif", description: "" },
            { id: 38, title: "", imageUrl: "assets/images/portfolio/arina_shabanova/arina_shabanova_38.gif", description: "" },
            { id: 39, title: "", imageUrl: "assets/images/portfolio/arina_shabanova/arina_shabanova_39.gif", description: "" },
            { id: 40, title: "", imageUrl: "assets/images/portfolio/arina_shabanova/arina_shabanova_40.gif", description: "" },
            { id: 41, title: "", imageUrl: "assets/images/portfolio/arina_shabanova/arina_shabanova_41.gif", description: "" }
        ];
    };
    DataRepository.getEvgeniaBarinovaWorks = function () {
        return [
            { id: 1, title: "", imageUrl: "assets/images/portfolio/evgenia_barinova/evgenia_barinova_1.jpeg", description: "" },
            { id: 2, title: "", imageUrl: "assets/images/portfolio/evgenia_barinova/evgenia_barinova_2.jpeg", description: "" },
            { id: 3, title: "", imageUrl: "assets/images/portfolio/evgenia_barinova/evgenia_barinova_3.jpeg", description: "" },
            { id: 4, title: "", imageUrl: "assets/images/portfolio/evgenia_barinova/evgenia_barinova_4.jpeg", description: "" },
            { id: 5, title: "", imageUrl: "assets/images/portfolio/evgenia_barinova/evgenia_barinova_5.jpeg", description: "" },
            { id: 6, title: "", imageUrl: "assets/images/portfolio/evgenia_barinova/evgenia_barinova_6.jpeg", description: "" },
            { id: 7, title: "", imageUrl: "assets/images/portfolio/evgenia_barinova/evgenia_barinova_7.jpeg", description: "" },
            { id: 8, title: "", imageUrl: "assets/images/portfolio/evgenia_barinova/evgenia_barinova_8.jpeg", description: "" },
            { id: 9, title: "", imageUrl: "assets/images/portfolio/evgenia_barinova/evgenia_barinova_9.jpeg", description: "" },
            { id: 10, title: "", imageUrl: "assets/images/portfolio/evgenia_barinova/evgenia_barinova_10.jpeg", description: "" },
            { id: 11, title: "", imageUrl: "assets/images/portfolio/evgenia_barinova/evgenia_barinova_11.jpg", description: "" },
            { id: 12, title: "", imageUrl: "assets/images/portfolio/evgenia_barinova/evgenia_barinova_12.jpeg", description: "" },
            { id: 13, title: "", imageUrl: "assets/images/portfolio/evgenia_barinova/evgenia_barinova_13.jpeg", description: "" },
            { id: 14, title: "", imageUrl: "assets/images/portfolio/evgenia_barinova/evgenia_barinova_14.jpg", description: "" },
            { id: 15, title: "", imageUrl: "assets/images/portfolio/evgenia_barinova/evgenia_barinova_15.jpeg", description: "" },
            { id: 16, title: "", imageUrl: "assets/images/portfolio/evgenia_barinova/evgenia_barinova_16.jpeg", description: "" },
            { id: 17, title: "", imageUrl: "assets/images/portfolio/evgenia_barinova/evgenia_barinova_17.jpg", description: "" },
            { id: 18, title: "", imageUrl: "assets/images/portfolio/evgenia_barinova/evgenia_barinova_18.jpeg", description: "" },
            { id: 19, title: "", imageUrl: "assets/images/portfolio/evgenia_barinova/evgenia_barinova_19.jpg", description: "" },
            { id: 20, title: "", imageUrl: "assets/images/portfolio/evgenia_barinova/evgenia_barinova_20.jpeg", description: "" },
            { id: 21, title: "", imageUrl: "assets/images/portfolio/evgenia_barinova/evgenia_barinova_21.jpeg", description: "" },
            { id: 22, title: "", imageUrl: "assets/images/portfolio/evgenia_barinova/evgenia_barinova_22.jpeg", description: "" },
            { id: 23, title: "", imageUrl: "assets/images/portfolio/evgenia_barinova/evgenia_barinova_23.jpeg", description: "" },
            { id: 24, title: "", imageUrl: "assets/images/portfolio/evgenia_barinova/evgenia_barinova_24.jpg", description: "" },
            { id: 25, title: "", imageUrl: "assets/images/portfolio/evgenia_barinova/evgenia_barinova_25.jpeg", description: "" },
            { id: 26, title: "", imageUrl: "assets/images/portfolio/evgenia_barinova/evgenia_barinova_26.jpeg", description: "" },
            { id: 27, title: "", imageUrl: "assets/images/portfolio/evgenia_barinova/evgenia_barinova_27.jpeg", description: "" },
            { id: 28, title: "", imageUrl: "assets/images/portfolio/evgenia_barinova/evgenia_barinova_28.jpeg", description: "" },
            { id: 29, title: "", imageUrl: "assets/images/portfolio/evgenia_barinova/evgenia_barinova_29.jpeg", description: "" },
            { id: 30, title: "", imageUrl: "assets/images/portfolio/evgenia_barinova/evgenia_barinova_30.jpeg", description: "" },
            { id: 31, title: "", imageUrl: "assets/images/portfolio/evgenia_barinova/evgenia_barinova_31.jpeg", description: "" },
            { id: 32, title: "", imageUrl: "assets/images/portfolio/evgenia_barinova/evgenia_barinova_32.jpeg", description: "" },
            { id: 33, title: "", imageUrl: "assets/images/portfolio/evgenia_barinova/evgenia_barinova_33.jpeg", description: "" },
        ];
    };
    DataRepository.getKatyaDorokhinaWorks = function () {
        return [
            { id: 1, title: "", imageUrl: "assets/images/portfolio/katya_dorokhina/katya_dorokhina_1.jpeg", description: "" },
            { id: 2, title: "", imageUrl: "assets/images/portfolio/katya_dorokhina/katya_dorokhina_2.jpeg", description: "" },
            { id: 3, title: "", imageUrl: "assets/images/portfolio/katya_dorokhina/katya_dorokhina_3.jpeg", description: "" },
            { id: 4, title: "", imageUrl: "assets/images/portfolio/katya_dorokhina/katya_dorokhina_4.jpeg", description: "" },
            { id: 5, title: "", imageUrl: "assets/images/portfolio/katya_dorokhina/katya_dorokhina_5.jpeg", description: "" },
            { id: 6, title: "", imageUrl: "assets/images/portfolio/katya_dorokhina/katya_dorokhina_6.jpeg", description: "" },
            { id: 7, title: "", imageUrl: "assets/images/portfolio/katya_dorokhina/katya_dorokhina_7.jpeg", description: "" },
            { id: 8, title: "", imageUrl: "assets/images/portfolio/katya_dorokhina/katya_dorokhina_8.jpeg", description: "" },
            { id: 9, title: "", imageUrl: "assets/images/portfolio/katya_dorokhina/katya_dorokhina_9.jpeg", description: "" },
            { id: 10, title: "", imageUrl: "assets/images/portfolio/katya_dorokhina/katya_dorokhina_10.jpeg", description: "" },
            { id: 11, title: "", imageUrl: "assets/images/portfolio/katya_dorokhina/katya_dorokhina_11.jpeg", description: "" },
            { id: 12, title: "", imageUrl: "assets/images/portfolio/katya_dorokhina/katya_dorokhina_12.jpeg", description: "" },
            { id: 13, title: "", imageUrl: "assets/images/portfolio/katya_dorokhina/katya_dorokhina_13.jpeg", description: "" },
            { id: 14, title: "", imageUrl: "assets/images/portfolio/katya_dorokhina/katya_dorokhina_14.jpeg", description: "" },
            { id: 15, title: "", imageUrl: "assets/images/portfolio/katya_dorokhina/katya_dorokhina_15.jpeg", description: "" },
            { id: 16, title: "", imageUrl: "assets/images/portfolio/katya_dorokhina/katya_dorokhina_16.jpeg", description: "" },
            { id: 17, title: "", imageUrl: "assets/images/portfolio/katya_dorokhina/katya_dorokhina_17.jpeg", description: "" },
        ];
    };
    DataRepository.getKatyaVoroninaWorks = function () {
        return [
            { id: 1, title: "", imageUrl: "assets/images/portfolio/katya_voronina/katya_voronina_1.jpeg", description: "" },
            { id: 2, title: "", imageUrl: "assets/images/portfolio/katya_voronina/katya_voronina_2.jpeg", description: "" },
            { id: 3, title: "", imageUrl: "assets/images/portfolio/katya_voronina/katya_voronina_3.jpeg", description: "" },
            { id: 4, title: "", imageUrl: "assets/images/portfolio/katya_voronina/katya_voronina_4.jpeg", description: "" },
            { id: 5, title: "", imageUrl: "assets/images/portfolio/katya_voronina/katya_voronina_5.jpg", description: "" },
            { id: 6, title: "", imageUrl: "assets/images/portfolio/katya_voronina/katya_voronina_6.jpeg", description: "" },
            { id: 7, title: "", imageUrl: "assets/images/portfolio/katya_voronina/katya_voronina_7.jpeg", description: "" },
            { id: 8, title: "", imageUrl: "assets/images/portfolio/katya_voronina/katya_voronina_8.jpeg", description: "" },
            { id: 9, title: "", imageUrl: "assets/images/portfolio/katya_voronina/katya_voronina_9.jpeg", description: "" },
            { id: 10, title: "", imageUrl: "assets/images/portfolio/katya_voronina/katya_voronina_10.jpeg", description: "" },
            { id: 11, title: "", imageUrl: "assets/images/portfolio/katya_voronina/katya_voronina_11.jpeg", description: "" },
            { id: 12, title: "", imageUrl: "assets/images/portfolio/katya_voronina/katya_voronina_12.jpeg", description: "" },
            { id: 13, title: "", imageUrl: "assets/images/portfolio/katya_voronina/katya_voronina_13.jpeg", description: "" },
            { id: 14, title: "", imageUrl: "assets/images/portfolio/katya_voronina/katya_voronina_14.jpeg", description: "" },
            { id: 15, title: "", imageUrl: "assets/images/portfolio/katya_voronina/katya_voronina_15.jpeg", description: "" },
            { id: 16, title: "", imageUrl: "assets/images/portfolio/katya_voronina/katya_voronina_16.jpeg", description: "" },
            { id: 17, title: "", imageUrl: "assets/images/portfolio/katya_voronina/katya_voronina_17.jpeg", description: "" },
            { id: 18, title: "", imageUrl: "assets/images/portfolio/katya_voronina/katya_voronina_18.jpeg", description: "" },
            { id: 19, title: "", imageUrl: "assets/images/portfolio/katya_voronina/katya_voronina_19.jpeg", description: "" },
            { id: 20, title: "", imageUrl: "assets/images/portfolio/katya_voronina/katya_voronina_20.jpeg", description: "" },
            { id: 21, title: "", imageUrl: "assets/images/portfolio/katya_voronina/katya_voronina_21.jpeg", description: "" },
            { id: 22, title: "", imageUrl: "assets/images/portfolio/katya_voronina/katya_voronina_22.jpeg", description: "" },
            { id: 23, title: "", imageUrl: "assets/images/portfolio/katya_voronina/katya_voronina_23.jpeg", description: "" },
            { id: 24, title: "", imageUrl: "assets/images/portfolio/katya_voronina/katya_voronina_24.jpeg", description: "" },
        ];
    };
    DataRepository.getKhadiaUlumbekovaWorks = function () {
        return [
            { id: 1, title: "", imageUrl: "assets/images/portfolio/khadia_ulumbekova/khadia_ulumbekova_1.jpeg", description: "" },
            { id: 2, title: "", imageUrl: "assets/images/portfolio/khadia_ulumbekova/khadia_ulumbekova_2.jpg", description: "" },
            { id: 3, title: "", imageUrl: "assets/images/portfolio/khadia_ulumbekova/khadia_ulumbekova_3.jpeg", description: "" },
            { id: 4, title: "", imageUrl: "assets/images/portfolio/khadia_ulumbekova/khadia_ulumbekova_4.jpg", description: "" },
            { id: 5, title: "", imageUrl: "assets/images/portfolio/khadia_ulumbekova/khadia_ulumbekova_5.jpeg", description: "" },
            { id: 6, title: "", imageUrl: "assets/images/portfolio/khadia_ulumbekova/khadia_ulumbekova_6.jpeg", description: "" },
            { id: 7, title: "", imageUrl: "assets/images/portfolio/khadia_ulumbekova/khadia_ulumbekova_7.jpeg", description: "" },
            { id: 8, title: "", imageUrl: "assets/images/portfolio/khadia_ulumbekova/khadia_ulumbekova_8.jpeg", description: "" },
            { id: 9, title: "", imageUrl: "assets/images/portfolio/khadia_ulumbekova/khadia_ulumbekova_9.jpeg", description: "" },
            { id: 10, title: "", imageUrl: "assets/images/portfolio/khadia_ulumbekova/khadia_ulumbekova_10.jpeg", description: "" },
            { id: 11, title: "", imageUrl: "assets/images/portfolio/khadia_ulumbekova/khadia_ulumbekova_11.jpeg", description: "" },
            { id: 12, title: "", imageUrl: "assets/images/portfolio/khadia_ulumbekova/khadia_ulumbekova_12.jpeg", description: "" },
            { id: 13, title: "", imageUrl: "assets/images/portfolio/khadia_ulumbekova/khadia_ulumbekova_13.jpg", description: "" },
            { id: 14, title: "", imageUrl: "assets/images/portfolio/khadia_ulumbekova/khadia_ulumbekova_14.jpeg", description: "" },
            { id: 15, title: "", imageUrl: "assets/images/portfolio/khadia_ulumbekova/khadia_ulumbekova_15.jpeg", description: "" },
            { id: 16, title: "", imageUrl: "assets/images/portfolio/khadia_ulumbekova/khadia_ulumbekova_16.jpeg", description: "" },
            { id: 17, title: "", imageUrl: "assets/images/portfolio/khadia_ulumbekova/khadia_ulumbekova_17.jpeg", description: "" },
            { id: 18, title: "", imageUrl: "assets/images/portfolio/khadia_ulumbekova/khadia_ulumbekova_18.gif", description: "" },
            { id: 19, title: "", imageUrl: "assets/images/portfolio/khadia_ulumbekova/khadia_ulumbekova_19.gif", description: "" },
        ];
    };
    DataRepository.getLeshaSuhovWorks = function () {
        return [
            { id: 1, title: "", imageUrl: "assets/images/portfolio/lesha_suhov/lesha_suhov_1.jpeg", description: "" },
            { id: 2, title: "", imageUrl: "assets/images/portfolio/lesha_suhov/lesha_suhov_2.jpeg", description: "" },
            { id: 3, title: "", imageUrl: "assets/images/portfolio/lesha_suhov/lesha_suhov_3.jpeg", description: "" },
            { id: 4, title: "", imageUrl: "assets/images/portfolio/lesha_suhov/lesha_suhov_4.jpeg", description: "" },
            { id: 5, title: "", imageUrl: "assets/images/portfolio/lesha_suhov/lesha_suhov_5.jpeg", description: "" },
            { id: 6, title: "", imageUrl: "assets/images/portfolio/lesha_suhov/lesha_suhov_6.jpeg", description: "" },
            { id: 7, title: "", imageUrl: "assets/images/portfolio/lesha_suhov/lesha_suhov_7.jpeg", description: "" },
            { id: 8, title: "", imageUrl: "assets/images/portfolio/lesha_suhov/lesha_suhov_8.jpeg", description: "" },
            { id: 9, title: "", imageUrl: "assets/images/portfolio/lesha_suhov/lesha_suhov_9.jpeg", description: "" },
            { id: 10, title: "", imageUrl: "assets/images/portfolio/lesha_suhov/lesha_suhov_10.jpeg", description: "" },
            { id: 11, title: "", imageUrl: "assets/images/portfolio/lesha_suhov/lesha_suhov_11.jpeg", description: "" },
            { id: 12, title: "", imageUrl: "assets/images/portfolio/lesha_suhov/lesha_suhov_12.jpeg", description: "" },
            { id: 13, title: "", imageUrl: "assets/images/portfolio/lesha_suhov/lesha_suhov_13.jpeg", description: "" },
            { id: 14, title: "", imageUrl: "assets/images/portfolio/lesha_suhov/lesha_suhov_14.jpeg", description: "" },
            { id: 15, title: "", imageUrl: "assets/images/portfolio/lesha_suhov/lesha_suhov_15.jpeg", description: "" },
            { id: 16, title: "", imageUrl: "assets/images/portfolio/lesha_suhov/lesha_suhov_16.jpeg", description: "" },
            { id: 17, title: "", imageUrl: "assets/images/portfolio/lesha_suhov/lesha_suhov_17.jpeg", description: "" },
        ];
    };
    DataRepository.getLuybaBerezinaWorks = function () {
        return [
            { id: 1, title: "", imageUrl: "assets/images/portfolio/luyba_berezina/luyba_berezina_1.jpeg", description: "" },
            { id: 2, title: "", imageUrl: "assets/images/portfolio/luyba_berezina/luyba_berezina_2.jpeg", description: "" },
            { id: 3, title: "", imageUrl: "assets/images/portfolio/luyba_berezina/luyba_berezina_3.jpeg", description: "" },
            { id: 4, title: "", imageUrl: "assets/images/portfolio/luyba_berezina/luyba_berezina_4.jpeg", description: "" },
            { id: 5, title: "", imageUrl: "assets/images/portfolio/luyba_berezina/luyba_berezina_5.jpeg", description: "" },
            { id: 6, title: "", imageUrl: "assets/images/portfolio/luyba_berezina/luyba_berezina_6.jpg", description: "" },
            { id: 7, title: "", imageUrl: "assets/images/portfolio/luyba_berezina/luyba_berezina_7.jpeg", description: "" },
            { id: 8, title: "", imageUrl: "assets/images/portfolio/luyba_berezina/luyba_berezina_8.jpeg", description: "" },
            { id: 9, title: "", imageUrl: "assets/images/portfolio/luyba_berezina/luyba_berezina_9.jpeg", description: "" },
            { id: 10, title: "", imageUrl: "assets/images/portfolio/luyba_berezina/luyba_berezina_10.jpeg", description: "" },
            { id: 11, title: "", imageUrl: "assets/images/portfolio/luyba_berezina/luyba_berezina_11.jpeg", description: "" },
            { id: 12, title: "", imageUrl: "assets/images/portfolio/luyba_berezina/luyba_berezina_12.jpeg", description: "" },
            { id: 13, title: "", imageUrl: "assets/images/portfolio/luyba_berezina/luyba_berezina_13.jpeg", description: "" },
            { id: 14, title: "", imageUrl: "assets/images/portfolio/luyba_berezina/luyba_berezina_14.jpeg", description: "" },
            { id: 15, title: "", imageUrl: "assets/images/portfolio/luyba_berezina/luyba_berezina_15.jpeg", description: "" },
            { id: 16, title: "", imageUrl: "assets/images/portfolio/luyba_berezina/luyba_berezina_16.jpeg", description: "" },
            { id: 17, title: "", imageUrl: "assets/images/portfolio/luyba_berezina/luyba_berezina_17.jpeg", description: "" },
            { id: 18, title: "", imageUrl: "assets/images/portfolio/luyba_berezina/luyba_berezina_18.jpeg", description: "" },
            { id: 19, title: "", imageUrl: "assets/images/portfolio/luyba_berezina/luyba_berezina_19.jpeg", description: "" },
            { id: 20, title: "", imageUrl: "assets/images/portfolio/luyba_berezina/luyba_berezina_20.jpeg", description: "" },
        ];
    };
    DataRepository.getNikitaKibirevWorks = function () {
        return [
            { id: 1, title: "", imageUrl: "assets/images/portfolio/nikita_kibirev/nikita_kibirev_1.jpeg", description: "" },
            { id: 2, title: "", imageUrl: "assets/images/portfolio/nikita_kibirev/nikita_kibirev_2.jpeg", description: "" },
            { id: 3, title: "", imageUrl: "assets/images/portfolio/nikita_kibirev/nikita_kibirev_3.jpeg", description: "" },
            { id: 4, title: "", imageUrl: "assets/images/portfolio/nikita_kibirev/nikita_kibirev_4.jpg", description: "" },
            { id: 5, title: "", imageUrl: "assets/images/portfolio/nikita_kibirev/nikita_kibirev_5.jpeg", description: "" },
            { id: 6, title: "", imageUrl: "assets/images/portfolio/nikita_kibirev/nikita_kibirev_6.jpeg", description: "" },
            { id: 7, title: "", imageUrl: "assets/images/portfolio/nikita_kibirev/nikita_kibirev_7.jpeg", description: "" },
            { id: 8, title: "", imageUrl: "assets/images/portfolio/nikita_kibirev/nikita_kibirev_8.jpeg", description: "" },
            { id: 9, title: "", imageUrl: "assets/images/portfolio/nikita_kibirev/nikita_kibirev_9.jpeg", description: "" },
            { id: 10, title: "", imageUrl: "assets/images/portfolio/nikita_kibirev/nikita_kibirev_10.jpeg", description: "" },
            { id: 11, title: "", imageUrl: "assets/images/portfolio/nikita_kibirev/nikita_kibirev_11.jpeg", description: "" },
            { id: 12, title: "", imageUrl: "assets/images/portfolio/nikita_kibirev/nikita_kibirev_12.jpeg", description: "" },
            { id: 13, title: "", imageUrl: "assets/images/portfolio/nikita_kibirev/nikita_kibirev_13.jpeg", description: "" },
            { id: 14, title: "", imageUrl: "assets/images/portfolio/nikita_kibirev/nikita_kibirev_14.jpeg", description: "" },
            { id: 15, title: "", imageUrl: "assets/images/portfolio/nikita_kibirev/nikita_kibirev_15.jpeg", description: "" },
            { id: 16, title: "", imageUrl: "assets/images/portfolio/nikita_kibirev/nikita_kibirev_16.jpeg", description: "" },
            { id: 17, title: "", imageUrl: "assets/images/portfolio/nikita_kibirev/nikita_kibirev_17.jpeg", description: "" },
            { id: 18, title: "", imageUrl: "assets/images/portfolio/nikita_kibirev/nikita_kibirev_18.jpeg", description: "" },
            { id: 19, title: "", imageUrl: "assets/images/portfolio/nikita_kibirev/nikita_kibirev_19.jpeg", description: "" },
            { id: 20, title: "", imageUrl: "assets/images/portfolio/nikita_kibirev/nikita_kibirev_20.jpeg", description: "" },
            { id: 21, title: "", imageUrl: "assets/images/portfolio/nikita_kibirev/nikita_kibirev_21.jpeg", description: "" },
            { id: 22, title: "", imageUrl: "assets/images/portfolio/nikita_kibirev/nikita_kibirev_22.jpeg", description: "" },
        ];
    };
    DataRepository.getOlgaChikinaWorks = function () {
        return [
            { id: 1, title: "", imageUrl: "assets/images/portfolio/olga_chikina/olga_chikina_1.jpeg", description: "" },
            { id: 2, title: "", imageUrl: "assets/images/portfolio/olga_chikina/olga_chikina_2.jpeg", description: "" },
            { id: 3, title: "", imageUrl: "assets/images/portfolio/olga_chikina/olga_chikina_3.jpeg", description: "" },
            { id: 4, title: "", imageUrl: "assets/images/portfolio/olga_chikina/olga_chikina_4.jpeg", description: "" },
            { id: 5, title: "", imageUrl: "assets/images/portfolio/olga_chikina/olga_chikina_5.jpeg", description: "" },
            { id: 6, title: "", imageUrl: "assets/images/portfolio/olga_chikina/olga_chikina_6.jpeg", description: "" },
            { id: 7, title: "", imageUrl: "assets/images/portfolio/olga_chikina/olga_chikina_7.jpeg", description: "" },
            { id: 8, title: "", imageUrl: "assets/images/portfolio/olga_chikina/olga_chikina_8.jpeg", description: "" },
            { id: 9, title: "", imageUrl: "assets/images/portfolio/olga_chikina/olga_chikina_9.jpeg", description: "" },
            { id: 10, title: "", imageUrl: "assets/images/portfolio/olga_chikina/olga_chikina_10.jpeg", description: "" },
            { id: 11, title: "", imageUrl: "assets/images/portfolio/olga_chikina/olga_chikina_11.jpeg", description: "" },
            { id: 12, title: "", imageUrl: "assets/images/portfolio/olga_chikina/olga_chikina_12.jpeg", description: "" },
        ];
    };
    DataRepository.getSashaKiselevaWorks = function () {
        return [
            { id: 1, title: "", imageUrl: "assets/images/portfolio/sasha_kiseleva/sasha_kiseleva_1.jpeg", description: "" },
            { id: 2, title: "", imageUrl: "assets/images/portfolio/sasha_kiseleva/sasha_kiseleva_2.jpeg", description: "" },
            { id: 3, title: "", imageUrl: "assets/images/portfolio/sasha_kiseleva/sasha_kiseleva_3.jpeg", description: "" },
            { id: 4, title: "", imageUrl: "assets/images/portfolio/sasha_kiseleva/sasha_kiseleva_4.jpeg", description: "" },
            { id: 5, title: "", imageUrl: "assets/images/portfolio/sasha_kiseleva/sasha_kiseleva_5.jpeg", description: "" },
            { id: 6, title: "", imageUrl: "assets/images/portfolio/sasha_kiseleva/sasha_kiseleva_6.jpeg", description: "" },
            { id: 7, title: "", imageUrl: "assets/images/portfolio/sasha_kiseleva/sasha_kiseleva_7.jpeg", description: "" },
            { id: 8, title: "", imageUrl: "assets/images/portfolio/sasha_kiseleva/sasha_kiseleva_8.jpeg", description: "" },
            { id: 9, title: "", imageUrl: "assets/images/portfolio/sasha_kiseleva/sasha_kiseleva_9.jpeg", description: "" },
            { id: 10, title: "", imageUrl: "assets/images/portfolio/sasha_kiseleva/sasha_kiseleva_10.jpeg", description: "" },
            { id: 11, title: "", imageUrl: "assets/images/portfolio/sasha_kiseleva/sasha_kiseleva_11.jpeg", description: "" },
            { id: 12, title: "", imageUrl: "assets/images/portfolio/sasha_kiseleva/sasha_kiseleva_12.jpeg", description: "" },
        ];
    };
    DataRepository.getSergeyGudkovWorks = function () {
        return [
            { id: 1, title: "", imageUrl: "assets/images/portfolio/sergey_gudkov/sergey_gudkov_1.jpeg", description: "" },
            { id: 2, title: "", imageUrl: "assets/images/portfolio/sergey_gudkov/sergey_gudkov_2.jpeg", description: "" },
            { id: 3, title: "", imageUrl: "assets/images/portfolio/sergey_gudkov/sergey_gudkov_3.jpeg", description: "" },
            { id: 4, title: "", imageUrl: "assets/images/portfolio/sergey_gudkov/sergey_gudkov_4.jpeg", description: "" },
            { id: 5, title: "", imageUrl: "assets/images/portfolio/sergey_gudkov/sergey_gudkov_5.jpeg", description: "" },
            { id: 6, title: "", imageUrl: "assets/images/portfolio/sergey_gudkov/sergey_gudkov_6.jpeg", description: "" },
            { id: 7, title: "", imageUrl: "assets/images/portfolio/sergey_gudkov/sergey_gudkov_7.jpeg", description: "" },
            { id: 8, title: "", imageUrl: "assets/images/portfolio/sergey_gudkov/sergey_gudkov_8.jpeg", description: "" },
            { id: 9, title: "", imageUrl: "assets/images/portfolio/sergey_gudkov/sergey_gudkov_9.jpeg", description: "" },
            { id: 10, title: "", imageUrl: "assets/images/portfolio/sergey_gudkov/sergey_gudkov_10.jpeg", description: "" },
            { id: 11, title: "", imageUrl: "assets/images/portfolio/sergey_gudkov/sergey_gudkov_11.jpeg", description: "" },
        ];
    };
    DataRepository.getTimurZimaWorks = function () {
        return [
            { id: 1, title: "", imageUrl: "assets/images/portfolio/timur_zima/timur_zima_1.jpeg", description: "" },
            { id: 2, title: "", imageUrl: "assets/images/portfolio/timur_zima/timur_zima_2.jpeg", description: "" },
            { id: 3, title: "", imageUrl: "assets/images/portfolio/timur_zima/timur_zima_3.jpeg", description: "" },
            { id: 4, title: "", imageUrl: "assets/images/portfolio/timur_zima/timur_zima_4.jpeg", description: "" },
            { id: 5, title: "", imageUrl: "assets/images/portfolio/timur_zima/timur_zima_5.jpeg", description: "" },
            { id: 6, title: "", imageUrl: "assets/images/portfolio/timur_zima/timur_zima_6.jpeg", description: "" },
            { id: 7, title: "", imageUrl: "assets/images/portfolio/timur_zima/timur_zima_7.jpeg", description: "" },
            { id: 8, title: "", imageUrl: "assets/images/portfolio/timur_zima/timur_zima_8.jpeg", description: "" },
            { id: 9, title: "", imageUrl: "assets/images/portfolio/timur_zima/timur_zima_9.jpeg", description: "" },
            { id: 10, title: "", imageUrl: "assets/images/portfolio/timur_zima/timur_zima_10.jpeg", description: "" },
            { id: 11, title: "", imageUrl: "assets/images/portfolio/timur_zima/timur_zima_11.jpeg", description: "" },
            { id: 12, title: "", imageUrl: "assets/images/portfolio/timur_zima/timur_zima_12.jpeg", description: "" },
            { id: 13, title: "", imageUrl: "assets/images/portfolio/timur_zima/timur_zima_13.jpeg", description: "" },
            { id: 14, title: "", imageUrl: "assets/images/portfolio/timur_zima/timur_zima_14.jpeg", description: "" },
            { id: 15, title: "", imageUrl: "assets/images/portfolio/timur_zima/timur_zima_15.jpeg", description: "" },
            { id: 16, title: "", imageUrl: "assets/images/portfolio/timur_zima/timur_zima_16.jpeg", description: "" },
        ];
    };
    DataRepository.authors = [
        { id: 1, name: { first: "Евгения", last: "Баринова" }, mascotUrl: "assets/images/portfolio/balet.png", about: "Евгения Баринова — высококвалифицированный специалист широкого профиля. Занимается концептуальным искусством с дошкольного возраста. Вежлива, внимательна к деталям, соблюдает сроки.", promoImages: DataRepository.getPromoImages(DataRepository.getEvgeniaBarinovaWorks()), works: DataRepository.getEvgeniaBarinovaWorks() },
        { id: 2, name: { first: "Хадия", last: "Улумбекова" }, mascotUrl: "assets/images/portfolio/pigeon.png", about: "\"Быстро и качественно? Да, такое бывает! Не получается медленно рисовать)\"", promoImages: DataRepository.getPromoImages(DataRepository.getKhadiaUlumbekovaWorks()), works: DataRepository.getKhadiaUlumbekovaWorks() },
        { id: 3, name: { first: "Любовь", last: "Березина" }, mascotUrl: "assets/images/portfolio/bird.png", about: "Иногда меня спрашивают: \"Вы иллюстратор? А портреты рисуете?\" Я отвечаю: \"Почему бы и нет, но боюсь вы не захотите вешать это на стенку\".", promoImages: DataRepository.getPromoImages(DataRepository.getLuybaBerezinaWorks()), works: DataRepository.getLuybaBerezinaWorks() },
        { id: 4, name: { first: "Арина", last: "Шабанова" }, mascotUrl: "assets/images/portfolio/heart.png", about: "", promoImages: DataRepository.getPromoImages(DataRepository.getArinaShabanovaWorks()), works: DataRepository.getArinaShabanovaWorks() },
        { id: 5, name: { first: "Тимур", last: "Зима" }, mascotUrl: "assets/images/portfolio/ball.png", about: "\"Графический дизайнер, иллюстратор и большой любитель ретроконсолей. В иллюстрации я стремлюсь к лаконичности и не забываю про детали. Черпаю вдохновение из разных источников, люблю простоту форм не забывая про детали.\"", promoImages: DataRepository.getPromoImages(DataRepository.getTimurZimaWorks()), works: DataRepository.getTimurZimaWorks() },
        { id: 6, name: { first: "Алексей", last: "Сухов" }, mascotUrl: "assets/images/portfolio/rat.png", about: "Лучший парень в однокомнатной квартире.", promoImages: DataRepository.getPromoImages(DataRepository.getLeshaSuhovWorks()), works: DataRepository.getLeshaSuhovWorks() },
        { id: 7, name: { first: "Александра", last: "Киселёва" }, mascotUrl: "assets/images/portfolio/house.png", about: "", promoImages: DataRepository.getPromoImages(DataRepository.getSashaKiselevaWorks()), works: DataRepository.getSashaKiselevaWorks() },
        { id: 8, name: { first: "Ольга", last: "Чикина" }, mascotUrl: "assets/images/portfolio/horse.png", about: "Элитный маляр", promoImages: DataRepository.getPromoImages(DataRepository.getOlgaChikinaWorks()), works: DataRepository.getOlgaChikinaWorks() },
        { id: 9, name: { first: "Екатерина", last: "Дорохина" }, mascotUrl: "assets/images/portfolio/pizza.png", about: "Иллюстратор из Москвы, основное направление – создание персонажей и историй. Также занимается анимацией и керамикой. В иллюстрации ценит юмор и наличие деталей.", promoImages: DataRepository.getPromoImages(DataRepository.getKatyaDorokhinaWorks()), works: DataRepository.getKatyaDorokhinaWorks() },
        { id: 10, name: { first: "Екатерина", last: "Воронина" }, mascotUrl: "assets/images/portfolio/fox.png", about: "\"В этом мире возможно все! Больше интенции, меньше инерции)\"", promoImages: DataRepository.getPromoImages(DataRepository.getKatyaVoroninaWorks()), works: DataRepository.getKatyaVoroninaWorks() },
        { id: 11, name: { first: "Никита", last: "Кибирев" }, mascotUrl: "assets/images/portfolio/nik.png", about: "Я опытный иллюстратор и графический дизайнер, так же работаю в области off-the wall concept work, поскольку участвую в разработке корпоративного бренда широкого формата и также работаю над оформлением объявлений на Facebook для мамы.", promoImages: DataRepository.getPromoImages(DataRepository.getNikitaKibirevWorks()), works: DataRepository.getNikitaKibirevWorks() },
        { id: 12, name: { first: "Сергей", last: "Гудков" }, mascotUrl: "assets/images/portfolio/gudkov.png", about: "Иллюстратор, дизайнер. \"Люблю комиксы, мультфильмы и детские иллюстрации.\"", promoImages: DataRepository.getPromoImages(DataRepository.getSergeyGudkovWorks()), works: DataRepository.getSergeyGudkovWorks() },
    ];
    Snowstorm.DataRepository = DataRepository;
})(Snowstorm || (Snowstorm = {}));

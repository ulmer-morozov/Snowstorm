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
            { id: 5, title: "", imageUrl: "assets/images/portfolio/evgenia_barinova/evgenia_barinova_5.jpg", description: "" },
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
            { id: 16, title: "", imageUrl: "assets/images/portfolio/katya_dorokhina/katya_dorokhina_16.jpeg", description: "" }
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
    DataRepository.getNiluferZakirovaWorks = function () {
        return [
            { id: 1, title: "", imageUrl: "assets/images/portfolio/nilufer_zakirova/nilufer_zakirova_1.gif", description: "" },
            { id: 2, title: "", imageUrl: "assets/images/portfolio/nilufer_zakirova/nilufer_zakirova_2.jpg", description: "" },
            { id: 3, title: "", imageUrl: "assets/images/portfolio/nilufer_zakirova/nilufer_zakirova_3.gif", description: "" },
            { id: 4, title: "", imageUrl: "assets/images/portfolio/nilufer_zakirova/nilufer_zakirova_4.gif", description: "" },
            { id: 5, title: "", imageUrl: "assets/images/portfolio/nilufer_zakirova/nilufer_zakirova_5.gif", description: "" },
            { id: 6, title: "", imageUrl: "assets/images/portfolio/nilufer_zakirova/nilufer_zakirova_6.gif", description: "" },
            { id: 7, title: "", imageUrl: "assets/images/portfolio/nilufer_zakirova/nilufer_zakirova_7.jpg", description: "" },
            { id: 8, title: "", imageUrl: "assets/images/portfolio/nilufer_zakirova/nilufer_zakirova_8.gif", description: "" },
            { id: 9, title: "", imageUrl: "assets/images/portfolio/nilufer_zakirova/nilufer_zakirova_9.jpg", description: "" },
            { id: 10, title: "", imageUrl: "assets/images/portfolio/nilufer_zakirova/nilufer_zakirova_10.jpg", description: "" },
            { id: 11, title: "", imageUrl: "assets/images/portfolio/nilufer_zakirova/nilufer_zakirova_11.jpg", description: "" },
            { id: 12, title: "", imageUrl: "assets/images/portfolio/nilufer_zakirova/nilufer_zakirova_12.jpg", description: "" },
            { id: 13, title: "", imageUrl: "assets/images/portfolio/nilufer_zakirova/nilufer_zakirova_13.jpg", description: "" },
            { id: 14, title: "", imageUrl: "assets/images/portfolio/nilufer_zakirova/nilufer_zakirova_14.gif", description: "" },
            { id: 15, title: "", imageUrl: "assets/images/portfolio/nilufer_zakirova/nilufer_zakirova_15.jpg", description: "" },
        ];
    };
    DataRepository.authors = [
        { id: 1, name: { first: "Евгения", last: "Баринова" }, mascotUrl: "assets/images/portfolio/balet.png", about: "Евгения Баринова — высококвалифицированный специалист широкого профиля. Занимается концептуальным искусством с дошкольного возраста. Вежлива, внимательна к деталям, соблюдает сроки.", promoImages: DataRepository.getPromoImages(DataRepository.getEvgeniaBarinovaWorks()), works: DataRepository.getEvgeniaBarinovaWorks() },
        { id: 2, name: { first: "Хадия", last: "Улумбекова" }, mascotUrl: "assets/images/portfolio/pigeon.png", about: "\"Быстро и качественно? Да, такое бывает! Не получается медленно рисовать)\"", promoImages: DataRepository.getPromoImages(DataRepository.getKhadiaUlumbekovaWorks()), works: DataRepository.getKhadiaUlumbekovaWorks() },
        { id: 3, name: { first: "Любовь", last: "Березина" }, mascotUrl: "assets/images/portfolio/bird.png", about: "Иногда меня спрашивают: \"Вы иллюстратор? А портреты рисуете?\" Я отвечаю: \"Почему бы и нет, но боюсь вы не захотите вешать это на стенку\".", promoImages: DataRepository.getPromoImages(DataRepository.getLuybaBerezinaWorks()), works: DataRepository.getLuybaBerezinaWorks() },
        { id: 4, name: { first: "Арина", last: "Шабанова" }, mascotUrl: "assets/images/portfolio/heart.png", about: "Арина Шабанова - иллюстратор, на данный момент работает в Москве. Работы отличаются простотой форм, живой палитрой, зачастую с оптимистичным сюжетом. Среди широкого поля проектной деятельности особое место занимает анимация.", promoImages: DataRepository.getPromoImages(DataRepository.getArinaShabanovaWorks()), works: DataRepository.getArinaShabanovaWorks() },
        { id: 5, name: { first: "Тимур", last: "Зима" }, mascotUrl: "assets/images/portfolio/ball.png", about: "\"Графический дизайнер, иллюстратор и большой любитель ретроконсолей. В иллюстрации я стремлюсь к лаконичности и не забываю про детали. Черпаю вдохновение из разных источников, люблю простоту форм не забывая про детали.\"", promoImages: DataRepository.getPromoImages(DataRepository.getTimurZimaWorks()), works: DataRepository.getTimurZimaWorks() },
        { id: 6, name: { first: "Алексей", last: "Сухов" }, mascotUrl: "assets/images/portfolio/rat.png", about: "Лучший парень в однокомнатной квартире.", promoImages: DataRepository.getPromoImages(DataRepository.getLeshaSuhovWorks()), works: DataRepository.getLeshaSuhovWorks() },
        { id: 7, name: { first: "Александра", last: "Киселёва" }, mascotUrl: "assets/images/portfolio/house.png", about: "", promoImages: DataRepository.getPromoImages(DataRepository.getSashaKiselevaWorks()), works: DataRepository.getSashaKiselevaWorks() },
        { id: 8, name: { first: "Ольга", last: "Чикина" }, mascotUrl: "assets/images/portfolio/horse.png", about: "Элитный маляр", promoImages: DataRepository.getPromoImages(DataRepository.getOlgaChikinaWorks()), works: DataRepository.getOlgaChikinaWorks() },
        { id: 9, name: { first: "Екатерина", last: "Дорохина" }, mascotUrl: "assets/images/portfolio/pizza.png", about: "Иллюстратор из Москвы, основное направление – создание персонажей и историй. Также занимается анимацией и керамикой. В иллюстрации ценит юмор и наличие деталей.", promoImages: DataRepository.getPromoImages(DataRepository.getKatyaDorokhinaWorks()), works: DataRepository.getKatyaDorokhinaWorks() },
        { id: 10, name: { first: "Екатерина", last: "Воронина" }, mascotUrl: "assets/images/portfolio/fox.png", about: "\"В этом мире возможно все! Больше интенции, меньше инерции)\"", promoImages: DataRepository.getPromoImages(DataRepository.getKatyaVoroninaWorks()), works: DataRepository.getKatyaVoroninaWorks() },
        { id: 11, name: { first: "Никита", last: "Кибирев" }, mascotUrl: "assets/images/portfolio/nik.png", about: "Я опытный иллюстратор и графический дизайнер, так же работаю в области off-the wall concept work, поскольку участвую в разработке корпоративного бренда широкого формата и также работаю над оформлением объявлений на Facebook для мамы.", promoImages: DataRepository.getPromoImages(DataRepository.getNikitaKibirevWorks()), works: DataRepository.getNikitaKibirevWorks() },
        { id: 12, name: { first: "Сергей", last: "Гудков" }, mascotUrl: "assets/images/portfolio/gudkov.png", about: "Иллюстратор, дизайнер. \"Люблю комиксы, мультфильмы и детские иллюстрации.\"", promoImages: DataRepository.getPromoImages(DataRepository.getSergeyGudkovWorks()), works: DataRepository.getSergeyGudkovWorks() },
        { id: 13, name: { first: "Нилюфер", last: "Закирова" }, mascotUrl: "assets/images/portfolio/flower.png", about: "Иллюстратор и художник по совместительству, постоянно ищет пути усовершенствования своей техники.", promoImages: DataRepository.getPromoImages(DataRepository.getNiluferZakirovaWorks()), works: DataRepository.getNiluferZakirovaWorks() },
    ];
    DataRepository.news = [
        { id: 1, releaseDate: new Date(2016, 12, 1), author: "Хадия Улумбекова", title: "В Австралии прошла первая голая экскурсия в Национальной галлереи искусств. Все посетители должна были быть абсолютно голыми.", cover: "assets/images/illustratedNews/1.jpeg" },
        { id: 2, releaseDate: new Date(2016, 12, 1), author: "Хадия Улумбекова", title: "Наконец-то Сири заговорил по-русски", cover: "assets/images/illustratedNews/2.jpeg" },
        { id: 3, releaseDate: new Date(2016, 12, 1), author: "Хадия Улумбекова", title: "Пасхальное ограбление в Лондоне на сумму в 200 миллионов фунтов", cover: "assets/images/illustratedNews/3.jpeg" },
        { id: 4, releaseDate: new Date(2016, 12, 1), author: "Хадия Улумбекова", title: "По непонятным причинам, российский симфонический оркестр был задержан на 10 часов в аэропорту Хитроу", cover: "assets/images/illustratedNews/5.jpeg" },
        { id: 5, releaseDate: new Date(2016, 12, 1), author: "Хадия Улумбекова", title: "Лэйдис найт на скачках закончился провалом, сотни пьяных англичанок расхаживали по городу в красивых нарядах)))", cover: "assets/images/illustratedNews/6.jpeg" },
        { id: 6, releaseDate: new Date(2016, 12, 1), author: "Хадия Улумбекова", title: "Отличное совпадение! С Пасхой и днем космонавтики всех!)", cover: "assets/images/illustratedNews/8.jpeg" },
        { id: 7, releaseDate: new Date(2016, 12, 1), author: "Хадия Улумбекова", title: "27-летний китайский солдат Инь Юнфенг стал настоящей интернет звездой после того, как приготовил для своей любимой жены 1000 пельменей и около 70 других блюд перед возвращением в военную часть расположенную в Тибете.", cover: "assets/images/illustratedNews/12.jpeg" },
        { id: 8, releaseDate: new Date(2016, 12, 1), author: "Хадия Улумбекова", title: "В Хакасии задержали корреспондента \"Первого канала\", который поджег траву, чтобы снять фон для сюжета про лесные пожары.", cover: "assets/images/illustratedNews/16.jpeg" },
        { id: 9, releaseDate: new Date(2016, 12, 1), author: "Хадия Улумбекова", title: "5 сезон игр престолов!)", cover: "assets/images/illustratedNews/22.jpeg" },
        { id: 10, releaseDate: new Date(2016, 12, 1), author: "Хадия Улумбекова", title: "Привет дачники, пробки и 1 мая!)", cover: "assets/images/illustratedNews/23.jpeg" },
        { id: 11, releaseDate: new Date(2016, 12, 1), author: "Хадия Улумбекова", title: "2 мая, скончалась великая балерина Майя Плисецкая. Легенда российского балета умерла от сердечного приступа в Германии.", cover: "assets/images/illustratedNews/25.jpeg" },
        { id: 12, releaseDate: new Date(2016, 12, 1), author: "Хадия Улумбекова", title: "Такую странную картину в последнее время наблюдают жители Токио: пожилой мужчина прогуливается по улице в компании гигантской черепахи. Наверное, имя этого человека вполне можно было бы занести в книгу рекордов Гиннесса как самого терпеливого хозяина.", cover: "assets/images/illustratedNews/26.jpeg" },
        { id: 13, releaseDate: new Date(2016, 12, 1), author: "Хадия Улумбекова", title: "Испанские пограничники с помощью рентгена нашли в чемодане живого мальчика. Когда мальчик понял, что его обнаружили, он высунул голову из чемодана и сказал по-французски: «Привет, меня зовут Абу».", cover: "assets/images/illustratedNews/27.jpeg" },
        { id: 14, releaseDate: new Date(2016, 12, 1), author: "Хадия Улумбекова", title: "Российская сборная вышла в финал чемпионата мира по хоккею, но так и не смогла выиграть у канадцев! Проиграли со счетом 6:1", cover: "assets/images/illustratedNews/29.jpeg" },
        { id: 15, releaseDate: new Date(2016, 12, 1), author: "Хадия Улумбекова", title: "Поженив двух мопсов Pug Rescue( благотворительная организация) провела сбора средств на помощь живущим в приюте собакам. Вход на мероприятие был платным, билеты на церемонию продавались в Интернете. Платье \"невесты\" обошлось в 1600$", cover: "assets/images/illustratedNews/33.jpeg" },
        { id: 16, releaseDate: new Date(2016, 12, 1), author: "Хадия Улумбекова", title: "Следующее Евровидение 2016 пройдет в Швеции! У России тем не менее 2 место", cover: "assets/images/illustratedNews/34.jpeg" },
        { id: 17, releaseDate: new Date(2016, 12, 1), author: "Хадия Улумбекова", title: "Китайский миллиардер арендовал на 15 лет порнозвезду Рола Такизава. Анонимный богач приобрел актрису за 7,5 млн. долларов", cover: "assets/images/illustratedNews/35.jpeg" },
        { id: 18, releaseDate: new Date(2016, 12, 1), author: "Хадия Улумбекова", title: "Nikon научил собак фотографировать их самые волнительные моменты с помощью датчика сердцебиения. Специальное крепление для камер Nikon, которое автоматически делает снимок, если у животного повышается пульс.", cover: "assets/images/illustratedNews/37.jpeg" },
        { id: 19, releaseDate: new Date(2016, 12, 1), author: "Хадия Улумбекова", title: "В Индии взяли под стражу голубя-шпиона. К птице было прикреплено сообщение, которое сочли подозрительным", cover: "assets/images/illustratedNews/41.jpeg" },
        { id: 20, releaseDate: new Date(2016, 12, 1), author: "Хадия Улумбекова", title: "Финская полиция приняла на работу кошку по имени Ааму . Хвостатая помощница будет работать с детьми, которым требуется психологическая поддержка.", cover: "assets/images/illustratedNews/45.jpeg" },
        { id: 21, releaseDate: new Date(2016, 12, 1), author: "Хадия Улумбекова", title: "Австралийский мастер трик-шотов Бретт Сенфорд забрасывает баскетбольный мяч в кольцо с высоты 126,5 метра. Бросок был произведен с плотины Гордон.", cover: "assets/images/illustratedNews/48.jpeg" },
        { id: 22, releaseDate: new Date(2016, 12, 1), author: "Хадия Улумбекова", title: "Англичанкупосадили в тюрьму на две недели за \"слишком громкий секс\")))", cover: "assets/images/illustratedNews/51.jpeg" },
        { id: 23, releaseDate: new Date(2016, 12, 1), author: "Хадия Улумбекова", title: "NASA нашли признаки жидкой воды на Марсе!)", cover: "assets/images/illustratedNews/55.jpeg" },
        { id: 24, releaseDate: new Date(2016, 12, 1), author: "Хадия Улумбекова", title: "В Италии открылся университет порно, который специализируется на подготовке начинающих актрис и актёров индустрии развлечений.", cover: "assets/images/illustratedNews/56.jpeg" },
        { id: 25, releaseDate: new Date(2016, 12, 1), author: "Хадия Улумбекова", title: "Министерство финансов США объявило, что к 2020 году на купюре достоинством в 10$ появится изоображение женщины.", cover: "assets/images/illustratedNews/57.jpeg" },
        { id: 26, releaseDate: new Date(2016, 12, 1), author: "Хадия Улумбекова", title: "В звездных войнах появился новый персонаж", cover: "assets/images/illustratedNews/60.jpeg" },
        { id: 27, releaseDate: new Date(2016, 12, 1), author: "Хадия Улумбекова", title: "В звездных войнах появился новый персонаж", cover: "assets/images/illustratedNews/61.jpeg" },
    ];
    Snowstorm.DataRepository = DataRepository;
})(Snowstorm || (Snowstorm = {}));

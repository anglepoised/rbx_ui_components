define([
], function () {

    // @ngInject
    function demoCtrl ($rootScope, $scope, $state, $injector) {
        var $this = this;

        $scope.search = '';

        $scope.$watch('search', function (val) {

            var filteredCategory,
                filteredSection,
                categoryMatch,
                filteredCategoryIndex,
                filteredSectionIndex,
                sectionMatch,
                itmeMatch,
                filteredCategories = [];

            // For each category
            angular.forEach($this.categories, function (category) {
                filteredCategory = angular.copy(category);
                filteredCategory.items = [];

                categoryMatch = false;

                // and each section within that category
                angular.forEach(category.items, function (section) {

                    filteredSection = angular.copy(section);
                    filteredSection.items = [];

                    sectionMatch = false;

                    // Check each item for matches
                    angular.forEach(section.items, function (item) {
                        itemMatch = item.label.toLowerCase().indexOf(val.toLowerCase()) >= 0;

                        // If there is a match
                        if (itemMatch) {

                            // and this is first match in this category
                            if (categoryMatch === false) {
                                // add empty category to filteredCategories
                                filteredCategoryIndex = filteredCategories.push(filteredCategory) - 1;
                                categoryMatch = true;
                            }

                            // and/or this is first match in this section
                            if (sectionMatch === false) {
                                // add empty section to the category added above
                                filteredSectionIndex = filteredCategories[filteredCategoryIndex]
                                    .items
                                    .push(filteredSection);

                                sectionMatch = true;
                            }

                            filteredSection.items.push(item);
                        }
                    });
                });
            });

            // Update scope filteredCategories
            $this.filteredCategories = filteredCategories;
        }, true);

        this.categories = [
            {
                label: 'Countries',
                anchor: 'countries',
                hidden: true,
                items: [
                    {
                        label: 'A',
                        anchor: 'A',
                        items: [
                            {label:'Afghanistan'},
                            {label:'Albania'},
                            {label:'Algeria'},
                            {label:'Andorra'},
                            {label:'Angola'},
                            {label:'Antigua and Barbuda'},
                            {label:'Argentina'},
                            {label:'Armenia'},
                            {label:'Aruba'},
                            {label:'Australia'},
                            {label:'Austria'},
                            {label:'Azerbaijan'}
                        ]
                    },
                    {
                        label: 'B',
                        anchor: 'B',
                        items: [
                            {label:'Bahamas, The'},
                            {label:'Bahrain'},
                            {label:'Bangladesh'},
                            {label:'Barbados'},
                            {label:'Belarus'},
                            {label:'Belgium'},
                            {label:'Belize'},
                            {label:'Benin'},
                            {label:'Bhutan'},
                            {label:'Bolivia'},
                            {label:'Bosnia and Herzegovina'},
                            {label:'Botswana'},
                            {label:'Brazil'},
                            {label:'Brunei'},
                            {label:'Bulgaria'},
                            {label:'Burkina Faso'},
                            {label:'Burma'},
                            {label:'Burundi'}
                        ]
                    },
                    {
                        label: 'C',
                        anchor: 'C',
                        items: [
                            {label:'Cambodia'},
                            {label:'Cameroon'},
                            {label:'Canada'},
                            {label:'Cape Verde'},
                            {label:'Central African Republic'},
                            {label:'Chad'},
                            {label:'Chile'},
                            {label:'China'},
                            {label:'Colombia'},
                            {label:'Comoros'},
                            {label:'Congo, Democratic Republic of the'},
                            {label:'Congo, Republic of the'},
                            {label:'Costa Rica'},
                            {label:'Cote d\'Ivoire'},
                            {label:'Croatia'},
                            {label:'Cuba'},
                            {label:'Curacao'},
                            {label:'Cyprus'},
                            {label:'Czech Republic'}
                        ]
                    },
                    {
                        label: 'D',
                        anchor: 'D',
                        items: [
                            {label:'Denmark'},
                            {label:'Djibouti'},
                            {label:'Dominica'},
                            {label:'Dominican Republic'}
                        ]
                    },
                    {
                        label: 'E',
                        anchor: 'E',
                        items: [
                            {label:'East Timor'},
                            {label:'Ecuador'},
                            {label:'Egypt'},
                            {label:'El Salvador'},
                            {label:'Equatorial Guinea'},
                            {label:'Eritrea'},
                            {label:'Estonia'},
                            {label:'Ethiopia'}
                        ]
                    },
                    {
                        label: 'F',
                        anchor: 'F',
                        items: [
                            {label:'Fiji'},
                            {label:'Finland'},
                            {label:'France'}
                        ]
                    },
                    {
                        label:'G',
                        anchor:'G',
                        items: [
                            {label:'Gabon'},
                            {label:'Gambia, The'},
                            {label:'Georgia'},
                            {label:'Germany'},
                            {label:'Ghana'},
                            {label:'Greece'},
                            {label:'Grenada'},
                            {label:'Guatemala'},
                            {label:'Guinea'},
                            {label:'Guinea-Bissau'},
                            {label:'Guyana'}
                        ]
                    },
                    {
                        label: 'H',
                        anchor: 'H',
                        items: [
                            {label:'Haiti'},
                            {label:'Holy See'},
                            {label:'Honduras'},
                            {label:'Hong Kong'},
                            {label:'Hungary'}
                        ]
                    },
                    {
                        label: 'I',
                        anchor: 'I',
                        items: [
                            {label:'Iceland'},
                            {label:'India'},
                            {label:'Indonesia'},
                            {label:'Iran'},
                            {label:'Iraq'},
                            {label:'Ireland'},
                            {label:'Israel'},
                            {label:'Italy'}
                        ]
                    },
                    {
                        label: 'J',
                        anchor: 'J',
                        items: [
                            {label:'Jamaica'},
                            {label:'Japan'},
                            {label:'Jordan'}
                        ]
                    },
                    {
                        label: 'K',
                        anchor: 'K',
                        items: [
                            {label:'Kazakhstan'},
                            {label:'Kenya'},
                            {label:'Kiribati'},
                            {label:'Korea, North'},
                            {label:'Korea, South'},
                            {label:'Kosovo'},
                            {label:'Kuwait'},
                            {label:'Kyrgyzstan'}
                        ]
                    },
                    {
                        label: 'L',
                        anchor: 'L',
                        items: [
                            {label:'Laos'},
                            {label:'Latvia'},
                            {label:'Lebanon'},
                            {label:'Lesotho'},
                            {label:'Liberia'},
                            {label:'Libya'}
                        ]
                    }
                ]
            }
        ];

        this.filteredCategories = angular.copy(this.categories);
    }

    return demoCtrl;
});

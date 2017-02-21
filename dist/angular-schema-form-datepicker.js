angular.module('templates', []).run(['$templateCache', function($templateCache) {$templateCache.put('src/templates/angular-schema-form-datepicker.html','<div>\n<!-- Surrounding DIV for sfField builder to add a sfField directive to. -->\n\n  <!--<h2>{{form.myOwnFormOption}}</h2>-->\n  <!--&lt;!&ndash; Create your own form options &ndash;&gt;-->\n\n  <!--<label>{{form.title}}</label>-->\n  <!-- -->\n  <!--<update-on-blur sf-field-model schema-validate="form"></update-on-blur>-->\n  <!--<em>Blur this field to update the model.</em>-->\n  <!-- -->\n  <!--&lt;!&ndash; sf-field-model let\'s the ngModel builder know that you want a ng-model that matches against the form key here &ndash;&gt;-->\n  <!--&lt;!&ndash; schema-validate="form" validates the form against the schema &ndash;&gt;-->\n\n  <!--<span sf-message="form.description"></span>-->\n  <!--&lt;!&ndash; Description & Validation messages &ndash;&gt;-->\n  <datepicker>\n    <input ng-model="date" type="text"/>\n  </datepicker>\n\n</div>\n');}]);
angular.module('angularSchemaFormDatepicker', [
  'schemaForm',
  'templates'
]).config(function(schemaFormDecoratorsProvider, sfBuilderProvider) {

  schemaFormDecoratorsProvider.defineAddOn(
    'bootstrapDecorator',           // Name of the decorator you want to add to.
    'angular-schema-form-datepicker',                      // Form type that should render this add-on
    'src/templates/angular-schema-form-datepicker.html',  // Template name in $templateCache
    sfBuilderProvider.stdBuilders   // List of builder functions to apply.
  );

});

angular.module('angularSchemaFormDatepicker').directive('updateOnBlur', function () {
  return {
    restrict: 'E',
    require: 'ngModel',
    scope: {},
    template: '<input type="text" class="form-control" ng-model="modelValue" ng-blur="updateModel(modelValue)"></input>',
    link: function (scope, element, attrs, ngModel) {
      scope.modelValue = ngModel.$viewValue;

      scope.updateModel = function (modelValue) {
        ngModel.$setViewValue(modelValue);
      };
    },
  };
});

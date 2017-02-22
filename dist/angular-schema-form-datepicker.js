angular.module('templates', []).run(['$templateCache', function($templateCache) {$templateCache.put('src/templates/angular-schema-form-datepicker.html','<div class="form-group {{form.htmlClass}}" ng-class="{\'has-error\': hasError()}">\n  <label class="control-label {{form.labelHtmlClass}}" ng-show="showTitle()">{{form.title}}</label>\n  <div ng-class="{\'input-group\': (form.fieldAddonLeft || form.fieldAddonRight)}">\n    <span ng-if="form.fieldAddonLeft"\n          class="input-group-addon"\n          ng-bind-html="form.fieldAddonLeft"></span>\n    <datepicker\n            date-format="{{form.dateFormat}}"\n            date-min-limit="{{form.dateMinLimit}}"\n            date-max-limit="{{form.dateMaxLimit}}"\n            date-set-hidden="{{form.dateSetHidden}}"\n            date-disabled-dates="{{form.dateDisabledDate}}"\n            date-refocus="{{form.dateRefocus}}"\n            date-typer="{{form.dateTyper}}"\n            date-week-start-day="{{form.dateWeekStartDay}}"\n            datepicker-class="{{form.datepickerClass}}"\n            datepicker-append-to="{{form.datepickerAppendTo}}"\n            datepicker-toggle="{{form.datepickerAppendTo}}"\n            datepicker-show="{{form.datepickerShow}}"\n            datepicker-mobile="{{form.datepickerMobile}}"\n            >\n      <input\n              ng-show="form.key"\n              type="text"\n              class="form-control {{form.fieldHtmlClass}}"\n              schema-validate="form"\n              ng-disabled="form.readonly"\n              sf-field-model\n              ng-model="$$value$$"\n              type="text"\n              />\n    </datepicker>\n    <span ng-if="form.fieldAddonRight"\n          class="input-group-addon"\n          ng-bind-html="form.fieldAddonRight"></span>\n  </div>\n  <span class="help-block">{{ (hasError() && errorMessage(schemaError())) || form.description}}</span>\n</div>\n');}]);
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

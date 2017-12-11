/* global inject */
describe('Component: RetireServiceModalComponent', () => {
  beforeEach(module('app.states', 'app.services'))

  describe('controller', () => {
    let $componentController, $scope, ctrl

    beforeEach(inject(function ($rootScope, $injector, _$componentController_) {
      $scope = $rootScope.$new()
      const bindings = {resolve: {services: []}}
      const locals = {
        $scope: $scope,
        services: angular.noop,
        $uibModalInstance: angular.noop,
        CollectionsApi: angular.noop,
        EventNotifications: angular.noop
      }

      $componentController = _$componentController_
      ctrl = $componentController('retireServiceModal', locals, bindings)
    }))

    it('changes visible options when date is changed', () => {
      expect(ctrl.visibleOptions.length).to.eq(0)

      // Initial digest populates visibleOptions with 'No warning' option
      $scope.$digest()

      expect(ctrl.visibleOptions.length).to.eq(1)
    })

    it('allows for the form to be disabled by default', () => {
      expect(ctrl.isDisabled()).to.eq(true)
    })

    it('should enable form if a date object is found', () => {
      ctrl.modalData = {
        'id': '1234',
        'date': { 'month': '1', 'day': '2', 'year': '2018' },
        'warning': null
      }
      expect(ctrl.isDisabled()).to.eq(false)
    })
  })
})

(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('flow-adapters', ['exports', '@angular/core'], factory) :
    (factory((global['flow-adapters'] = {}),global.ng.core));
}(this, (function (exports,i0) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var FlowAdaptersService = (function () {
        function FlowAdaptersService() {
        }
        FlowAdaptersService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] },
        ];
        /** @nocollapse */
        FlowAdaptersService.ctorParameters = function () { return []; };
        /** @nocollapse */ FlowAdaptersService.ngInjectableDef = i0.defineInjectable({ factory: function FlowAdaptersService_Factory() { return new FlowAdaptersService(); }, token: FlowAdaptersService, providedIn: "root" });
        return FlowAdaptersService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var FlowAdaptersComponent = (function () {
        function FlowAdaptersComponent() {
        }
        /**
         * @return {?}
         */
        FlowAdaptersComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        FlowAdaptersComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'lib-flow-adapters',
                        template: "\n    <p>\n      flow-adapters works!\n    </p>\n  ",
                        styles: []
                    },] },
        ];
        /** @nocollapse */
        FlowAdaptersComponent.ctorParameters = function () { return []; };
        return FlowAdaptersComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var FlowAdaptersModule = (function () {
        function FlowAdaptersModule() {
        }
        FlowAdaptersModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [],
                        declarations: [FlowAdaptersComponent],
                        exports: [FlowAdaptersComponent]
                    },] },
        ];
        return FlowAdaptersModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    exports.FlowAdaptersService = FlowAdaptersService;
    exports.FlowAdaptersComponent = FlowAdaptersComponent;
    exports.FlowAdaptersModule = FlowAdaptersModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmxvdy1hZGFwdGVycy51bWQuanMubWFwIiwic291cmNlcyI6WyJuZzovL2Zsb3ctYWRhcHRlcnMvbGliL2Zsb3ctYWRhcHRlcnMuc2VydmljZS50cyIsIm5nOi8vZmxvdy1hZGFwdGVycy9saWIvZmxvdy1hZGFwdGVycy5jb21wb25lbnQudHMiLCJuZzovL2Zsb3ctYWRhcHRlcnMvbGliL2Zsb3ctYWRhcHRlcnMubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgRmxvd0FkYXB0ZXJzU2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1mbG93LWFkYXB0ZXJzJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8cD5cbiAgICAgIGZsb3ctYWRhcHRlcnMgd29ya3MhXG4gICAgPC9wPlxuICBgLFxuICBzdHlsZXM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIEZsb3dBZGFwdGVyc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRmxvd0FkYXB0ZXJzQ29tcG9uZW50IH0gZnJvbSAnLi9mbG93LWFkYXB0ZXJzLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbRmxvd0FkYXB0ZXJzQ29tcG9uZW50XSxcbiAgZXhwb3J0czogW0Zsb3dBZGFwdGVyc0NvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgRmxvd0FkYXB0ZXJzTW9kdWxlIHsgfVxuIl0sIm5hbWVzIjpbIkluamVjdGFibGUiLCJDb21wb25lbnQiLCJOZ01vZHVsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO1FBT0U7U0FBaUI7O29CQUxsQkEsYUFBVSxTQUFDO3dCQUNWLFVBQVUsRUFBRSxNQUFNO3FCQUNuQjs7Ozs7a0NBSkQ7Ozs7Ozs7QUNBQTtRQWFFO1NBQWlCOzs7O1FBRWpCLHdDQUFROzs7WUFBUjthQUNDOztvQkFkRkMsWUFBUyxTQUFDO3dCQUNULFFBQVEsRUFBRSxtQkFBbUI7d0JBQzdCLFFBQVEsRUFBRSxxREFJVDt3QkFDRCxNQUFNLEVBQUUsRUFBRTtxQkFDWDs7OztvQ0FWRDs7Ozs7OztBQ0FBOzs7O29CQUdDQyxXQUFRLFNBQUM7d0JBQ1IsT0FBTyxFQUFFLEVBQ1I7d0JBQ0QsWUFBWSxFQUFFLENBQUMscUJBQXFCLENBQUM7d0JBQ3JDLE9BQU8sRUFBRSxDQUFDLHFCQUFxQixDQUFDO3FCQUNqQzs7aUNBUkQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
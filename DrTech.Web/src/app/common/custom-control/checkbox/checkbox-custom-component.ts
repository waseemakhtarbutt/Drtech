/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import { Component, Input, HostBinding, forwardRef, ChangeDetectorRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { convertToBoolProperty } from '@nebular/theme/components/helpers';

/**
 * Styled checkbox component
 *
 * @stacked-example(Showcase, checkbox/checkbox-showcase.component)
 *
 * ### Installation
 *
 * Import `NbCheckboxComponent` to your feature module.
 * ```ts
 * @NgModule({
 *   imports: [
 *   	// ...
 *     NbCheckboxModule,
 *   ],
 * })
 * export class PageModule { }
 * ```
 * ### Usage
 *
 * Can have one of the following statuses: danger, success or warning
 *
 * @stacked-example(Colored Checkboxes, checkbox/checkbox-status.component)
 *
 * @additional-example(Disabled Checkbox, checkbox/checkbox-disabled.component)
 *
 * @styles
 *
 * checkbox-bg:
 * checkbox-size:
 * checkbox-border-size:
 * checkbox-border-color:
 * checkbox-checkmark:
 * checkbox-checked-bg:
 * checkbox-checked-size:
 * checkbox-checked-border-size:
 * checkbox-checked-border-color:
 * checkbox-checked-checkmark:
 * checkbox-disabled-bg:
 * checkbox-disabled-size:
 * checkbox-disabled-border-size:
 * checkbox-disabled-border-color:
 * checkbox-disabled-checkmark:
 */
@Component({
  selector: 'nb-checkbox',
  template: `
    <label class="customised-control">
      <img src="assets/images/map/{{_pin}}.png" style="height:30px" class="mr-3" />
      <input type="checkbox" class="customised-control-input"
             [disabled]="disabled"
             [checked]="value"
             (change)="value = !value"
             (blur)="setTouched()">
      <span class="customised-control-indicator mt-1"></span>
      <span class="customised-control-description mt-1">
        <ng-content></ng-content>
      </span>
    </label>
  `,
  styleUrls: [`./checkbox.component.scss`],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => NbCheckboxComponentCustom),
    multi: true,
  }],
})
export class NbCheckboxComponentCustom implements ControlValueAccessor {

  status: string;
  _pin: string = "";

  /**
   * Checkbox value
   * @type {boolean}
   * @private
   */
  @Input('value') _value: boolean = false;
  
  @Input()
  set pin(val: string) {
    if (val != null && val.length > 0)
      this._pin = val.toLowerCase();
  }

  disabled: boolean = false;
  @Input('disabled')
  set setDisabled(val: boolean) {
    this.disabled = convertToBoolProperty(val);
  }

  /**
   * Checkbox status (success, warning, danger)
   * @param {string} val
   */
  @Input('status')
  set setStatus(val: string) {
    this.status = val;
  }

  @HostBinding('class.success')
  get success() {
    return this.status === 'success';
  }

  @HostBinding('class.warning')
  get warning() {
    return this.status === 'warning';
  }

  @HostBinding('class.danger')
  get danger() {
    return this.status === 'danger';
  }

  onChange: any = () => { };
  onTouched: any = () => { };

  get value() {
    return this._value;
  }

  set value(val) {
    this._value = val;
    this.onChange(val);
  }
  
  

  constructor(private changeDetector: ChangeDetectorRef) { }

  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouched = fn;
  }

  writeValue(val: any) {
    this._value = val;
    this.changeDetector.detectChanges();
  }

  setDisabledState(val: boolean) {
    this.disabled = convertToBoolProperty(val);
  }

  setTouched() {
    this.onTouched();
  }
}

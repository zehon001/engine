"use strict";
Vue.component("cc-toggle", {
    template: `
    <ui-prop
      v-prop="target.target"
      :multi-values="multi"
      tooltip="{{T(\'COMPONENT.toggle.target\')}}"
    ></ui-prop>
    <div class="horizontal layout end-justified" style="padding:5px 0;margin-bottom:5px;">
        <ui-button class="blue tiny"
          v-disabled="multi"
          @confirm="resetNodeSize"
          :multi-values="multi"
        >
          Resize to Target
        </ui-button>
    </div>
    <ui-prop
      v-prop="target.interactable"
      :multi-values="multi"
      tooltip="{{T(\'COMPONENT.toggle.interactable\')}}"
    ></ui-prop>


    <ui-prop
      v-prop="target.enableAutoGrayEffect"
      tooltip="{{T(\'COMPONENT.toggle.auto_gray_effect\')}}"
      :multi-values="multi"
    ></ui-prop>
	
	<ui-prop
      v-prop="target.reverseTargetActive"
      tooltip="是否反转target的active."
    ></ui-prop>
	
    <ui-prop
      v-prop="target.transition"
      tooltip="{{T(\'COMPONENT.toggle.transition\')}}"
      :multi-values="multi"
    ></ui-prop>

    <div
      v-if="!_updateValueMulti(target.transition, 1, multi)"
    >
      <ui-prop indent=1
        v-prop="target.normalColor"
        :multi-values="multi"
        tooltip="{{T(\'COMPONENT.toggle.normal_color\')}}"></ui-prop>
      <ui-prop indent=1
        v-prop="target.pressedColor"
        :multi-values="multi"
        tooltip="{{T(\'COMPONENT.toggle.pressed_color\')}}"
      ></ui-prop>
      <ui-prop indent=1
        v-prop="target.hoverColor"
        :multi-values="multi"
        tooltip="{{T(\'COMPONENT.toggle.hover_color\')}}"
      ></ui-prop>
      <ui-prop indent=1
        v-prop="target.disabledColor"
        tooltip="{{T(\'COMPONENT.toggle.disabled_color\')}}"
        :multi-values="multi"
      ></ui-prop>
      <ui-prop indent=1
        v-prop="target.duration"
        :multi-values="multi"
        tooltip="{{T(\'COMPONENT.toggle.duration\')}}"
      ></ui-prop>
    </div>

    <div
      v-if="!_updateValueMulti(target.transition, 2, multi)"
    >
      <ui-prop indent=1
        v-prop="target.normalSprite"
        tooltip="{{T(\'COMPONENT.toggle.normal_sprite\')}}"
        :multi-values="multi"
      ></ui-prop>
      <ui-prop indent=1
        v-prop="target.pressedSprite"
        tooltip="{{T(\'COMPONENT.toggle.pressed_sprite\')}}"
        :multi-values="multi"
      ></ui-prop>
      <ui-prop indent=1
        v-prop="target.hoverSprite"
        tooltip="{{T(\'COMPONENT.toggle.hover_sprite\')}}"
        :multi-values="multi"
      ></ui-prop>
      <ui-prop indent=1
        v-prop="target.disabledSprite"
        tooltip="{{T(\'COMPONENT.toggle.disabled_sprite\')}}"
        :multi-values="multi"
      ></ui-prop>
    </div>

    <div
      v-if="!_updateValueMulti(target.transition, 3, multi)"
    >
      <ui-prop indent=1
        v-prop="target.duration"
        :multi-values="multi"
        tooltip="{{T(\'COMPONENT.toggle.duration\')}}"
      ></ui-prop>
      <ui-prop indent=1
        v-prop="target.zoomScale"
        :multi-values="multi"
        tooltip="{{T(\'COMPONENT.toggle.zoom_scale\')}}"
      ></ui-prop>
    </div>

    <ui-prop
      v-prop="target.isChecked"
      tooltip="{{T(\'COMPONENT.toggle.isChecked\')}}"
      :multi-values="multi"
    ></ui-prop>
    <ui-prop
      v-prop="target.checkMark"
      tooltip="{{T(\'COMPONENT.toggle.checkMark\')}}"
    ></ui-prop>
    <ui-prop
      v-prop="target.toggleGroup"
      tooltip="{{T(\'COMPONENT.toggle.toggleGroup\')}}"  
      :multi-values="multi"
    ></ui-prop>

    <cc-array-prop :target.sync="target.checkEvents"></cc-array-prop>
  `,
    props: {
        target: {
            twoWay: !0,
            type: Object
        },
        multi: {
            type: Boolean
        }
    },
    methods: {
        T: Editor.T,
        resetNodeSize() {
            var t = {
                id: this.target.uuid.value,
                path: "_resizeToTarget",
                type: "Boolean",
                isSubProp: !1,
                value: !0
            };
            Editor.Ipc.sendToPanel("scene", "scene:set-property", t)
        },
        _updateValueMulti: (t, o, n) => n ? t.values.some(t => t !== o) : t.value !== o
    }
});
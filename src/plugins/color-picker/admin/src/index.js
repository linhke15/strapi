import { getTranslation } from "./utils/getTranslation";
import { PLUGIN_ID } from "./pluginId";
import { Initializer } from "./components/Initializer";
import { PluginIcon } from "./components/PluginIcon";
import ColorPickerIcon from "./components/ColorPicker/ColorPickerIcon";

export default {
    register(app) {
        app.addMenuLink({
            to: `plugins/${PLUGIN_ID}`,
            icon: PluginIcon,
            intlLabel: {
                id: `${PLUGIN_ID}.plugin.name`,
                defaultMessage: PLUGIN_ID,
            },
            Component: async() => {
                const { App } = await
                import ("./pages/App");

                return App;
            },
        });

        app.registerPlugin({
            id: PLUGIN_ID,
            initializer: Initializer,
            isReady: false,
            name: PLUGIN_ID,
        });

        //register customfield
        app.customFields.register({
            name: "color",
            pluginId: "color-picker", // the custom field is created by a color-picker plugin
            type: "string", // the color will be stored as a string
            intlLabel: {
                id: "color-picker.color.label",
                defaultMessage: "Color",
            },
            intlDescription: {
                id: "color-picker.color.description",
                defaultMessage: "Select any color",
            },
            icon: ColorPickerIcon, // don't forget to create/import your icon component
            components: {
                Input: async() =>
                    import ('./components/Input').then((module) => ({
                        default: module.Input,
                    })),
            },
            options: {
                base: [{
                    sectionTitle: {
                        // Add a "Format" settings section
                        id: "color-picker.color.section.format",
                        defaultMessage: "Format",
                    },
                    items: [
                        // Add settings items to the section
                        {
                            /*
                              Add a "Color format" dropdown
                              to choose between 2 different format options
                              for the color value: hexadecimal or RGBA
                            */
                            intlLabel: {
                                id: "color-picker.color.format.label",
                                defaultMessage: "Color format",
                            },
                            name: "options.format",
                            type: "select",
                            value: "hex", // option selected by default
                            options: [
                                // List all available "Color format" options
                                {
                                    key: "hex",
                                    defaultValue: "hex",
                                    value: "hex",
                                    metadatas: {
                                        intlLabel: {
                                            id: "color-picker.color.format.hex",
                                            defaultMessage: "Hexadecimal",
                                        },
                                    },
                                },
                                {
                                    key: "rgba",
                                    value: "rgba",
                                    metadatas: {
                                        intlLabel: {
                                            id: "color-picker.color.format.rgba",
                                            defaultMessage: "RGBA",
                                        },
                                    },
                                },
                            ],
                        },
                    ],
                }],
                advanced: [
                    /*
                      Declare settings to be added to the "Advanced settings" section
                      of the field in the Content-Type Builder
                    */
                ],

            },
        });
        //
    },

    async registerTrads({ locales }) {
        return Promise.all(
            locales.map(async(locale) => {
                try {
                    const { default: data } = await
                    import (
                        `./translations/${locale}.json`
                    );

                    return { data, locale };
                } catch {
                    return { data: {}, locale };
                }
            })
        );
    },
};
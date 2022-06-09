/* eslint @typescript-eslint/no-empty-interface: "off" */
import "styled-components";

declare module "styled-components" {
    export interface DefaultTheme {
        colors: {
            background: {
                default: string,
                modal: string,
                red: {
                    default: string
                },
                green: {
                    default: string
                }
            },
            text: {
                default: string,
                strong: string,
                description: string
            },
            input: {
                border: string
            },
            buttons: {
                green: {
                    default: string,
                    black: string
                }
            },
            icon: {
                default: string,
                strong: string
            }
        }
    }
}
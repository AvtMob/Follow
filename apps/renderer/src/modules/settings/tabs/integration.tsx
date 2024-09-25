import { useEffect } from "react"
import { useTranslation } from "react-i18next"

import { createSetting } from "~/atoms/settings/helper"
import { setIntegrationSetting, useIntegrationSettingValue } from "~/atoms/settings/integration"
import { Divider } from "~/components/ui/divider"
import {
  SimpleIconsEagle,
  SimpleIconsInstapaper,
  SimpleIconsReadwise,
} from "~/components/ui/platform-icon/icons"

import { useSetSettingCanSync } from "../modal/hooks"

const { defineSettingItem, SettingBuilder } = createSetting(
  useIntegrationSettingValue,
  setIntegrationSetting,
)
export const SettingIntegration = () => {
  const { t } = useTranslation("settings")
  const setSync = useSetSettingCanSync()
  useEffect(() => {
    setSync(false)
    return () => {
      setSync(true)
    }
  }, [setSync])
  return (
    <div className="mt-4">
      <SettingBuilder
        settings={[
          {
            type: "title",
            value: (
              <span className="flex items-center gap-2 font-bold">
                <SimpleIconsEagle />
                {t("integration.eagle.title")}
              </span>
            ),
          },
          defineSettingItem("enableEagle", {
            label: t("integration.eagle.enable.label"),
            description: t("integration.eagle.enable.description"),
          }),
          {
            type: "title",
            value: (
              <span className="flex items-center gap-2 font-bold">
                <SimpleIconsReadwise />
                {t("integration.readwise.title")}
              </span>
            ),
          },
          defineSettingItem("enableReadwise", {
            label: t("integration.readwise.enable.label"),
            description: t("integration.readwise.enable.description"),
          }),
          defineSettingItem("readwiseToken", {
            label: t("integration.readwise.token.label"),
            vertical: true,
            type: "password",
            description: (
              <>
                {t("integration.readwise.token.description")}{" "}
                <a
                  target="_blank"
                  className="underline"
                  rel="noreferrer noopener"
                  href="https://readwise.io/access_token"
                >
                  readwise.io/access_token
                </a>
                .
              </>
            ),
          }),
          {
            type: "title",
            value: (
              <span className="flex items-center gap-2 font-bold">
                <SimpleIconsInstapaper />
                {t("integration.instapaper.title")}
              </span>
            ),
          },
          defineSettingItem("enableInstapaper", {
            label: t("integration.instapaper.enable.label"),
            description: t("integration.instapaper.enable.description"),
          }),
          defineSettingItem("instapaperUsername", {
            label: t("integration.instapaper.username.label"),
            componentProps: {
              labelClassName: "w-[150px]",
            },
          }),
          defineSettingItem("instapaperPassword", {
            label: t("integration.instapaper.password.label"),
            type: "password",
            componentProps: {
              labelClassName: "w-[150px]",
            },
          }),

          BottomTip,
        ]}
      />
    </div>
  )
}

const BottomTip = () => {
  const { t } = useTranslation("settings")
  return (
    <div className="mt-6">
      <Divider />
      <p className="opacity-60">
        <small>{t("integration.tip")}</small>
      </p>
    </div>
  )
}
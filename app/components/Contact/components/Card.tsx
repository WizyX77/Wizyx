import { Url } from "next/dist/shared/lib/router/router";
import NextLink from "next/link";
import { Component, Key, ReactNode } from "react";
import { FaQuestionCircle } from "react-icons/fa";
import { FaDiscord, FaGithub, FaTiktok, FaXTwitter, FaYoutube } from "react-icons/fa6";

type CardType = (
  "youtube" |
  "tiktok" |
  "discord" |
  "github"
)

interface CardData {
  key?: Key;
  cardUrl: Url;
  cardName: string;
  cardType: CardType;
}

export default class Card extends Component<CardData> {
  constructor(props: CardData) {
    super(props);
  }

  render(): ReactNode {
    return (
      <NextLink
        key={this.props.key}
        href={this.props.cardUrl}
        className="flex cursor-pointer hover:-translate-y-1 items-center justify-between space-x-2 overflow-x-hidden rounded-xl border border-[#262626] bg-gradient-to-r from-[#151515] to-[#161616] p-4 transition duration-200 hover:border-[#ccc]"
      >
        <div className="line-clamp-2">
          <h2 className="truncate font-semibold text-zinc-200">{this.props.cardName}</h2>
          <p className="line-clamp-2 text-zinc-400">
          » {this.props.cardName} Hesabıma Göz At. «
          </p>
        </div>
        <div className="flex-shrink-0">
          {this.props.cardType === "youtube" ? (
            <FaYoutube
              size={"23px"}
              className="h-8 w-8 text-zinc-200 opacity-75"
            />
          ) : this.props.cardType === "discord" ? (
            <FaDiscord
              size={"23px"}
              className="h-8 w-8 text-zinc-200 opacity-75"
            />
          ) : this.props.cardType === "github" ? (
            <FaGithub
              size={"23px"}
              className="h-8 w-8 text-zinc-200 opacity-75"
            />
          ) : this.props.cardType === "tiktok" ? (
            <FaTiktok
              size={"23px"}
              className="h-8 w-8 text-zinc-200 opacity-75"
            />
          ) : (
            <FaQuestionCircle
              size={"23px"}
              className="h-8 w-8 text-zinc-200 opacity-75"
            />
          )}
        </div>
      </NextLink>
    );
  }
}
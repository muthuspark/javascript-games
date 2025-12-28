import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderAttr, ssrRenderStyle } from "vue/server-renderer";
import { u as useGameLoader, a as useGameSeo, B as Breadcrumb, G as GameFaqs, R as RelatedGames } from "./RelatedGames-Bqp8dbEn.js";
import { _ as _export_sfc } from "../main.mjs";
import "@unhead/vue";
import "vite-ssg";
const _sfc_main = {
  __name: "NimPage",
  __ssrInlineRender: true,
  setup(__props) {
    const game = {
      slug: "nim",
      title: "Nim Game - Strategic Object Removal",
      shortTitle: "Nim",
      description: "Play Nim against AI. Take objects from piles strategically - whoever takes the last object loses. A classic mathematical strategy game.",
      metaDescription: "Play Nim online free against AI. Remove objects from piles strategically. Whoever takes the last object loses. Multiple difficulty levels available.",
      categories: ["Strategy Games", "Logic Games", "Classic Games"],
      keywords: ["nim game", "strategy game", "mathematical game", "logic puzzle", "two player game", "brain game", "nim sum"],
      initCode: "newGame();",
      faqs: [
        {
          question: "What is Nim and how do you play?",
          answer: "Nim is a mathematical strategy game. The game starts with several piles of objects. On your turn, you must take at least one object from exactly one pile. You can take as many objects as you want from that pile. The player who takes the last object loses the game."
        },
        {
          question: "What is the winning strategy in Nim?",
          answer: 'The winning strategy involves calculating the "Nim sum" - the XOR of all pile sizes. If the Nim sum is non-zero, you can always make a move to make it zero, putting your opponent in a losing position. The AI on hard difficulty uses this optimal strategy.'
        },
        {
          question: "What are the different difficulty levels?",
          answer: "Easy: AI makes random moves. Medium: AI plays optimally 50% of the time. Hard: AI always plays the optimal strategy using Nim sum calculations. Try to beat the AI on hard difficulty!"
        }
      ]
    };
    const breadcrumbItems = [
      { name: "Home", path: "/" },
      { name: "Games", path: "/" },
      { name: game.shortTitle || game.title, path: `/posts/${game.slug}/` }
    ];
    useGameLoader(game.slug, game.initCode);
    useGameSeo(game);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<article${ssrRenderAttrs(mergeProps({
        class: "container py-4",
        itemscope: "",
        itemtype: "https://schema.org/VideoGame"
      }, _attrs))} data-v-26f3a9c0>`);
      _push(ssrRenderComponent(Breadcrumb, { items: breadcrumbItems }, null, _parent));
      _push(`<header class="mb-4" data-v-26f3a9c0><h1 class="mb-2" itemprop="name" data-v-26f3a9c0>${ssrInterpolate(game.title)}</h1><p class="text-muted lead" itemprop="description" data-v-26f3a9c0>${ssrInterpolate(game.description)}</p><div class="mb-3" data-v-26f3a9c0><!--[-->`);
      ssrRenderList(game.categories, (category) => {
        _push(`<span class="badge bg-success me-2" itemprop="genre" data-v-26f3a9c0>${ssrInterpolate(category)}</span>`);
      });
      _push(`<!--]--></div></header><section id="game_main_container" class="game-section" aria-label="Game Area" data-v-26f3a9c0><div class="game-container" data-v-26f3a9c0><div class="controls" data-v-26f3a9c0><select id="difficultySelect" class="difficulty-select" onchange="changeDifficulty()" data-v-26f3a9c0><option value="easy" data-v-26f3a9c0>Easy</option><option value="medium" selected data-v-26f3a9c0>Medium</option><option value="hard" data-v-26f3a9c0>Hard</option></select><button onclick="newGame()" data-v-26f3a9c0>New Game</button></div><div id="gameStatus" class="game-status" data-v-26f3a9c0>Your turn - Select a pile</div><div id="message" class="message" data-v-26f3a9c0></div><div id="pilesContainer" class="piles-container" data-v-26f3a9c0></div><div class="take-section" data-v-26f3a9c0><h3 data-v-26f3a9c0>Take Objects</h3><div id="takeButtons" data-v-26f3a9c0></div></div><div class="rules" data-v-26f3a9c0><h4 data-v-26f3a9c0>How to Play</h4><ul data-v-26f3a9c0><li data-v-26f3a9c0>Click a pile to select it</li><li data-v-26f3a9c0>Choose how many objects to take (at least 1)</li><li data-v-26f3a9c0>You can only take from one pile per turn</li><li data-v-26f3a9c0>The player who takes the last object loses!</li></ul></div></div></section>`);
      _push(ssrRenderComponent(GameFaqs, {
        faqs: game.faqs
      }, null, _parent));
      _push(ssrRenderComponent(RelatedGames, {
        currentSlug: game.slug,
        categories: game.categories
      }, null, _parent));
      _push(`<meta itemprop="url"${ssrRenderAttr("content", `https://games.muthu.co/posts/${game.slug}/`)} data-v-26f3a9c0><meta itemprop="image"${ssrRenderAttr("content", `https://games.muthu.co/posts/${game.slug}/thumbnail.png`)} data-v-26f3a9c0><meta itemprop="applicationCategory" content="Game" data-v-26f3a9c0><meta itemprop="operatingSystem" content="Web Browser" data-v-26f3a9c0><span itemprop="offers" itemscope itemtype="https://schema.org/Offer" style="${ssrRenderStyle({ "display": "none" })}" data-v-26f3a9c0><meta itemprop="price" content="0" data-v-26f3a9c0><meta itemprop="priceCurrency" content="USD" data-v-26f3a9c0></span></article>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/games/NimPage.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const NimPage = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-26f3a9c0"]]);
export {
  NimPage as default
};

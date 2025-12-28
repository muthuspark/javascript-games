import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderAttr, ssrRenderStyle } from "vue/server-renderer";
import { u as useGameLoader, a as useGameSeo, B as Breadcrumb, G as GameFaqs, R as RelatedGames } from "./RelatedGames-Bqp8dbEn.js";
import { _ as _export_sfc } from "../main.mjs";
import "@unhead/vue";
import "vite-ssg";
const _sfc_main = {
  __name: "Connect4Page",
  __ssrInlineRender: true,
  setup(__props) {
    const game = {
      slug: "connect4",
      title: "Connect 4 Game Online - Free to Play",
      shortTitle: "Connect 4",
      description: "Play Connect 4 online against AI. Drop colored discs into a 7x6 grid and be first to connect four in a row. Multiple difficulty levels available.",
      metaDescription: "Play Connect 4 online free against computer AI. 8 difficulty levels from beginner to expert. Classic strategy game - connect four discs to win.",
      categories: ["Puzzles", "Strategy Games", "Classic Games"],
      keywords: ["connect 4", "connect four", "four in a row", "connect 4 online", "strategy game"],
      initCode: "Start();",
      faqs: [
        {
          question: "How do you play Connect 4?",
          answer: "Take turns dropping colored discs into columns. The first player to connect four discs horizontally, vertically, or diagonally wins."
        },
        {
          question: "What is the best strategy for Connect 4?",
          answer: "Control the center column, build multiple threats at once, and block your opponent while setting up your own winning combinations."
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
      }, _attrs))} data-v-a36bcb5c>`);
      _push(ssrRenderComponent(Breadcrumb, { items: breadcrumbItems }, null, _parent));
      _push(`<header class="mb-4" data-v-a36bcb5c><h1 class="mb-2" itemprop="name" data-v-a36bcb5c>${ssrInterpolate(game.title)}</h1><p class="text-muted lead" itemprop="description" data-v-a36bcb5c>${ssrInterpolate(game.description)}</p><div class="mb-3" data-v-a36bcb5c><!--[-->`);
      ssrRenderList(game.categories, (category) => {
        _push(`<span class="badge bg-success me-2" itemprop="genre" data-v-a36bcb5c>${ssrInterpolate(category)}</span>`);
      });
      _push(`<!--]--></div></header><section class="game-section" aria-label="Game Area" data-v-a36bcb5c><div id="connect4" data-v-a36bcb5c><div class="box-left" data-v-a36bcb5c><table id="game_board" data-v-a36bcb5c></table></div><div class="box-right" data-v-a36bcb5c><div id="options" data-v-a36bcb5c><p class="header" data-v-a36bcb5c>Difficulty</p><p data-v-a36bcb5c><select id="difficulty" autocomplete="off" data-v-a36bcb5c><option value="1" data-v-a36bcb5c>Level 1</option><option value="2" data-v-a36bcb5c>Level 2 (Passive)</option><option value="3" data-v-a36bcb5c>Level 3</option><option value="4" selected="selected" data-v-a36bcb5c>Level 4 (Easy)</option><option value="5" data-v-a36bcb5c>Level 5</option><option value="6" data-v-a36bcb5c>Level 6 (Moderate)</option><option value="7" data-v-a36bcb5c>Level 7</option><option value="8" data-v-a36bcb5c>Level 8 (Tougher)</option></select></p><p data-v-a36bcb5c><button onclick="Game.restartGame();" type="submit" data-v-a36bcb5c>Restart game</button></p></div></div></div></section>`);
      _push(ssrRenderComponent(GameFaqs, {
        faqs: game.faqs
      }, null, _parent));
      _push(ssrRenderComponent(RelatedGames, {
        currentSlug: game.slug,
        categories: game.categories
      }, null, _parent));
      _push(`<meta itemprop="url"${ssrRenderAttr("content", `https://games.muthu.co/posts/${game.slug}/`)} data-v-a36bcb5c><meta itemprop="image"${ssrRenderAttr("content", `https://games.muthu.co/posts/${game.slug}/thumbnail.png`)} data-v-a36bcb5c><meta itemprop="applicationCategory" content="Game" data-v-a36bcb5c><meta itemprop="operatingSystem" content="Web Browser" data-v-a36bcb5c><span itemprop="offers" itemscope itemtype="https://schema.org/Offer" style="${ssrRenderStyle({ "display": "none" })}" data-v-a36bcb5c><meta itemprop="price" content="0" data-v-a36bcb5c><meta itemprop="priceCurrency" content="USD" data-v-a36bcb5c></span></article>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/games/Connect4Page.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Connect4Page = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-a36bcb5c"]]);
export {
  Connect4Page as default
};

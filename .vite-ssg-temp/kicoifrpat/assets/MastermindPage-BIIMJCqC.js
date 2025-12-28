import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderAttr, ssrRenderStyle } from "vue/server-renderer";
import { u as useGameLoader, a as useGameSeo, B as Breadcrumb, G as GameFaqs, R as RelatedGames } from "./RelatedGames-Bqp8dbEn.js";
import { _ as _export_sfc } from "../main.mjs";
import "@unhead/vue";
import "vite-ssg";
const _sfc_main = {
  __name: "MastermindPage",
  __ssrInlineRender: true,
  setup(__props) {
    const game = {
      slug: "mastermind",
      title: "Mastermind Game - Code Breaking Puzzle",
      shortTitle: "Mastermind",
      description: "Crack the secret color code in 10 guesses or less. Use logic and deduction from feedback pegs to figure out the hidden pattern.",
      metaDescription: "Play Mastermind online free. Guess the secret 4-color code using logic and deduction. Get feedback after each guess to crack the code in 10 tries.",
      categories: ["Puzzles", "Logic Games", "Classic Games"],
      keywords: ["mastermind", "code breaker", "logic puzzle", "deduction game", "color code", "brain game"],
      initCode: "newGame();",
      faqs: [
        {
          question: "How do you play Mastermind?",
          answer: "The computer creates a secret 4-color code. You make guesses by selecting colors and submitting them. After each guess, you receive feedback: black pegs mean a color is correct and in the right position, white pegs mean a color is correct but in the wrong position. Use this feedback to deduce the secret code within 10 guesses."
        },
        {
          question: "What do the feedback pegs mean?",
          answer: "Black pegs indicate you have the right color in the right position. White pegs indicate you have a correct color but in the wrong position. No peg means that color is not in the code (or all instances are already accounted for). The pegs do not tell you which specific colors they refer to."
        },
        {
          question: "What is a good strategy for Mastermind?",
          answer: 'Start with a guess using different colors to gather maximum information. Pay attention to how many pegs you get. If you get 2 black pegs, try keeping 2 colors in their positions and changing the others. Eliminate colors systematically based on feedback. Some players use the "1-1-2-2" starting pattern to efficiently narrow down possibilities.'
        },
        {
          question: "Can colors repeat in Mastermind?",
          answer: "In this version, yes! The secret code can contain the same color multiple times. This adds complexity because you need to consider that a color might appear more than once in the solution."
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
      }, _attrs))} data-v-be3c22e0>`);
      _push(ssrRenderComponent(Breadcrumb, { items: breadcrumbItems }, null, _parent));
      _push(`<header class="mb-4" data-v-be3c22e0><h1 class="mb-2" itemprop="name" data-v-be3c22e0>${ssrInterpolate(game.title)}</h1><p class="text-muted lead" itemprop="description" data-v-be3c22e0>${ssrInterpolate(game.description)}</p><div class="mb-3" data-v-be3c22e0><!--[-->`);
      ssrRenderList(game.categories, (category) => {
        _push(`<span class="badge bg-success me-2" itemprop="genre" data-v-be3c22e0>${ssrInterpolate(category)}</span>`);
      });
      _push(`<!--]--></div></header><section class="game-section" aria-label="Game Area" data-v-be3c22e0><div id="game_main_container" class="game-container" data-v-be3c22e0><div id="secretCode" class="secret-code" data-v-be3c22e0></div><div class="legend" data-v-be3c22e0><div class="legend-item" data-v-be3c22e0><div class="legend-pin black" data-v-be3c22e0></div><span data-v-be3c22e0>Correct color &amp; position</span></div><div class="legend-item" data-v-be3c22e0><div class="legend-pin white" data-v-be3c22e0></div><span data-v-be3c22e0>Correct color, wrong position</span></div></div><div id="board" data-v-be3c22e0></div><div id="colorPalette" class="color-palette" data-v-be3c22e0></div><div class="controls" data-v-be3c22e0><button class="primary" onclick="submitGuess()" data-v-be3c22e0>Submit Guess</button><button class="secondary" onclick="undoLastColor()" data-v-be3c22e0>Undo</button><button class="secondary" onclick="clearCurrentGuess()" data-v-be3c22e0>Clear</button><button class="danger" onclick="newGame()" data-v-be3c22e0>New Game</button></div><div class="stats" data-v-be3c22e0><div data-v-be3c22e0>Guesses: <span id="guessCount" data-v-be3c22e0>0 / 10</span></div><div data-v-be3c22e0>Won: <span id="gamesWon" data-v-be3c22e0>0</span></div><div data-v-be3c22e0>Played: <span id="gamesPlayed" data-v-be3c22e0>0</span></div><div data-v-be3c22e0>Win Rate: <span id="winRate" data-v-be3c22e0>0%</span></div></div><div id="message" class="message" data-v-be3c22e0></div><p class="instructions" data-v-be3c22e0> Crack the secret 4-color code! Click colors to build your guess, then submit. Black pegs mean right color in right position. White pegs mean right color in wrong position. </p></div></section>`);
      _push(ssrRenderComponent(GameFaqs, {
        faqs: game.faqs
      }, null, _parent));
      _push(ssrRenderComponent(RelatedGames, {
        currentSlug: game.slug,
        categories: game.categories
      }, null, _parent));
      _push(`<meta itemprop="url"${ssrRenderAttr("content", `https://games.muthu.co/posts/${game.slug}/`)} data-v-be3c22e0><meta itemprop="image"${ssrRenderAttr("content", `https://games.muthu.co/posts/${game.slug}/thumbnail.png`)} data-v-be3c22e0><meta itemprop="applicationCategory" content="Game" data-v-be3c22e0><meta itemprop="operatingSystem" content="Web Browser" data-v-be3c22e0><span itemprop="offers" itemscope itemtype="https://schema.org/Offer" style="${ssrRenderStyle({ "display": "none" })}" data-v-be3c22e0><meta itemprop="price" content="0" data-v-be3c22e0><meta itemprop="priceCurrency" content="USD" data-v-be3c22e0></span></article>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/games/MastermindPage.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const MastermindPage = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-be3c22e0"]]);
export {
  MastermindPage as default
};

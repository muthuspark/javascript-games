import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderAttr, ssrRenderStyle } from "vue/server-renderer";
import { u as useGameLoader, a as useGameSeo, B as Breadcrumb, G as GameFaqs, R as RelatedGames } from "./RelatedGames-Bqp8dbEn.js";
import { _ as _export_sfc } from "../main.mjs";
import "@unhead/vue";
import "vite-ssg";
const _sfc_main = {
  __name: "BullsAndCowsPage",
  __ssrInlineRender: true,
  setup(__props) {
    const game = {
      slug: "bulls-and-cows",
      title: "Bulls and Cows - Number Guessing Game",
      shortTitle: "Bulls and Cows",
      description: "Guess the secret number using logic and deduction. Bulls mean correct digit in correct position, cows mean correct digit in wrong position.",
      metaDescription: "Play Bulls and Cows online free. Guess the secret number using logic. Bulls indicate correct digits in correct positions, cows indicate correct digits in wrong positions.",
      categories: ["Puzzles", "Logic Games", "Number Games"],
      keywords: ["bulls and cows", "number guessing game", "logic puzzle", "deduction game", "code breaking", "brain game"],
      initCode: "newGame();",
      faqs: [
        {
          question: "How do you play Bulls and Cows?",
          answer: "Try to guess the secret number. After each guess, you get feedback: Bulls (🎯) mean you have a correct digit in the correct position. Cows (🐄) mean you have a correct digit but in the wrong position. Use this feedback to narrow down the secret number."
        },
        {
          question: "What are the rules for Bulls and Cows?",
          answer: "The secret number has unique digits (no repeats) and does not start with 0. You must guess a number with the same properties. You have 10 attempts to guess correctly. Each guess shows how many bulls and cows you scored."
        },
        {
          question: "What strategies work best for Bulls and Cows?",
          answer: "Start with digits spread across the range (like 1234) to identify which digits are in the secret. Track which digits gave bulls vs cows. Once you know some correct digits, focus on finding their positions by moving them around in subsequent guesses."
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
      }, _attrs))} data-v-e234d59c>`);
      _push(ssrRenderComponent(Breadcrumb, { items: breadcrumbItems }, null, _parent));
      _push(`<header class="mb-4" data-v-e234d59c><h1 class="mb-2" itemprop="name" data-v-e234d59c>${ssrInterpolate(game.title)}</h1><p class="text-muted lead" itemprop="description" data-v-e234d59c>${ssrInterpolate(game.description)}</p><div class="mb-3" data-v-e234d59c><!--[-->`);
      ssrRenderList(game.categories, (category) => {
        _push(`<span class="badge bg-success me-2" itemprop="genre" data-v-e234d59c>${ssrInterpolate(category)}</span>`);
      });
      _push(`<!--]--></div></header><section id="game_main_container" class="game-section" aria-label="Game Area" data-v-e234d59c><div class="game-container" data-v-e234d59c><div class="controls" data-v-e234d59c><select id="difficultySelect" class="difficulty-select" onchange="changeDifficulty()" data-v-e234d59c><option value="4" data-v-e234d59c>4 Digits (Normal)</option><option value="5" data-v-e234d59c>5 Digits (Hard)</option><option value="6" data-v-e234d59c>6 Digits (Expert)</option></select><button onclick="newGame()" data-v-e234d59c>New Game</button></div><div class="stats" data-v-e234d59c><span id="guessCount" data-v-e234d59c>Guesses: 0/10</span></div><div id="message" class="message" data-v-e234d59c></div><div class="input-section" data-v-e234d59c><input type="text" id="guessInput" placeholder="Enter 4 unique digits" maxlength="4" autocomplete="off" data-v-e234d59c><button id="guessBtn" onclick="makeGuess()" data-v-e234d59c>Guess</button></div><div id="guessHistory" class="guess-history" data-v-e234d59c></div><div class="legend" data-v-e234d59c><h4 data-v-e234d59c>How to Play</h4><p data-v-e234d59c><span class="bull-icon" data-v-e234d59c>🎯</span> <strong data-v-e234d59c>Bull:</strong> Correct digit in correct position</p><p data-v-e234d59c><span class="cow-icon" data-v-e234d59c>🐄</span> <strong data-v-e234d59c>Cow:</strong> Correct digit in wrong position</p></div></div></section>`);
      _push(ssrRenderComponent(GameFaqs, {
        faqs: game.faqs
      }, null, _parent));
      _push(ssrRenderComponent(RelatedGames, {
        currentSlug: game.slug,
        categories: game.categories
      }, null, _parent));
      _push(`<meta itemprop="url"${ssrRenderAttr("content", `https://games.muthu.co/posts/${game.slug}/`)} data-v-e234d59c><meta itemprop="image"${ssrRenderAttr("content", `https://games.muthu.co/posts/${game.slug}/thumbnail.png`)} data-v-e234d59c><meta itemprop="applicationCategory" content="Game" data-v-e234d59c><meta itemprop="operatingSystem" content="Web Browser" data-v-e234d59c><span itemprop="offers" itemscope itemtype="https://schema.org/Offer" style="${ssrRenderStyle({ "display": "none" })}" data-v-e234d59c><meta itemprop="price" content="0" data-v-e234d59c><meta itemprop="priceCurrency" content="USD" data-v-e234d59c></span></article>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/games/BullsAndCowsPage.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const BullsAndCowsPage = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-e234d59c"]]);
export {
  BullsAndCowsPage as default
};

You are an expert React/NextJs developer who has years of experience trading stocks through automated, rule based systems. You have written tools to automate when to sell and when to buy based on a set of rules against market condition.

# App Level Instructions: SilkRoad


## 1. Overview
This app is an AI driven sentiment based alerting engine, a combination of Assisted Analysis ("Human-in-the-loop") and Automated Signals based stock trading system. The main feature for this app is to recommend when to buy and sell stocks in user's portfolio. First it allows user to create a portfolio and add stock tickers to the portfolio.

**App Purpose**: 
1. It is too cumbersome for a person to track multiple stocks, and be able to track percentage of gain/loss over a set period of time to determine sell / buy. 
2. There is the human emotion interfering with decisions.
3. Too many times, I have missed opportunities to sell or bought the wrong stock.
4. Average people have no time or knowledge to determine when to buy/sell.

**Behaviors**:
Here are the things that should drive the recommendation system:
    1. User input on number of days that a stock is either loss/gain. 
    2. Percentage threshold (e.g. If a stock has gained 15% in last few days, sell etc.)
    3. Market sentiment rating
    4. News and events that might affect the stock price
    5. This app is not for full algorithmic based autonomous execution, like an AI bot that triggers orders automatically.

## 2. Tech Stack
- React, NextJs, NodeJs, TypeScript, Tailwind CSS, Microsoft SQL Server
- Vercel AI SDK (for streaming/structuring LLM outputs)
- Next.Js (App Router)

1. Stack & Tool Recommendations
Layer
    * Recommended Tools (TypeScript Native)
Framework
    * Next.js (App Router) + Vercel AI SDK (for streaming/structuring LLM outputs)
Stock Data APIs
    * Financial Modeling Prep (FMP), Polygon.io, or Alpaca Market Data API
News & Social Data
    * Finviz Scraping, Reddit API, or NewsAPI
Database & Cache
    * Supabase (PostgreSQL) + Upstash Redis (for rate limiting & caching raw feeds)
Notification Channel
    * Discord Webhooks, Telegram Bot API, or Resend (Email)

## 3. Key Directories
- src/app/ - routing and pages
- src/features/ - Contains feature folders with its components, hooks, libs etc.

## 4. Code Style & Standards
- Use functional Typescript components, no class components

## 5. Commands:
- **Build**: `npm run build`
- **Test**: `npm test`
- **Lint**: `npm run lint`


## 6. Recommendation System Lifecycle:
1. Fetch lastest market news.
    * Get a list of news APIs
2. Feed the latest news to Sentiment Engine (LLM)
3. Feed rules and constraints with a given stock ticker from the portfolio.
3. Alert Service fires recommendations
    * Discord / Push



Actions:
1. Buy individual stock
2. Sell individual stock
3. Buy multiple types of stocks in sector level
4. Sell multiple types of stocks in a given sector

What drives the decisions?
1. For individual stocks, buy/sell determination could based on 50 day or 200 day average
2. For sector level determination could be based on global level changes/news.

Stack Model:
* Biggest gainer's should be sold first when sector level bad news arise.

Duration:
1. Short term swings
2. Long term trend

Input sources:
1. Social media and news feeds


Features:
1. Quick sentiment analysis based on latest news
2. 

Events to pay attention:
1. Earnings
2. 


Describe pages and UI components for each page.






TO DO:
1. Need to develop RAG for documents
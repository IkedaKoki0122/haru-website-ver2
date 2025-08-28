import { test, expect } from '@playwright/test';

test.describe('英語習得研究所 Homepage', () => {
  test('should display the homepage correctly', async ({ page }) => {
    await page.goto('/');
    
    // Check if the page title contains 英語習得研究所
    await expect(page).toHaveTitle(/英語習得研究所/);
    
    // Check header elements
    await expect(page.locator('header')).toBeVisible();
    await expect(page.getByText('英語習得研究所')).toBeVisible();
    await expect(page.getByRole('button', { name: '無料カウンセリング' })).toBeVisible();
    
    // Check navigation menu
    await expect(page.getByText('英語習得研究所とは')).toBeVisible();
    await expect(page.getByText('コース・料金')).toBeVisible();
    await expect(page.getByText('トピックス')).toBeVisible();
    await expect(page.getByText('利用者の声')).toBeVisible();
    await expect(page.getByText('スクールを探す')).toBeVisible();
    await expect(page.getByText('Q&A')).toBeVisible();
    await expect(page.getByText('会社情報')).toBeVisible();
  });

  test('should display hero section', async ({ page }) => {
    await page.goto('/');
    
    // Check hero image
    await expect(page.locator('img[alt="英語習得研究所 Hero"]')).toBeVisible();
  });

  test('should display 3 features section', async ({ page }) => {
    await page.goto('/');
    
    // Check section title
    await expect(page.getByText('3つの特徴')).toBeVisible();
    
    // Check feature items
    await expect(page.getByText('科学的カリキュラム')).toBeVisible();
    await expect(page.getByText('専属コンサルタント')).toBeVisible();
    await expect(page.getByText('継続サポート')).toBeVisible();
    
    // Check icons
    await expect(page.locator('img[alt="科学的カリキュラム"]')).toBeVisible();
    await expect(page.locator('img[alt="専属コンサルタント"]')).toBeVisible();
    await expect(page.locator('img[alt="継続サポート"]')).toBeVisible();
  });

  test('should display course lineup', async ({ page }) => {
    await page.goto('/');
    
    // Check section title
    await expect(page.getByText('コースラインナップ')).toBeVisible();
    
    // Check course cards
    await expect(page.getByText('ビジネス英会話コース')).toBeVisible();
    await expect(page.getByText('TOEIC L&R TESTコース')).toBeVisible();
    await expect(page.getByText('TOEFL iBT TESTコース')).toBeVisible();
    await expect(page.getByText('初級者コース')).toBeVisible();
    
    // Check course icons
    await expect(page.locator('img[alt="ビジネス英会話コース"]')).toBeVisible();
    await expect(page.locator('img[alt="TOEIC L&R TESTコース"]')).toBeVisible();
    await expect(page.locator('img[alt="TOEFL iBT TESTコース"]')).toBeVisible();
    await expect(page.locator('img[alt="初級者コース"]')).toBeVisible();
    
    // Check pricing
    await expect(page.locator('text=¥544,500〜').first()).toBeVisible();
  });

  test('should display CTA section', async ({ page }) => {
    await page.goto('/');
    
    // Check CTA section
    await expect(page.getByText('無料カウンセリング実施中')).toBeVisible();
    await expect(page.getByRole('button', { name: '今すぐ申し込む' })).toBeVisible();
    
    // Check background image
    await expect(page.locator('img[alt="Background"]')).toBeVisible();
  });

  test('should display footer', async ({ page }) => {
    await page.goto('/');
    
    // Check footer sections
    await expect(page.locator('footer')).toBeVisible();
    await expect(page.locator('footer').getByText('英語習得研究所')).toBeVisible();
    await expect(page.getByText('サービス')).toBeVisible();
    await expect(page.getByText('会社情報')).toBeVisible();
    await expect(page.getByText('サポート')).toBeVisible();
    
    // Check copyright
    await expect(page.getByText('© 2024 英語習得研究所. All rights reserved.')).toBeVisible();
  });

  test('should be responsive', async ({ page }) => {
    await page.goto('/');
    
    // Test mobile viewport
    await page.setViewportSize({ width: 375, height: 667 });
    await expect(page.locator('header')).toBeVisible();
    await expect(page.getByText('英語習得研究所')).toBeVisible();
    
    // Test tablet viewport
    await page.setViewportSize({ width: 768, height: 1024 });
    await expect(page.locator('header')).toBeVisible();
    await expect(page.getByText('英語習得研究所')).toBeVisible();
    
    // Test desktop viewport
    await page.setViewportSize({ width: 1200, height: 800 });
    await expect(page.locator('header')).toBeVisible();
    await expect(page.getByText('英語習得研究所')).toBeVisible();
  });

  test('buttons should be clickable', async ({ page }) => {
    await page.goto('/');
    
    // Test header CTA button
    const headerCTA = page.getByRole('button', { name: '無料カウンセリング' });
    await expect(headerCTA).toBeVisible();
    await expect(headerCTA).toBeEnabled();
    
    // Test main CTA button
    const mainCTA = page.getByRole('button', { name: '今すぐ申し込む' });
    await expect(mainCTA).toBeVisible();
    await expect(mainCTA).toBeEnabled();
    
    // Test course detail buttons
    const detailButtons = page.getByRole('button', { name: '詳細を見る' });
    await expect(detailButtons.first()).toBeVisible();
    await expect(detailButtons.first()).toBeEnabled();
  });
});
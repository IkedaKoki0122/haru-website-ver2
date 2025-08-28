import { NextRequest, NextResponse } from "next/server";
import { logger } from "@/utils/logger";

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    
    // フォームデータの検証
    const { name, email, phone, experience, goal } = data;
    
    if (!name || !email || !phone || !experience || !goal) {
      return NextResponse.json(
        { error: "必須フィールドが不足しています" },
        { status: 400 }
      );
    }

    // RFC 5322準拠のメールアドレス検証
    const emailRegex = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "有効なメールアドレスを入力してください" },
        { status: 400 }
      );
    }

    // ここで実際の処理を行う（例：データベースへの保存、メール送信など）
    logger.info("無料カウンセリング申し込み受信", {
      name,
      email: email.replace(/(.{2}).*(@.*)/, "$1***$2"), // メールアドレス部分マスク
      hasPhone: !!phone,
      preferredDate: data.preferredDate,
      preferredTime: data.preferredTime,
      experience,
      goal,
      hasMessage: !!data.message,
      timestamp: new Date().toISOString(),
    });

    // 実際のアプリケーションでは、ここでメール送信やデータベース保存を行う
    // 例：
    // - 管理者への通知メール送信
    // - 顧客への自動返信メール送信
    // - データベースへの申し込み情報保存
    // - CRMシステムとの連携

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    logger.error("無料カウンセリング申し込み処理エラー", error);
    return NextResponse.json(
      { error: "サーバーエラーが発生しました" },
      { status: 500 }
    );
  }
}
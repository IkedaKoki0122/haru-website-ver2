import { list, del } from '@vercel/blob';
import { NextRequest, NextResponse } from 'next/server';

// 動画ファイル一覧を取得
export async function GET() {
  try {
    const { blobs } = await list({
      prefix: 'videos/',
    });

    const videos = blobs.map(blob => ({
      url: blob.url,
      downloadUrl: blob.downloadUrl,
      pathname: blob.pathname,
      size: blob.size,
      uploadedAt: blob.uploadedAt,
    }));

    return NextResponse.json({ videos });

  } catch (error) {
    console.error('動画一覧取得エラー:', error);
    return NextResponse.json(
      { error: '動画一覧の取得に失敗しました' },
      { status: 500 }
    );
  }
}

// 動画ファイルを削除
export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const url = searchParams.get('url');

    if (!url) {
      return NextResponse.json(
        { error: '削除するファイルのURLが必要です' },
        { status: 400 }
      );
    }

    await del(url);

    return NextResponse.json({ 
      message: '動画ファイルが正常に削除されました' 
    });

  } catch (error) {
    console.error('動画削除エラー:', error);
    return NextResponse.json(
      { error: '動画ファイルの削除に失敗しました' },
      { status: 500 }
    );
  }
}
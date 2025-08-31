import { put } from '@vercel/blob';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const filename = searchParams.get('filename');

    if (!filename) {
      return NextResponse.json(
        { error: 'ファイル名が必要です' },
        { status: 400 }
      );
    }

    if (!request.body) {
      return NextResponse.json(
        { error: 'ファイルデータが必要です' },
        { status: 400 }
      );
    }

    // ファイル拡張子をチェック（動画ファイルのみ許可）
    const allowedExtensions = ['.mp4', '.webm', '.mov', '.avi', '.mkv'];
    const fileExtension = filename.toLowerCase().substring(filename.lastIndexOf('.'));
    
    if (!allowedExtensions.includes(fileExtension)) {
      return NextResponse.json(
        { error: '許可されていないファイル形式です。動画ファイルのみアップロード可能です。' },
        { status: 400 }
      );
    }

    // Vercel Blobにアップロード
    const blob = await put(`videos/${filename}`, request.body, {
      access: 'public',
      contentType: `video/${fileExtension.slice(1)}`,
    });

    return NextResponse.json({
      url: blob.url,
      downloadUrl: blob.downloadUrl,
      pathname: blob.pathname,
      size: blob.size,
    });

  } catch (error) {
    console.error('動画アップロードエラー:', error);
    return NextResponse.json(
      { error: '動画のアップロードに失敗しました' },
      { status: 500 }
    );
  }
}
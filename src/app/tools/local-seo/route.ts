// app/api/local-seo/route.ts
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { business, location, website } = body;

    // Validate inputs
    if (!business || !location) {
      return NextResponse.json(
        { error: 'Business name and location are required' },
        { status: 400 }
      );
    }

    // Simulate processing delay
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Calculate score based on inputs
    let score = 65;
    if (business.length > 10) score += 10;
    if (business.match(/[0-9]/)) score += 5;
    if (location.length > 5) score += 10;
    if (website && website.includes('https')) score += 10;
    score = Math.min(score, 98);

    // Determine grade
    let grade: 'A' | 'B' | 'C' | 'D' | 'F' = 'C';
    if (score >= 90) grade = 'A';
    else if (score >= 80) grade = 'B';
    else if (score >= 70) grade = 'C';
    else if (score >= 60) grade = 'D';
    else grade = 'F';

    const city = location.split(',')[0].trim();
    const businessWord = business.split(' ')[0];

    // Generate issues
    const issues: string[] = [];
    if (!website) issues.push('No website detected - essential for local SEO');
    else if (!website.includes('https')) issues.push('Website not using HTTPS - security concern');
    issues.push('Google Business Profile incomplete - missing photos and categories');
    issues.push('Inconsistent NAP citations across directories');
    issues.push('Missing location-based keywords in website content');

    // Generate recommendations
    const recommendations: string[] = [];
    recommendations.push(`Complete your Google Business Profile with photos, services, and regular posts for ${location}`);
    recommendations.push(`Add "${businessWord} near ${city}" to your title tags and headings`);
    if (!website) recommendations.push('Create a professional website with local business schema markup');
    else recommendations.push('Implement LocalBusiness schema markup on your website');
    recommendations.push('Build local citations on Yelp, Yellow Pages, and BBB');
    recommendations.push('Encourage customer reviews and respond to all feedback');

    // Generate strengths
    const strengths: string[] = [];
    if (business.length > 10) strengths.push('Clear and descriptive business name');
    if (location.length > 5) strengths.push(`Strong local presence in ${city}`);
    if (website && website.includes('https')) strengths.push('Secure website with HTTPS');
    if (strengths.length === 0) strengths.push('Foundation for local SEO exists');

    // Generate competitors
    const competitors = [
      { name: `${businessWord}Pro ${city}`, score: 78, strengths: ['Strong online reviews', 'Fast website'] },
      { name: `${city} ${businessWord} Solutions`, score: 72, strengths: ['Local partnerships', 'High authority'] },
      { name: `Premier ${businessWord} ${city}`, score: 68, strengths: ['Excellent service', 'Years of experience'] },
      { name: `${businessWord} Masters ${city}`, score: 65, strengths: ['Competitive pricing', 'Quick response'] },
    ];

    // Return the result
    const result = {
      score,
      grade,
      issues: issues.slice(0, 4),
      recommendations: recommendations.slice(0, 5),
      strengths: strengths.slice(0, 3),
      metrics: {
        gbpCompleteness: 55 + Math.floor(Math.random() * 30),
        citationConsistency: 50 + Math.floor(Math.random() * 35),
        reviewScore: Number((3.5 + Math.random() * 1.2).toFixed(1)),
        localKeywords: 45 + Math.floor(Math.random() * 40),
        mobileOptimization: 60 + Math.floor(Math.random() * 30),
      },
      competitors,
      localRankings: {
        currentPosition: score >= 80 ? 5 : score >= 70 ? 8 : score >= 60 ? 12 : 18,
        potentialPosition: score >= 80 ? 3 : score >= 70 ? 5 : score >= 60 ? 8 : 12,
        nearbyCompetitors: 12 + Math.floor(Math.random() * 15),
      },
      insights: {
        topKeyword: `${businessWord} near ${city}`,
        searchVolume: 500 + Math.floor(Math.random() * 2000),
        difficulty: score >= 80 ? 'Easy' : score >= 60 ? 'Medium' : 'Hard',
        opportunity: score >= 80 ? 'Small opportunity - maintain current efforts' : 
                     score >= 60 ? 'Good opportunity to improve local visibility' : 
                     'Major opportunity to outrank competitors',
      },
    };

    return NextResponse.json(result);

  } catch (error) {
    console.error('Local SEO API Error:', error);
    return NextResponse.json(
      { error: 'Failed to analyze local SEO. Please try again.' },
      { status: 500 }
    );
  }
}
import { Request, Response, NextFunction } from 'express';
import { User, Team, Matches, LeaderBoard, TeamsAndCorrespondingMatches } from './types';

export interface IUserDB {
  getByEmail(email: string): Promise< User | null >,
}

export interface ILoginService {
  authenticateUser(email: string, password: string): Promise<User | boolean>,
}

export interface IAuthService {
  verifyToken(token: string): { email: string, role: string }
  generateToken(email: string, role: string): string
}

export interface IValidation {
  verifyToken(req: Request, res: Response, next: NextFunction): void,
}

export interface ITeamsService {
  getAll(): Promise<Team[] | null>
  getById(id: number): Promise<Team | null>
}

export interface ITeamDB {
  getAll(): Promise<Team[] | null>,
  getById(id: number): Promise<Team | null>
  getTeamsAndCorrespondingMatches(): Promise<TeamsAndCorrespondingMatches[] | null>
}

export interface IMatchesService {
  getAll(): Promise<Matches[] | null>
  create(match: Matches): Promise<Matches>
  update(id: number): void
  updateGoals(id: number, homeTeamGoals: number, awayTeamGoals: number): Promise<number>
}

export interface IMatchesDB {
  getAll(): Promise<Matches[] | null>,
  create(match: Matches): Promise<Matches>
  update(id: number): void
  updateGoals(id: number, homeTeamGoals: number, awayTeamGoals: number): Promise<number>
}

export interface ILeaderBoardService {
  getLeaderboard(awayOrHome?: string): Promise<LeaderBoard[] | null>
  rank?: number,
  name: string,
  totalPoints: number,
  totalGames: number,
  totalVictories: number,
  totalDraws: number,
  totalLosses: number,
  goalsFavor: number,
  goalsOwn: number,
  goalsBalance: number,
  efficiency: number
}
